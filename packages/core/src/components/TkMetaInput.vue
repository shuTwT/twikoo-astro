<template>
  <div class="tk-meta-input">
    <ElInput v-for="metaInput in displayedInputs" :key="metaInput.key" :name="metaInput.name" :type="metaInput.type"
      :placeholder="requiredFields[metaInput.key] ? t('META_INPUT_REQUIRED') : t('META_INPUT_NOT_REQUIRED')"
      v-model="metaData[metaInput.key]" size="small" @change="onMetaChange">
      <template v-slot:prepend>{{ metaInput.locale }}</template>
    </ElInput>
  </div>
</template>
  
<script setup>
import { ElButton, ElInput } from 'element-plus'
import t from '../utils/i18n'
import { isQQ } from '../utils'
import { computed, inject, onMounted, ref, watch } from 'vue';

// 邮箱正则表达式来自 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
const mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

defineOptions({
  name: 'TkMetaInput'
})

const props = defineProps({
  nick: String,
  mail: String,
  link: String,
  config: Object
})

const emit = defineEmits(['update'])

const metaInputs = ref([
  { key: 'nick', locale: t('META_INPUT_NICK'), name: 'nick', type: 'text' },
  { key: 'mail', locale: t('META_INPUT_MAIL'), name: 'mail', type: 'email' },
  { key: 'link', locale: t('META_INPUT_LINK'), name: 'link', type: 'text' }
])
const metaData = ref({
  nick: '',
  mail: '',
  link: ''
})

const displayedFields = computed(() => {
  const displayedFieldsSetting = props.config.DISPLAYED_FIELDS
  return {
    nick: displayedFieldsSetting ? displayedFieldsSetting.indexOf('nick') !== -1 : true,
    mail: displayedFieldsSetting ? displayedFieldsSetting.indexOf('mail') !== -1 : true,
    link: displayedFieldsSetting ? displayedFieldsSetting.indexOf('link') !== -1 : true
  }
})
const displayedInputs = computed(() => {
  return metaInputs.value.filter((i) => !!displayedFields.value[i.key])
})
const requiredFields = computed(() => {
  const requiredFieldsSetting = props.config.REQUIRED_FIELDS
  return {
    nick: requiredFieldsSetting ? requiredFieldsSetting.indexOf('nick') !== -1 : true,
    mail: requiredFieldsSetting ? requiredFieldsSetting.indexOf('mail') !== -1 : true,
    link: requiredFieldsSetting ? requiredFieldsSetting.indexOf('link') !== -1 : false
  }
})

const onShowAdminEntry = inject('onShowAdminEntry')
const $mitt = inject('$mitt')

function initMeta() {
  const mStr = localStorage.getItem('twikoo')
  if (mStr) {
    const metaDataSource = JSON.parse(mStr)
    metaData.value.nick = metaDataSource.nick
    metaData.value.mail = metaDataSource.mail
    metaData.value.link = metaDataSource.link
  }
  updateMeta()
}
function updateMeta() {
  localStorage.setItem('twikoo', JSON.stringify(metaData.value))
  emit('update', {
    meta: metaData.value,
    valid: checkValid()
  })
}
function checkValid() {
  const isValidMail = mailRegExp.test(metaData.value.mail)
  return (
    (metaData.value.nick || !requiredFields.value.nick) &&
    (isValidMail || !requiredFields.value.mail) &&
    (metaData.value.link || !requiredFields.value.link)
  )
}
function checkQQ() {
  if (isQQ(metaData.value.nick)) {
    // 模仿 Valine 的操作逻辑，当用户在 [昵称] 输入 QQ 号时
    // 1. 自动填充数字 QQ 邮箱到 [邮箱]
    // 2. 自动填充 QQ 昵称到 [昵称]
    // 3. 自动显示 QQ 头像
    const qqNum = metaData.value.nick.replace(/@qq.com/ig, '')
    const qqMail = `${qqNum}@qq.com`
    metaData.value.mail = qqMail
    getQQNick(qqNum)
  }
}
function getQQNick(qqNum) {
  const url = `https://api.qjqq.cn/api/qqinfo?qq=${qqNum}`
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      metaData.value.nick = response.name
      updateMeta()
    }
  }
  xhr.open('GET', url)
  xhr.send()
}
function checkAdminCrypt() {
  const showAdminEntry = props.config.HIDE_ADMIN_CRYPT
    ? props.config.HIDE_ADMIN_CRYPT === metaData.value.nick
    : true
  onShowAdminEntry(showAdminEntry)
}
function onMetaChange() {
  checkQQ()
  updateMeta()
  checkAdminCrypt()
}
watch(
  () => props.nick,
  (newVal) => {
    metaData.value.nick = newVal
  })
watch(
  () => props.mail,
  (newVal) => {
    metaData.value.nick = newVal
  })
watch(
  () => props.link,
  (newVal) => {
    metaData.value.nick = newVal
  })
watch(
  () => requiredFields,
  () => {
    emit('update', {
      meta: metaData.value,
      valid: checkValid()
    })
  }, {
  deep: true
})
watch(() => props.config['VERSION'],
  () => {
    checkAdminCrypt()
  })
  onMounted(()=>{
    // TODO
    // app.$on('initMeta', this.initMeta)
    $mitt.on('initMeta', initMeta)
    initMeta()
  })

</script>

  
<style>
.tk-meta-input {
  display: flex;
}

.tk-meta-input .el-input {
  width: auto;
  width: calc((100% - 1rem) / 3);
  /* Fix Safari */
  flex: 1;
}

.el-input .el-input__wrapper{
    background-color: transparent;
    box-shadow: none;
}

.tk-meta-input .el-input+.el-input {
  margin-left: 0.5rem;
}

.tk-meta-input .el-input .el-input-group__prepend {
  padding: 0 1rem;
  color: var(--twikoo-font-color,#333333);
  box-shadow: none;
}

.tk-meta-input .el-input input:invalid {
  border: 1px solid #f56c6c;
  box-shadow: none;
}

.el-input.el-input--small.el-input-group.el-input-group--prepend{
    border-radius: var(--twikoo-border-radius);
    background: var(--twikoo-input-bg);
    border: var(--twikoo-border);
}

@media screen and (max-width: 767px) {
  .tk-meta-input {
    flex-direction: column;
  }

  .tk-meta-input .el-input {
    width: auto;
  }

  .tk-meta-input .el-input+.el-input {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>