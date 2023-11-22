<template>
  <div class="tk-comment" :id="comment.id" :class="{ 'tk-master': comment.master }" ref="tkCommentRef">
    <TkAvatar :config="config" :nick="comment.nick" :avatar="comment.avatar" :mail-md5="comment.mailMd5"
      :link="convertedLink" />
    <div class="tk-main">
      <div class="tk-row">
        <div class="tk-meta">
          <strong class="tk-nick" v-if="!convertedLink">{{ comment.nick }}</strong>
          <a class="tk-nick tk-nick-link" v-if="convertedLink" :href="convertedLink" target="_blank"
            rel="noopener noreferrer">
            <strong>{{ comment.nick }}</strong>
          </a>
          <span class="tk-tag tk-tag-green" v-if="comment.master">{{ config.MASTER_TAG || t('COMMENT_MASTER_TAG')
          }}</span>
          <span class="tk-tag tk-tag-red" v-if="comment.top">{{ t('COMMENT_TOP_TAG') }}</span>
          <span class="tk-tag tk-tag-yellow" v-if="comment.isSpam">{{ t('COMMENT_REVIEWING_TAG') }}</span>
          <small class="tk-time">
            <time :datetime="jsonTimestamp" :title="localeTime">{{ displayCreated }}</time>
          </small>
          <small class="tk-actions" v-if="isLogin">
            <a v-if="comment.isSpam" @click="handleSpam(false)">{{ t('ADMIN_COMMENT_SHOW') }}</a>
            <a v-if="!comment.isSpam" @click="handleSpam(true)">{{ t('ADMIN_COMMENT_HIDE') }}</a>
            <a v-if="!comment.rid && comment.top" @click="handleTop(false)">{{ t('ADMIN_COMMENT_UNTOP') }}</a>
            <a v-if="!comment.rid && !comment.top" @click="handleTop(true)">{{ t('ADMIN_COMMENT_TOP') }}</a>
          </small>
        </div>
        <TkAction :liked="liked" :like-count="like" :replies-count="comment.replies.length" @like="onLike"
          @reply="onReply" />
      </div>
      <div class="tk-content">
        <span v-if="comment.pid">{{ t('COMMENT_REPLIED') }} <a class="tk-ruser" :href="`#${comment.pid}`">@{{
          comment.ruser }}</a> :</span>
        <span v-html="comment.comment" ref="commentRef"></span>
      </div>
      <div class="tk-extras" v-if="comment.ipRegion || comment.os || comment.browser">
        <div class="tk-extra" v-if="comment.ipRegion">
          <span class="tk-icon __comment" v-html="iconLocation"></span>
          <span class="tk-extra-text">&nbsp;{{ comment.ipRegion }}</span>
        </div>
        <div class="tk-extra" v-if="comment.os">
          <span class="tk-icon __comment" v-html="iconOs"></span>
          <span class="tk-extra-text">&nbsp;{{ comment.os }}</span>
        </div>
        <div class="tk-extra" v-if="comment.browser">
          <span class="tk-icon __comment" v-html="iconBrowser"></span>
          <span class="tk-extra-text">&nbsp;{{ comment.browser }}</span>
        </div>
      </div>
      <!-- 回复列表 -->
      <div class="tk-replies" :class="{ 'tk-replies-expand': isExpanded || !showExpand }" ref="tkRepliesRef">
        <TkComment v-for="reply in comment.replies" :key="reply.id" :comment="reply" :config="config" @expand="onExpand"
          @load="onLoad" @reply="onReplyReply" />
      </div>
      <!-- 回复框 -->
      <TkSubmit v-if="replying" :reply-id="comment.id" :pid="pid" :config="config" @load="onLoad" @cancel="onCancel" />
      <div class="tk-expand" v-if="showExpand" @click="onExpand">{{ t('COMMENT_EXPAND') }}</div>
      <div class="tk-expand _collapse" v-if="showCollapse" @click="onCollapse">{{ t('COMMENT_COLLAPSE') }}</div>
    </div>
  </div>
</template>
  
