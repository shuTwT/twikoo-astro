<template>
  <div class="tk-submit">
    <div class="tk-row">
      <div class="tk-col">
        <TkAvatar :config="config" :mail="mail" style="width: 100%;margin: 1.25rem 0;" />
        <TkMetaInput :nick="nick" :mail="mail" :link="link" @update="onMetaUpdate" :config="config" />
        <ElInput class="tk-input" type="textarea" ref="textareaRef" v-model="comment" show-word-limit
          :placeholder="commentPlaceholder" :autosize="{ minRows: 3 }" :maxlength="maxLength" @input="onCommentInput"
          @keyup.enter.native="onEnterKeyUp($event)" />
      </div>
    </div>
    <div class="tk-row actions">
      <div class="tk-row-actions-start">
        <div class="tk-submit-action-icon OwO" v-show="config.SHOW_EMOTION === 'true'" v-html="iconEmotion"
          v-click-outside="closeOwo" ref="owoRef">
        </div>
        <div class="tk-submit-action-icon" v-show="config.SHOW_IMAGE === 'true'" v-html="iconImage"
          @click="openSelectImage"></div>
        <input class="tk-input-image" type="file" accept="image/*" value="" ref="inputFileRef" @change="onSelectImage" />
        <div class="tk-error-message">{{ errorMessage }}</div>
      </div>
      <a class="tk-submit-action-icon __markdown" alt="Markdown is supported"
        href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer"
        v-html="iconMarkdown"></a>
      <ElButton class="tk-cancel" v-if="!!replyId" size="small" @click="cancel">{{ t('SUBMIT_CANCEL') }}</ElButton>
      <ElButton class="tk-preview" size="small" @click="preview">{{ t('SUBMIT_PREVIEW') }}</ElButton>
      <ElButton class="tk-send" type="primary" size="small" :disabled="!canSend" @click="send">{{ isSending ?
        t('SUBMIT_SENDING') : t('SUBMIT_SEND') }}</ElButton>
    </div>
    <div class="tk-preview-container" v-if="isPreviewing" v-html="commentHtml" ref="commentPreviewRef"></div>
  </div>
</template>
  
<script setup>
import {useStore} from "@nanostores/vue"
import { ElButton, ElInput, ClickOutside as vClickOutside } from 'element-plus'
import iconMarkdown from '@fortawesome/fontawesome-free/svgs/brands/markdown.svg?raw'
import iconEmotion from '@fortawesome/fontawesome-free/svgs/regular/laugh.svg?raw'
import iconImage from '@fortawesome/fontawesome-free/svgs/regular/image.svg?raw'
import TkAvatar from './TkAvatar.vue'
import TkMetaInput from './TkMetaInput.vue'
import t from '../utils/i18n'
import {marked,  call, logger, renderLinks, renderMath, renderCode, initOwoEmotions, initMarkedOwo, getUrl, getHref, blobToDataURL } from '../utils'
import OwO from '../lib/owo'
import { twikooStore, tcbStore,$owoStore,initOwoData } from '../store'
import { computed,  ref, nextTick, watch,onMounted } from 'vue'

const imageTypes = [
  'apng',
  'bmp',
  'gif',
  'jpeg',
  'jpg',
  'png',
  'svg',
  'tif',
  'tiff',
  'webp'
]

const props = defineProps({
  replyId: String,
  pid: String,
  config: Object
})

const emit = defineEmits(['cancel', 'load'])

const owoStore=useStore($owoStore)

const isSending = ref(false)
const isPreviewing = ref(false)
const isMetaValid = ref(false)
const errorMessage = ref('')
const owo = ref(null)
const comment = ref('')
const commentHtml = ref('')
const nick = ref('')
const mail = ref('')
const link = ref('')

const textareaRef = ref(null)
const owoRef = ref(null)
const inputFileRef = ref(null)
const commentPreviewRef = ref(null)

const canSend = computed(() => {
  return !isSending.value &&
    !!isMetaValid.value &&
    !!comment.value.trim()
})
const textarea = computed(() => {
  return textareaRef.value ? textareaRef.value.$refs.textarea : null
})
const commentPlaceholder = computed(() => {
  let ph = twikooStore.get().placeholder || props.config.COMMENT_PLACEHOLDER || ''
  ph = ph.replace(/<br>/g, '\n')
  return ph
})
const maxLength = computed(() => {
  let limitLength = parseInt(props.config.LIMIT_LENGTH)
  if (Number.isNaN(limitLength)) limitLength = 500
  return limitLength > 0 ? limitLength : null
})

