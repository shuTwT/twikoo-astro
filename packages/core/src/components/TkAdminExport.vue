<template>
  <div class="tk-admin-export">
    <div class="tk-admin-warn tk-admin-import-warn">
      <p>{{ t('ADMIN_EXPORT_WARN') }}</p>
    </div>
    <VanButton class="tk-admin-button" size="small" @click="doExport('comment')" :disabled="loading">{{ t('ADMIN_EXPORT_COMMENT') }}</VanButton>
    <VanButton class="tk-admin-button" size="small" @click="doExport('counter')" :disabled="loading" style="margin-left: 10px;">{{ t('ADMIN_EXPORT_COUNTER') }}</VanButton>
  </div>
</template>
  

<script setup>
import { Button as VanButton} from 'vant'
import { call, t } from '../utils'
import { tcbStore } from '../store'
import {ref} from "vue"

const loading = ref(false)

async function doExport(collection) {
  loading.value = true
  try {
    const result = await call(tcbStore.get(), 'COMMENT_EXPORT_FOR_ADMIN', {
      collection
    })
    if (result.result.data) {
      downloadJson(`twikoo-${collection}.json`, result.result.data)
    }
  } finally {
    loading.value = false
  }
}
function downloadJson(fileName, json) {
  const jsonStr = (json instanceof Object) ? JSON.stringify(json, null, 2) : json
  const url = window.URL || window.webkitURL || window
  const blob = new Blob([jsonStr])
  const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  saveLink.href = url.createObjectURL(blob)
  saveLink.download = fileName
  saveLink.click()
}
</script>