<script setup>
import { timeago, convertLink, call, renderLinks, renderMath, renderCode, t } from '../utils'
import TkAction from './TkAction.vue'
import TkAvatar from './TkAvatar.vue'
import TkSubmit from './TkSubmit.vue'
import { twikooStore, tcbStore } from '../store'
import iconWindows from '@fortawesome/fontawesome-free/svgs/brands/windows.svg?raw'
import iconApple from '@fortawesome/fontawesome-free/svgs/brands/apple.svg?raw'
import iconAndroid from '@fortawesome/fontawesome-free/svgs/brands/android.svg?raw'
import iconLinux from '@fortawesome/fontawesome-free/svgs/brands/linux.svg?raw'
import iconUbuntu from '@fortawesome/fontawesome-free/svgs/brands/ubuntu.svg?raw'
import iconChrome from '@fortawesome/fontawesome-free/svgs/brands/chrome.svg?raw'
import iconFirefox from '@fortawesome/fontawesome-free/svgs/brands/firefox-browser.svg?raw'
import iconSafari from '@fortawesome/fontawesome-free/svgs/brands/safari.svg?raw'
import iconIe from '@fortawesome/fontawesome-free/svgs/brands/internet-explorer.svg?raw'
import iconEdge from '@fortawesome/fontawesome-free/svgs/brands/edge.svg?raw'
import iconOther from '@fortawesome/fontawesome-free/svgs/regular/window-maximize.svg?raw'
import iconLocation from '@fortawesome/fontawesome-free/svgs/solid/location-arrow.svg?raw'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
const osList = {
  win: iconWindows,
  mac: iconApple,
  ipad: iconApple,
  iphone: iconApple,
  ios: iconApple,
  android: iconAndroid,
  ubuntu: iconUbuntu,
  linux: iconLinux
}
const browserList = {
  edge: iconEdge,
  chrome: iconChrome,
  firefox: iconFirefox,
  safari: iconSafari,
  explorer: iconIe,
  ie: iconIe
}

defineOptions({
  name: "TkComment"
})

const props = defineProps({
  comment: Object,
  replying: Boolean,
  config: Object
})

const emit=defineEmits(['load','reply','expand'])

const pid = ref('')
const like = ref(0)
const liked = ref(false)
const likeLoading = ref(false)
const isExpanded = ref(false)
const hasExpand = ref(false)
const isLogin = ref(false)

const tkCommentRef=ref(null)
const commentRef = ref(null)
const tkRepliesRef=ref(null)


const displayCreated = computed(() => {
  return timeago(props.comment.created)
})
const jsonTimestamp = computed(() => {
  return new Date(props.comment.created).toJSON()
})
const localeTime = computed(() => {
  return new Date(props.comment.created).toLocaleString()
})
const iconOs = computed(() => {
  return getIconBy(props.comment.os, osList)
})
const iconBrowser = computed(() => {
  return getIconBy(props.comment.browser, browserList)
})
const showExpand = computed(() => {
  return hasExpand.value && !isExpanded.value
})
const showCollapse = computed(() => {
  return hasExpand.value && isExpanded.value
})
const convertedLink = computed(() => {
  return convertLink(props.comment.link)
})


function getIconBy(name, list) {
  const lowerCaseName = name.toLowerCase()
  for (const key in list) {
    if (lowerCaseName.indexOf(key) !== -1) return list[key]
  }
  return iconOther
}
function showExpandIfNeed() {
  if (props.comment.replies && props.comment.replies.length > 0 && tkRepliesRef.value) {
    // 200 是回复区域最大高度
    // 36 是展开按钮高度
    hasExpand.value = tkRepliesRef.value.scrollHeight > 200 + 36
  }
}
function scrollToComment() {
  if (window.location.hash.indexOf(props.comment.id) !== -1) {
    tkCommentRef.value.scrollIntoView()
    emit('expand')
  }
}
async function onLike() {
  if (likeLoading.value) return // 防止连续点击
  likeLoading.value = true
  await call(tcbStore.get(), 'COMMENT_LIKE', { id: props.comment.id })
  if (liked.value) {
    like.value--
  } else {
    like.value++
  }
  liked.value = !liked.value
  likeLoading.value = false
}
function onReply() {
  emit('reply', props.comment.id)
}
function onReplyReply(id) {
  // 楼中楼回复
  pid.value = id
  emit('reply', props.comment.id)
}
function onCancel() {
  pid.value = ''
  emit('reply', '')
}
function onLoad() {
  pid.value = ''
  emit('reply', '')
  emit('load')
  onExpand()
}
function onExpand() {
  isExpanded.value = true
}
function onCollapse() {
  isExpanded.value = false
}
async function checkAuth() {
  // 检查用户身份
  if (tcbStore.get()) {
    const currentUser = await tcbStore.get().auth.getCurrenUser()
    isLogin.value = currentUser.loginType === 'CUSTOM'
  } else {
    isLogin.value = twikooStore.get().serverConfig && twikooStore.get().serverConfig.IS_ADMIN
  }
}
function handleSpam(isSpam) {
  setComment({ isSpam })
}
function handleTop(top) {
  setComment({ top })
}
async function setComment(set) {
  //this.loading = true
  await call(tcbStore.get(), 'COMMENT_SET_FOR_ADMIN', {
    id: props.comment.id,
    set
  })
  //this.loading = false
  emit('load')
}

