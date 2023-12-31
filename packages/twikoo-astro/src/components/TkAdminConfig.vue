<template>
  <div class="tk-admin-config" v-loading="loading">
    <div class="tk-admin-warn" v-if="clientVersion !== serverVersion">
      <span>{{ t('ADMIN_CLIENT_VERSION') }}{{ clientVersion }}，</span>
      <span>{{ t('ADMIN_SERVER_VERSION') }}{{ serverVersion }}，</span>
      <span>请参考&nbsp;<a href="https://twikoo.js.org/update.html" target="_blank">版本更新</a>&nbsp;进行升级</span>
    </div>
    <div class="tk-admin-config-groups">
      <details class="tk-admin-config-group" v-for="settingGroup in settings" :key="settingGroup.name">
        <summary class="tk-admin-config-group-title">{{ settingGroup.name }}</summary>
        <div class="tk-admin-config-item" v-for="setting in settingGroup.items" :key="setting.key">
          <div class="tk-admin-config-title" :title="setting.key">{{ setting.key }}</div>
          <div class="tk-admin-config-input">
            <ElInput v-model="setting.value" :placeholder="setting.ph" size="small" :show-password="setting.secret" />
          </div>
          <div></div>
          <div class="tk-admin-config-desc">{{ setting.desc }}</div>
        </div>
      </details>
      <details class="tk-admin-config-group">
        <summary class="tk-admin-config-group-title">{{ t('ADMIN_CONFIG_EMAIL_TEST') }}</summary>
        <div class="tk-admin-config-email-test">
          <div class="tk-admin-config-email-test-desc">{{ t('ADMIN_CONFIG_EMAIL_TEST_HELP') }}</div>
          <div class="tk-admin-config-input email">
            <ElInput v-model="emailTestAddress" size="small">
              <template v-slot:append>
                <VanButton class="tk-admin-button" @click="testEmail">{{ t('ADMIN_CONFIG_EMAIL_TEST_BTN') }}</VanButton>
              </template>

            </ElInput>
          </div>
          <div class="tk-admin-config-email-test-desc">{{ t('ADMIN_CONFIG_EMAIL_TEST_RESULT') }}{{ emailTestResult }}
          </div>
        </div>
      </details>
    </div>
    <div class="tk-admin-config-actions">
      <VanButton class="tk-admin-button"  type="primary" @click="saveConfig">{{ t('ADMIN_CONFIG_SAVE') }}</VanButton>
      <VanButton class="tk-admin-button"  type="default" @click="resetConfig" style="margin-left: 10px;">{{ t('ADMIN_CONFIG_RESET') }}</VanButton>
    </div>
    <div class="tk-admin-config-message">{{ message }}</div>
  </div>
</template>
  
<script setup>
import { Button as VanButton} from 'vant'
import { ElInput, vLoading } from 'element-plus'
import { call, logger, t } from '../utils'
import { version } from '../version'
import { twikooStore } from '../store'
import { tcbStore } from '../store'
import { onMounted, ref } from 'vue'

