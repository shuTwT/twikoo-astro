<template>
  <div class="tk-comments">
    <TkSubmit @load="initComments" :config="config" />
    <div class="tk-comments-container" v-loading="loading">
      <div class="tk-comments-title">
        <span class="tk-comments-count" :class="{ __hidden: !comments.length }">
          <span>{{ count }}</span>
          <span>{{ t('COMMENTS_COUNT_SUFFIX') }}</span>
        </span>
        <span>
          <span class="tk-icon __comments" v-if="!loading && !loadingMore" v-html="iconRefresh"
            @click="refresh"></span><span class="tk-icon __comments" v-if="showAdminEntry" v-html="iconSetting"
            @click="openAdmin"></span>
        </span>
      </div>
      <div class="tk-comments-no" v-if="!loading && !comments.length">
        <span v-if="!errorMessage">{{ t('COMMENTS_NO_COMMENTS') }}</span>
        <span v-if="errorMessage" class="tk-comments-error">{{ errorMessage }}</span>
      </div>
      <TkComment v-for="comment in comments" :key="comment.id" :comment="comment" :replying="replyId === comment.id"
        :config="config" @reply="onReply" @load="initComments" />
      <div class="tk-expand" v-if="showExpand && !loading" @click="onExpand" v-loading="loadingMore">{{
        t('COMMENTS_EXPAND') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ElLoading } from 'element-plus'
import t from '../utils/i18n'
import { call, getUrl } from '../utils'
import TkSubmit from './TkSubmit.vue'
import TkComment from './TkComment.vue'
import iconSetting from '@fortawesome/fontawesome-free/svgs/solid/cog.svg?raw'
import iconRefresh from '@fortawesome/fontawesome-free/svgs/solid/sync.svg?raw'
import { tcbStore, twikooStore } from '../store'
import { ref, nextTick, onMounted } from 'vue'

const vLoading=ElLoading.directive

defineOptions({
  name: 'TkComments'
})
const props = defineProps({
  showAdminEntry: Boolean
})

const emit = defineEmits(['admin'])

const loading = ref(true)
const loadingMore = ref(false)
const errorMessage = ref('')
const config = ref({})
const comments = ref([])
const showExpand = ref(true)
const count = ref(0)
const replyId = ref('')

async function initConfig() {
  try {
    const result = await call(tcbStore.get(), 'GET_CONFIG')
    if (result && result.result && result.result.config) {
      config.value = result.result.config
      // TODO
      twikooStore.get().serverConfig = result.result.config
    }
  } catch (err) {
    throw err
  }

}
async function initComments() {
  loading.value = true
  const url = getUrl(twikooStore.get().path)

  try {
    await getComments({ url })
  } catch (err) {
    throw err
  }
  loading.value = false
}
function refresh() {
  comments.value = []
  initComments()
}
async function onExpand() {
  if (loadingMore.value) return
  loadingMore.value = true
  const url = getUrl(twikooStore.get().path)
  const before = comments.value
    .filter((item) => !item.top)
    .map((item) => item.created)
    .sort((a, b) => a - b)[0] // 最小值
  try {
    await getComments({ url, before })
  } catch (err) {
    throw err
  }

  loadingMore.value = false
}
function onCommentLoaded() {
  typeof twikooStore.get().onCommentLoaded === 'function' && twikooStore.get().onCommentLoaded()
}
async function getComments(event) {
  try {
    const res = await call(tcbStore.get(), 'COMMENT_GET', event)
    if (res && res.result && res.result.data) {
      comments.value = event.before ? comments.value.concat(res.result.data) : res.result.data
      showExpand.value = res.result.more
      count.value = res.result.count || comments.value.length || 0
      nextTick(onCommentLoaded)
    }
  } catch (e) {
    errorMessage.value = e.message
    throw e
  }
}
function onReply(id) {
  replyId.value = id
}
function openAdmin() {
  emit('admin')
}
onMounted(() => {
  initConfig()
  initComments()
})
</script>
  
<style>
.tk-comments-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.tk-comments-count.__hidden {
  visibility: hidden;
}

.tk-comments-container {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
}

.tk-comments-no {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tk-comments-error {
  font-size: 0.75em;
  color: #ff0000;
}

.tk-icon.__comments {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: sub;
  margin-left: 0.5em;
  height: 0.75em;
  width: 0.75em;
  line-height: 0;
  cursor: pointer;
  color: var(--twikoo-font-color,#409eff);
}
.tk-icon.__comments:hover{
    color: var(--twikoo-primary-color,);
}
</style>