onMounted(() => {
  nextTick(showExpandIfNeed)
  nextTick(scrollToComment)
  nextTick(() => {
    renderLinks(commentRef.value)
    renderMath(commentRef.value, twikooStore.get().katex)
  })
  checkAuth()
})
watch(
  () => props.comment.like,
  () => {
    like.value = props.comment.like
    liked.value = props.comment.liked
  },
  {
    immediate: true
  }
)
watch(
  () => props.config['HIGHLIGHT'],
  (highlight) => {
    if (highlight === 'true') {
      nextTick(() => {
        renderCode(commentRef.value, props.config.HIGHLIGHT_THEME)
      })
    }
  },
  {
    immediate: true
  }
)
</script>

  
<style scoped>
.tk-main {
  flex: 1;
  width: 0;
}

.tk-nick{
    line-height: 2rem;
    color: var(--twikoo-color-lighttext);
}
.tk-nick-link {
  text-decoration: none;
}

.tk-replies .tk-nick-link {
  font-size: .9em;
}

.tk-nick-link:hover {
  color: #409eff;
}

.tk-actions {
  display: none;
  margin-left: 1em;
}

.tk-comment:hover .tk-actions {
  display: inline;
}

.tk-extras {
  color: #999999;
  font-size: 0.875em;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.tk-extra {
  margin-top: 0.375rem;
  margin-right: 0.375rem;
  display: flex;
  align-items: center;
  background: var(--twikoo-second-bg);
  padding: 2px 5px 2px 4px;
  border-radius: 8px;
  border: var(--twikoo-border);
  font-size: 1rem;
}

.tk-icon.__comment {
  height: 1em;
  width: 1em;
  line-height: 1;
}

.tk-extra-text {
  line-height: 1;
}

.tk-tag {
  display: inline-block;
  padding: 0 0.5em;
  font-size: 0.75em;
  background-color: #f2f6fc;
}

.tk-tag-green {
  background-color: rgba(103, 194, 58, 0.13);
  border: 1px solid rgba(103, 194, 58, 0.50);
  border-radius: 2px;
  color: #67c23a;
}

.tk-tag-yellow {
  background-color: rgba(230, 162, 60, 0.13);
  border: 1px solid rgba(230, 162, 60, 0.50);
  border-radius: 2px;
  color: #e6a23c;
}

.tk-tag-blue {
  background-color: rgba(64, 158, 255, 0.13);
  border: 1px solid rgba(64, 158, 255, 0.50);
  border-radius: 2px;
  color: #409eff;
}

.tk-tag-red {
  background-color: rgba(245, 108, 108, 0.13);
  border: 1px solid rgba(245, 108, 108, 0.50);
  border-radius: 2px;
  color: #f56c6c;
}

.tk-comment {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  word-break: break-all;
}

.tk-content {
  margin-top: 0.5rem;
  overflow: auto;
  max-height: 500px;
}

.tk-replies .tk-content {
  font-size: .9em;
}

.tk-comment .vemoji {
  max-height: 2em;
  vertical-align: middle;
}

.tk-replies {
  max-height: 200px;
  overflow: hidden;
  position: relative;
}

.tk-replies-expand {
  max-height: none;
}

.tk-submit {
  margin-top: 1rem;
}

.tk-expand {
  font-size: 0.75em;
}
.tk-meta{
    margin-left: 0.75rem;
}
.tk-time{
    margin-left: 0.75rem;
}
.tk-actions a{
    color: var(--twikoo-action-color,#3273dc);
    margin-left: 10px;
}
.tk-actions a:hover{
    color: var(--twikoo-primary-color,#3273dc);
}
</style>