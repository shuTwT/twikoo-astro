<template>
  <div class="tk-admin-import">
    <div class="tk-admin-warn tk-admin-import-warn">
      <p>{{ t('ADMIN_IMPORT_WARN') }}</p>
      <p>{{ warnText[source] }}</p>
    </div>
    <div class="tk-admin-import-label">{{ t('ADMIN_IMPORT_SELECT_SOURCE') }}</div>
    <select v-model="source">
      <option disabled value="">{{ t('ADMIN_IMPORT_SELECT') }}</option>
      <option value="valine">Valine (JSON)</option>
      <option value="disqus">Disqus (XML)</option>
      <option value="artalk">Artalk v1 (JSON)</option>
      <option value="artalk2">Artalk v2 (Artrans)</option>
      <option value="twikoo">Twikoo (JSON)</option>
    </select>
    <div class="tk-admin-import-label">{{ t('ADMIN_IMPORT_SELECT_FILE') }}</div>
    <input type="file" value="" ref="inputFileRef" />
    <VanButton class="tk-admin-button" size="small" @click="uploadFile" :disabled="loading">{{ t('ADMIN_IMPORT_START') }}</VanButton>
    <ElInput type="textarea" :rows="10" :placeholder="t('ADMIN_IMPORT_LOG')" readonly v-model="logText"
      ref="logTextAreaRef" />
  </div>
</template>

<script setup>
import {Button as VanButton} from 'vant'
import { ElInput } from 'element-plus'
import { call, readAsText, t } from '../utils'
import { tcbStore } from '../store'
import { reactive, ref } from 'vue';

const loading = ref(false)
const source = ref('')
const logText = ref('')
const warnText = reactive({
  valine: t('ADMIN_IMPORT_TIP_VALINE'),
  disqus: t('ADMIN_IMPORT_TIP_DISQUS'),
  artalk: t('ADMIN_IMPORT_TIP_ARTALK'),
  artalk2: '',
  twikoo: ''
})

const inputFileRef=ref()
const logTextAreaRef=ref()

async function uploadFile() {
  if (!source.value) {
    log(t('ADMIN_IMPORT_SOURCE_REQUIRED'))
    return
  }
  const filePath = inputFileRef.value.files[0]
  if (!filePath) {
    log(t('ADMIN_IMPORT_FILE_REQUIRED'))
    return
  }
  log(t('ADMIN_IMPORT_START'))
  loading.value = true
  try {
    if (tcbStore.get()) {
      const result = await tcbStore.get().app.uploadFile({
        cloudPath: `import/${Date.now()}`,
        filePath,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          log(`${t('ADMIN_IMPORT_UPLOADING')}${percentCompleted}%`)
        }
      })
      log(`${t('ADMIN_IMPORT_UPLOADED')}${result.fileID}`)
      await importFile(result.fileID)
    } else {
      await importFileToVercel(filePath)
    }
  } catch (e) {
    console.error(e)
    log(e.message)
  }
  loading.value = false
}
async function importFile(fileID) {
  log(`${t('ADMIN_IMPORT_IMPORTING')}${source.value}`)
  const result = await call(tcbStore.get(), 'COMMENT_IMPORT_FOR_ADMIN', {
    fileId: fileID,
    source: source.value
  })
  logText.value += result.result.log
  log(`${t('ADMIN_IMPORT_IMPORTED')}${source.value}`)
}
async function importFileToVercel(filePath) {
  log(`${t('ADMIN_IMPORT_IMPORTING')}${source.value}`)
  const result = await call(tcbStore.get(), 'COMMENT_IMPORT_FOR_ADMIN', {
    file: await readAsText(filePath),
    source: source.value
  })
  logText.value += result.result.log
  log(`${t('ADMIN_IMPORT_IMPORTED')}${source.value}`)
}
function log(message) {
  logText.value += `${new Date().toLocaleString()} ${message}\n`
  nextTick(scrollLogToBottom)
}
function scrollLogToBottom() {
  if (logTextAreaRef.value) {
    const textareaEl = logTextAreaRef.value.$refs.textarea
    textareaEl.scrollTop = textareaEl.scrollHeight
  }
}

</script>
  
<style scoped>
.tk-admin-import {
  display: flex;
  flex-direction: column;
}

.tk-admin-import-label {
  margin-top: 1em;
  font-size: 1.25rem;
  font-weight: bold;
}

.tk-admin-import select,
.tk-admin-import input,
.tk-admin-import .el-button,
.tk-admin-import .el-textarea {
  margin-top: 1em;
}
</style>