function initDraft() {
  const draft = localStorage.getItem('twikoo-draft')
  if (!comment.value && draft) {
    comment.value = draft
  }
}
function saveDraft() {
  localStorage.setItem('twikoo-draft', comment.value)
}
async function initOwo() {
  if (props.config.SHOW_EMOTION === 'true') {
    let odata
    odata=owoStore.value.odata
    if (!odata||JSON.stringify(odata)=='{}'){
        odata = await initOwoEmotions(props.config.EMOTION_CDN || 'https://owo.imaegoo.com/owo.json')
    }
    
    owo.value = new OwO({
      logo: iconEmotion, // OwO button text, default: `OωO表情`
      container: owoRef.value, // OwO container, default: `document.getElementsByClassName('OwO')[0]`
      target: textarea.value, // OwO target input or textarea, default: `document.getElementsByTagName('textarea')[0]`
      odata,
      position: 'down', // OwO body position, default: `down`
      maxHeight: '250px' // OwO body max-height, default: `250px`
    })
    marked.setOptions({ odata: initMarkedOwo(odata) })
  }
}
function onMetaUpdate(updates) {
  nick.value = updates.meta.nick
  mail.value = updates.meta.mail
  link.value = updates.meta.link
  isMetaValid.value = updates.valid
}
function cancel() {
  emit('cancel')
}
function onCommentInput() {
  saveDraft()
  updatePreview()
}
function preview() {
  isPreviewing.value = !isPreviewing.value
  updatePreview()
}
function updatePreview() {
  if (isPreviewing.value) {
    commentHtml.value = marked.parse(comment.value)
    nextTick(() => {
      renderLinks(commentPreviewRef.value)
      renderMath(commentPreviewRef.value, twikooStore.get().katex)
      if (props.config.HIGHLIGHT === 'true') {
        renderCode(commentPreviewRef.value, props.config.HIGHLIGHT_THEME)
      }
    })
  }
}
async function send() {
  isSending.value = true
  try {
    if (comment.value.match(new RegExp(`!\\[${t('IMAGE_UPLOAD_PLACEHOLDER')}.+\\]\\(\\)`))) {
      throw new Error(t('IMAGE_UPLOAD_PLEASE_WAIT'))
    }
    const url = getUrl(twikooStore.get().path)
    const href = getHref(twikooStore.get().href)
    const commentForm = {
      nick: nick.value,
      mail: mail.value,
      link: link.value,
      ua: navigator.userAgent,
      url,
      href,
      comment: marked.parse(comment.value),
      pid: props.pid ? props.pid : props.replyId,
      rid: props.replyId
    }
    const sendResult = await call(tcbStore.get(), 'COMMENT_SUBMIT', commentForm)
    if (sendResult && sendResult.result && sendResult.result.id) {
      comment.value = ''
      errorMessage.value = ''
      emit('load')
      saveDraft()
    } else {
      throw new Error(sendResult.result.message)
    }
  } catch (e) {
    logger.error('评论失败', e)
    errorMessage.value = `${t('COMMENT_FAILED')}: ${e && e.message}`
  } finally {
    isSending.value = false
  }
}
function addEventListener() {
  if (textareaRef.value) {
    textarea.value.addEventListener('paste', onPaste)
  }
}
function onBgImgChange() {
  if (props.config.COMMENT_BG_IMG && textareaRef.value) {
    textareaRef.value.style['background-image'] = `url("${props.config.COMMENT_BG_IMG}")`
  }
}
function onEnterKeyUp(event) {
  // 按 Ctrl + Enter / Command + Enter 发送
  if ((event.ctrlKey || event.metaKey) && canSend.value) {
    send()
    event.preventDefault()
  }
}
function closeOwo() {
  if (owo.value && owo.value.container.classList.contains('OwO-open')) {
    owo.value.toggle()
  }
}
function openSelectImage() {
  inputFileRef.value.click()
}
function onSelectImage() {
  const photo = inputFileRef.value.files[0]
  parseAndUploadPhoto(photo)
}
function onPaste(e) {
  if (!e.clipboardData) return
  let photo
  if (e.clipboardData.files[0]) {
    photo = e.clipboardData.files[0]
  } else if (e.clipboardData.items[0] && e.clipboardData.items[0].getAsFile()) {
    photo = e.clipboardData.items[0].getAsFile()
  }
  parseAndUploadPhoto(photo)
}
function parseAndUploadPhoto(photo) {
  if (!photo || props.config.SHOW_IMAGE !== 'true') return
  const nameSplit = photo.name.split('.')
  const fileType = nameSplit.length > 1 ? nameSplit.pop() : ''
  if (imageTypes.indexOf(fileType.toLowerCase()) === -1) return
  const userId = getUserId()
  const fileIndex = `${Date.now()}-${userId}`
  const fileName = nameSplit.join('.')
  paste(getImagePlaceholder(fileIndex, fileType))
  const imageCdn = props.config.IMAGE_CDN
  if (tcbStore.get() && (!imageCdn || imageCdn === 'qcloud')) {
    uploadPhotoToQcloud(fileIndex, fileName, fileType, photo)
  } else if (imageCdn) {
    uploadPhotoToThirdParty(fileIndex, fileName, fileType, photo)
  } else {
    uploadFailed(fileIndex, fileType, t('IMAGE_UPLOAD_FAILED_NO_CONF'))
  }
}
function getUserId() {
  if (tcbStore.get()) {
    return tcbStore.get().auth.currentUser.uid
  } else {
    return localStorage.getItem('twikoo-access-token')
  }
}
async function uploadPhotoToQcloud(fileIndex, fileName, fileType, photo) {
  try {
    const uploadResult = await tcbStore.get().app.uploadFile({
      cloudPath: `tk-img/${fileIndex}.${fileType}`,
      filePath: photo
    })
    if (uploadResult.fileID) {
      const tempUrlResult = await tcbStore.get().app.getTempFileURL({ fileList: [uploadResult.fileID] })
      const tempFileUrl = tempUrlResult.fileList[0].tempFileURL
      uploadCompleted(fileIndex, fileName, fileType, tempFileUrl)
    }
  } catch (e) {
    console.error(e)
    uploadFailed(fileIndex, fileType, e.message)
  }
}
async function uploadPhotoToThirdParty(fileIndex, fileName, fileType, photo) {
  try {
    let smmsImageDuplicateCheck
    const { result: uploadResult } = await call(tcbStore.get(), 'UPLOAD_IMAGE', {
      fileName: `${fileIndex}.${fileType}`,
      photo: await blobToDataURL(photo)
    })
    if (uploadResult.data) {
      uploadCompleted(fileIndex, fileName, fileType, uploadResult.data.url)
    } else if (uploadResult.code === 1040 && uploadResult.err &&
      (smmsImageDuplicateCheck = uploadResult.err.match(/this image exists at: (http[^ ]+)/))) {
      console.warn(uploadResult)
      uploadCompleted(fileIndex, fileName, fileType, smmsImageDuplicateCheck[1])
    } else {
      console.error(uploadResult)
      uploadFailed(fileIndex, fileType, uploadResult.err)
    }
  } catch (e) {
    console.error(e)
    uploadFailed(fileIndex, fileType, e.message)
  }
}
function uploadCompleted(fileIndex, fileName, fileType, fileUrl) {
  fileName = fileName.replace(/[[\]]/g, '_')
  comment.value = comment.value.replace(getImagePlaceholder(fileIndex, fileType), `![${fileName}](${fileUrl})`)
  inputFileRef.value = ''
}
function uploadFailed(fileIndex, fileType, reason) {
  comment.value = comment.value.replace(getImagePlaceholder(fileIndex, fileType), `_${t('IMAGE_UPLOAD_FAILED')}: ${reason}_`)
  inputFileRef.value = ''
}
function paste(text) {
  if (document.selection) {
    document.selection.createRange().text = text
  } else if (textarea.value.selectionStart || textarea.value.selectionStart === 0) {
    const n = textarea.value.selectionStart
    const r = textarea.value.selectionEnd
    comment.value = comment.value.substring(0, n) + text + comment.value.substring(r, comment.value.length)
    textarea.value.selectionStart = n + text.length
    textarea.value.selectionEnd = n + text.length
  } else {
    comment.value += text
  }
}
function getImagePlaceholder(fileIndex, fileType) {
  return `![${t('IMAGE_UPLOAD_PLACEHOLDER')} ${fileIndex}.${fileType}]()`
}
onMounted(async () => {
  initDraft()
  await initOwo()
  addEventListener()
  onBgImgChange()
})