const loading = ref(true)
const settings = ref([
  {
    name: t('ADMIN_CONFIG_CATEGORY_COMMON'),
    items: [
      { key: 'SITE_NAME', desc: t('ADMIN_CONFIG_ITEM_SITE_NAME'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}虹墨空间站`, value: '' },
      { key: 'SITE_URL', desc: t('ADMIN_CONFIG_ITEM_SITE_URL'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}https://www.imaegoo.com`, value: '' },
      { key: 'CORS_ALLOW_ORIGIN', desc: t('ADMIN_CONFIG_ITEM_CORS_ALLOW_ORIGIN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}https://www.imaegoo.com`, value: '' },
      { key: 'BLOGGER_NICK', desc: t('ADMIN_CONFIG_ITEM_BLOGGER_NICK'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}iMaeGoo`, value: '' },
      { key: 'BLOGGER_EMAIL', desc: t('ADMIN_CONFIG_ITEM_BLOGGER_EMAIL'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}12345@qq.com`, value: '' },
      { key: 'COMMENT_PAGE_SIZE', desc: t('ADMIN_CONFIG_ITEM_COMMENT_PAGE_SIZE'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}8`, value: '' },
      { key: 'MASTER_TAG', desc: t('ADMIN_CONFIG_ITEM_MASTER_TAG'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}站长`, value: '' },
      { key: 'COMMENT_BG_IMG', desc: t('ADMIN_CONFIG_ITEM_COMMENT_BG_IMG'), ph: '', value: '' },
      { key: 'GRAVATAR_CDN', desc: t('ADMIN_CONFIG_ITEM_GRAVATAR_CDN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}sdn.geekzu.org`, value: '' },
      { key: 'DEFAULT_GRAVATAR', desc: t('ADMIN_CONFIG_ITEM_DEFAULT_GRAVATAR'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}mp`, value: '' },
      { key: 'COMMENT_PLACEHOLDER', desc: t('ADMIN_CONFIG_ITEM_COMMENT_PLACEHOLDER'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}`, value: '' },
      { key: 'DISPLAYED_FIELDS', desc: t('ADMIN_CONFIG_ITEM_DISPLAYED_FIELDS'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}nick,mail,link`, value: '' },
      { key: 'REQUIRED_FIELDS', desc: t('ADMIN_CONFIG_ITEM_REQUIRED_FIELDS'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}nick,mail,link`, value: '' },
      { key: 'HIDE_ADMIN_CRYPT', desc: t('ADMIN_CONFIG_ITEM_HIDE_ADMIN_CRYPT'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}admin`, value: '' }
    ]
  },
  {
    name: t('ADMIN_CONFIG_CATEGORY_PLUGIN'),
    items: [
      { key: 'SHOW_IMAGE', desc: t('ADMIN_CONFIG_ITEM_SHOW_IMAGE'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}false`, value: '' },
      { key: 'IMAGE_CDN', desc: t('ADMIN_CONFIG_ITEM_IMAGE_CDN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}qcloud`, value: '' },
      { key: 'IMAGE_CDN_TOKEN', desc: t('ADMIN_CONFIG_ITEM_IMAGE_CDN_TOKEN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}example`, value: '' },
      { key: 'SHOW_EMOTION', desc: t('ADMIN_CONFIG_ITEM_SHOW_EMOTION'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}false`, value: '' },
      { key: 'EMOTION_CDN', desc: t('ADMIN_CONFIG_ITEM_EMOTION_CDN'), ph: '', value: '' },
      { key: 'HIGHLIGHT', desc: t('ADMIN_CONFIG_ITEM_HIGHLIGHT'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}false`, value: '' },
      { key: 'HIGHLIGHT_THEME', desc: t('ADMIN_CONFIG_ITEM_HIGHLIGHT_THEME'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}tomorrow`, value: '' }
    ]
  },
  {
    name: t('ADMIN_CONFIG_CATEGORY_PRIVACY'),
    items: [
      { key: 'SHOW_UA', desc: t('ADMIN_CONFIG_ITEM_SHOW_UA'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}false`, value: '' },
      { key: 'SHOW_REGION', desc: t('ADMIN_CONFIG_ITEM_SHOW_REGION'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}true`, value: '' }
    ]
  },
  {
    name: t('ADMIN_CONFIG_CATEGORY_SPAM'),
    items: [
      { key: 'AKISMET_KEY', desc: t('ADMIN_CONFIG_ITEM_AKISMET_KEY'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}8651783edxxx`, value: '' },
      { key: 'QCLOUD_SECRET_ID', desc: t('ADMIN_CONFIG_ITEM_QCLOUD_SECRET_ID'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}AKIDBgZDdnbTw9D4ey9qPkrkwtb2Do9EwIHw`, value: '' },
      { key: 'QCLOUD_SECRET_KEY', desc: t('ADMIN_CONFIG_ITEM_QCLOUD_SECRET_KEY'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}XrkOnvKWS7WeXbP1QZT76rPgtpWx73D7`, value: '', secret: true },
      { key: 'LIMIT_PER_MINUTE', desc: t('ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}5`, value: '' },
      { key: 'LIMIT_PER_MINUTE_ALL', desc: t('ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE_ALL'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}5`, value: '' },
      { key: 'LIMIT_LENGTH', desc: t('ADMIN_CONFIG_ITEM_LIMIT_LENGTH'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}100`, value: '' },
      { key: 'FORBIDDEN_WORDS', desc: t('ADMIN_CONFIG_ITEM_FORBIDDEN_WORDS'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}快递,空包`, value: '' },
      { key: 'NOTIFY_SPAM', desc: t('ADMIN_CONFIG_ITEM_NOTIFY_SPAM'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}false`, value: '' }
    ]
  },
  {
    name: t('ADMIN_CONFIG_CATEGORY_IM'),
    items: [
      { key: 'PUSHOO_CHANNEL', desc: t('ADMIN_CONFIG_ITEM_PUSHOO_CHANNEL'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}pushdeer`, value: '' },
      { key: 'PUSHOO_TOKEN', desc: t('ADMIN_CONFIG_ITEM_PUSHOO_TOKEN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}PDU431TfFHZICvR6lJrFBswSRN1cJ*****zzFvR`, value: '' },
      { key: 'SC_MAIL_NOTIFY', desc: t('ADMIN_CONFIG_ITEM_SC_MAIL_NOTIFY'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}true`, value: '' }
    ]
  },
  {
    name: t('ADMIN_CONFIG_CATEGORY_MAIL'),
    items: [
      { key: 'SENDER_EMAIL', desc: t('ADMIN_CONFIG_ITEM_SENDER_EMAIL'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}blog@imaegoo.com`, value: '' },
      { key: 'SENDER_NAME', desc: t('ADMIN_CONFIG_ITEM_SENDER_NAME'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}虹墨空间站评论提醒`, value: '' },
      { key: 'SMTP_SERVICE', desc: t('ADMIN_CONFIG_ITEM_SMTP_SERVICE'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}QQ`, value: '' },
      { key: 'SMTP_HOST', desc: t('ADMIN_CONFIG_ITEM_SMTP_HOST'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}smtp.qq.com`, value: '' },
      { key: 'SMTP_PORT', desc: t('ADMIN_CONFIG_ITEM_SMTP_PORT'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}465`, value: '' },
      { key: 'SMTP_SECURE', desc: t('ADMIN_CONFIG_ITEM_SMTP_SECURE'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}true`, value: '' },
      { key: 'SMTP_USER', desc: t('ADMIN_CONFIG_ITEM_SMTP_USER'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}blog@imaegoo.com`, value: '' },
      { key: 'SMTP_PASS', desc: t('ADMIN_CONFIG_ITEM_SMTP_PASS'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}password`, value: '', secret: true },
      { key: 'MAIL_SUBJECT', desc: t('ADMIN_CONFIG_ITEM_MAIL_SUBJECT'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}您在虹墨空间站上的评论收到了回复`, value: '' },
      { key: 'MAIL_TEMPLATE', desc: t('ADMIN_CONFIG_ITEM_MAIL_TEMPLATE'), ph: '', value: '' },
      { key: 'MAIL_SUBJECT_ADMIN', desc: t('ADMIN_CONFIG_ITEM_MAIL_SUBJECT_ADMIN'), ph: `${t('ADMIN_CONFIG_EXAMPLE')}虹墨空间站上有新评论了`, value: '' },
      { key: 'MAIL_TEMPLATE_ADMIN', desc: t('ADMIN_CONFIG_ITEM_MAIL_TEMPLATE_ADMIN'), ph: '', value: '' }
    ]
  }
])
const serverConfig = ref({})
const serverVersion = ref(twikooStore.get().serverConfig.VERSION)
const clientVersion = ref(version)
const message = ref('')
const emailTestAddress = ref('')
const emailTestResult = ref('')

async function readConfig() {
  loading.value = true
  const res = await call(tcbStore.get(), 'GET_CONFIG_FOR_ADMIN')
  if (res.result && !res.result.code) {
    serverConfig.value = res.result.config
    resetConfig()
  }
  loading.value = false
}
function resetConfig() {
  for (const settingGroup of settings.value) {
    for (const setting of settingGroup.items) {
      if (serverConfig.value[setting.key]) {
        setting.value = serverConfig.value[setting.key]
      }
    }
  }
}
async function saveConfig() {
  loading.value = true
  message.value = '正在保存'
  const config = {}
  for (const settingGroup of this.settings) {
    for (const setting of settingGroup.items) {
      const oldValue = this.serverConfig[setting.key]
      const newValue = setting.value
      if (oldValue !== newValue) {
        config[setting.key] = setting.value
      }
    }
  }
  logger.log('保存配置', config)
  await call(tcbStore.get(), 'SET_CONFIG', { config })
  await readConfig()
  message.value = '保存成功'
  loading.value = false
}
async function testEmail() {
  loading.value = true
  const testResult = await call(tcbStore.get(), 'EMAIL_TEST', { mail: emailTestAddress.value })
  logger.log('邮件测试', testResult)
  emailTestResult.value = JSON.stringify(testResult)
  loading.value = false
}

onMounted(()=>{
  readConfig()
})

</script>
  
<style scoped>
.tk-admin-config-groups {
  overflow-y: auto;
  padding-right: 0.5em;
}

.tk-admin-config-groups .tk-admin-config-group,
.tk-admin-config-groups .tk-admin-config-group-title {
  background: transparent;
}

.tk-admin-config-group-title {
  margin-top: 1em;
  font-size: 1.25rem;
  font-weight: bold;
}

.tk-admin-config-item {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  margin-top: 1em;
}

.tk-admin-config-title {
  text-align: right;
  margin-right: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tk-admin-config-desc {
  margin-top: 0.5em;
  font-size: 0.75em;
  overflow-wrap: break-word;
}

.tk-admin-config-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
}

.tk-admin-config-message {
  margin-top: 0.5em;
  text-align: center;
}

.tk-admin-config-email-test-desc {
  margin: 1em 0;
}
.tk-admin-config-input.email :deep(.el-input-group__append){
    padding: 0;
}
</style>