watch(
  () => props.config['SHOW_EMOTION'],
  () => {
    initOwo()
  })
watch(
  () => props.config['COMMENT_BG_IMG'],
  () => {
    onBgImgChange()
  }
)


</script>
  
<style>
.tk-submit {
  display: flex;
  flex-direction: column;
}

.tk-row {
  display: flex;
  flex-direction: row;
}

.tk-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tk-meta-input {
  margin-bottom: 0.5rem;
}

.tk-row.actions {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3.5rem;
  align-items: center;
  justify-content: flex-end;
}

.tk-row-actions-start {
  flex: 1;
  display: flex;
  align-items: center;
}

.tk-submit-action-icon {
  align-self: center;
  display: inline-block;
  width: 1.25em;
  line-height: 0;
  margin-right: 10px;
  cursor: pointer;
  flex-shrink: 0;
}

.tk-submit-action-icon svg:hover {
  opacity: 0.8;
}

.tk-submit-action-icon.__markdown {
  color: #909399;
}

.tk-error-message {
  word-break: break-all;
  color: #ff0000;
  font-size: 0.75em;
  flex-shrink: 1;
}

.tk-input-image {
  display: none;
}

.tk-input {
  flex: 1;
}
.tk-input.el-textarea{
    border-radius: var(--twikoo-border-radius,12px);
    overflow: hidden;
}
.tk-input .el-textarea__inner {
  background-position: right bottom;
  background-repeat: no-repeat;
}

.tk-preview-container {
  margin-left: 3rem;
  margin-bottom: 1rem;
  padding: 5px 15px;
  border: 1px solid rgba(128, 128, 128, 0.31);
  border-radius: 4px;
  word-break: break-word;
}
.tk-preview span{
    color: var(--twikoo-button-font-color-black);
}
</style>