<template>
  <div class="tk-admin-comment" v-loading="loading">
    <div class="tk-admin-warn" v-if="clientVersion !== serverVersion">
      <span>{{ t('ADMIN_CLIENT_VERSION') }}{{ clientVersion }}，</span>
      <span>{{ t('ADMIN_SERVER_VERSION') }}{{ serverVersion }}，</span>
      <span>请参考&nbsp;<a href="https://twikoo.js.org/update.html" target="_blank">版本更新</a>&nbsp;进行升级</span>
    </div>
    <div class="tk-admin-comment-filter">
      <ElInput class="tk-admin-comment-filter-keyword" size="small" v-model="filter.keyword"
        :placeholder="t('ADMIN_COMMENT_SEARCH_PLACEHOLDER')" @keyup.enter.native="getComments" />
      <select class="tk-admin-comment-filter-type" v-model="filter.type">
        <option value="">{{ t('ADMIN_COMMENT_FILTER_ALL') }}</option>
        <option value="VISIBLE">{{ t('ADMIN_COMMENT_FILTER_VISIBLE') }}</option>
        <option value="HIDDEN">{{ t('ADMIN_COMMENT_FILTER_HIDDEN') }}</option>
      </select>
      <ElButton size="small" type="primary" @click="getComments">{{ t('ADMIN_COMMENT_SEARCH') }}</ElButton>
    </div>
    <div class="tk-admin-comment-list" ref="commentListRef">
      <div class="tk-admin-comment-item" v-for="comment in comments" :key="comment._id">
        <div class="tk-admin-comment-meta">
          <TkAvatar :config="serverConfig" :avatar="comment.avatar" :mail="comment.mail" :link="comment.link" />
          <span v-if="!comment.link">{{ comment.nick }}&nbsp;</span>
          <a v-if="comment.link" :href="convertLink(comment.link)" target="_blank">{{ comment.nick }}&nbsp;</a>
          <span v-if="comment.mail">(<a :href="`mailto:${comment.mail}`">{{ comment.mail }}</a>)&nbsp;</span>
          <span v-if="comment.isSpam">{{ t('ADMIN_COMMENT_IS_SPAM_SUFFIX') }}&nbsp;</span>
          <span class="tk-time">{{ displayCreated(comment) }}&nbsp;</span>
          <span :title="comment.ua">{{ comment.ipRegion }}</span>
        </div>
        <div class="tk-content" v-html="comment.comment" ref="commentsRef"></div>
        <div class="tk-admin-actions">
          <ElButton size="small" :text="true" @click="handleView(comment)">{{ t('ADMIN_COMMENT_VIEW') }}</ElButton>
          <ElButton size="small" :text="true" v-if="comment.isSpam" @click="handleSpam(comment, false)">{{
            t('ADMIN_COMMENT_SHOW') }}</ElButton>
          <ElButton size="small" :text="true" v-if="!comment.isSpam" @click="handleSpam(comment, true)">{{
            t('ADMIN_COMMENT_HIDE') }}</ElButton>
          <ElButton size="small" :text="true" v-if="!comment.rid && comment.top" @click="handleTop(comment, false)">{{
            t('ADMIN_COMMENT_UNTOP') }}</ElButton>
          <ElButton size="small" :text="true" v-if="!comment.rid && !comment.top" @click="handleTop(comment, true)">{{
            t('ADMIN_COMMENT_TOP') }}</ElButton>
          <ElButton size="small" :text="true" @click="handleDelete(comment)">{{ t('ADMIN_COMMENT_DELETE') }}</ElButton>
        </div>
      </div>
    </div>
    <TkPagination :page-size="pageSize" :total="count" @page-size-change="onPageSizeChange"
      @current-change="switchPage" />
  </div>
</template>
  
<script setup>
import { ElButton, ElInput, ElLoading } from 'element-plus'
import { twikooStore } from '../store'
import { timeago, call, convertLink, renderLinks, renderMath, renderCode, t } from '../utils'
import { version } from '../version'
import TkAvatar from './TkAvatar.vue'
import TkPagination from './TkPagination.vue'
import { tcbStore } from '../store'
import { inject, ref,nextTick } from 'vue'

const defaultPageSize = 5

const loading = ref(true)
const comments = ref([])
const serverConfig = ref({})
const serverVersion = ref(twikooStore.get().serverConfig.VERSION)
const clientVersion = ref(version)
const count = ref(0)
const pageSize = ref(defaultPageSize)
const currentPage = ref(1)
const filter = ref({ keyword: '', type: '' })

const $mitt = inject('$mitt')

const commentsRef=ref(null)
const commentListRef=ref(null)

const emit=defineEmits(['initMeta'])


function displayCreated(comment) {
  return timeago(comment.created)
}
async function getComments() {
  loading.value = true
  const res = await call(tcbStore.get(), 'COMMENT_GET_FOR_ADMIN', {
    per: pageSize.value,
    page: currentPage.value,
    keyword: filter.value.keyword,
    type: filter.value.type
  })
  if (res.result && !res.result.code) {
    count.value = res.result.count
    comments.value = res.result.data
  }
  nextTick(() => {
    renderLinks(commentsRef.value)
    renderMath(commentListRef.value, twikooStore.get().katex)
    highlightCode()
  })
  loading.value = false
}
async function getConfig() {
  const res = await call(tcbStore.get(), 'GET_CONFIG_FOR_ADMIN')
  if (res.result && !res.result.code) {
    serverConfig.value = res.result.config
    checkConfig()
  }
}
function checkConfig() {
  if (!serverConfig.value.HIGHLIGHT) serverConfig.value.HIGHLIGHT = 'true'
  // 在已登錄的情況下，不用再輸入昵稱和郵箱等信息
  let metaData = {}
  const mStr = localStorage.getItem('twikoo')
  if (mStr) {
    metaData = JSON.parse(mStr)
  }
  ['nick', 'mail', 'avatar'].forEach(key => {
    if (!metaData[key]) {
      serverConfig.value[key] = ''
    } else {
      serverConfig.value[key] = metaData[key]
    }
  })
  if (!metaData.nick && serverConfig.value.BLOGGER_NICK) {
    metaData.nick = serverConfig.value.BLOGGER_NICK
  }
  if (!metaData.mail && serverConfig.value.BLOGGER_EMAIL) {
    metaData.mail = serverConfig.value.BLOGGER_EMAIL
  }
  if (!metaData.link && serverConfig.value.SITE_URL) {
    metaData.link = serverConfig.value.SITE_URL
  }
  localStorage.setItem('twikoo', JSON.stringify(metaData))
  // TODO
  //app.$emit('initMeta')
  emit('initMeta')
}
function onPageSizeChange(newPageSize) {
  pageSize.value = newPageSize
  getComments()
}
function switchPage(e) {
  currentPage.value = e
  getComments()
}
function handleView(comment) {
  window.open(`${comment.url}#${comment._id}`)
}
async function handleDelete(comment) {
  if (!confirm(t('ADMIN_COMMENT_DELETE_CONFIRM'))) return
  loading.value = true
  await call(tcbStore.get(), 'COMMENT_DELETE_FOR_ADMIN', {
    id: comment._id
  })
  await getComments()
  loading.value = false
}
function handleSpam(comment, isSpam) {
  setComment(comment, { isSpam })
}
function handleTop(comment, top) {
  setComment(comment, { top })
}
async function setComment(comment, set) {
  loading.value = true
  await call(tcbStore.get(), 'COMMENT_SET_FOR_ADMIN', {
    id: comment._id,
    set
  })
  await getComments()
  loading.value = false
}
function highlightCode() {
  if (serverConfig.value.HIGHLIGHT === 'true') {
    renderCode(commentListRef, serverConfig.value.HIGHLIGHT_THEME)
  }
}

onMounted(async () => {
  await Promise.all([
    getConfig(),
    getComments()
  ])
  highlightCode()
})
</script>

<!-- <script>
import { ElButton, ElInput, ElLoading } from 'element-plus'
import { twikooStore } from '../store'
import { timeago, call, convertLink, renderLinks, renderMath, renderCode, t } from '../utils'
import { version } from '../version'
import TkAvatar from './TkAvatar.vue'
import TkPagination from './TkPagination.vue'
import { tcbStore } from '../store'


const defaultPageSize = 5

export default {
  components: {
    ElButton,
    ElInput,
    TkAvatar,
    TkPagination
  },
  directives: {
    "Loading": ElLoading.directive
  },
  data() {
    return {
      loading: true,
      comments: [],
      serverConfig: {},
      serverVersion: twikooStore.get().serverConfig.VERSION,
      clientVersion: version,
      count: 0,
      pageSize: defaultPageSize,
      currentPage: 1,
      filter: { keyword: '', type: '' }
    }
  },
  inject: ["$mitt"],
  methods: {
    t,
    displayCreated(comment) {
      return timeago(comment.created)
    },
    convertLink(link) {
      return convertLink(link)
    },
    async getComments() {
      this.loading = true
      const res = await call(tcbStore.get(), 'COMMENT_GET_FOR_ADMIN', {
        per: this.pageSize,
        page: this.currentPage,
        keyword: this.filter.keyword,
        type: this.filter.type
      })
      if (res.result && !res.result.code) {
        this.count = res.result.count
        this.comments = res.result.data
      }
      this.$nextTick(() => {
        renderLinks(this.$refs.comments)
        renderMath(this.$refs['comment-list'], twikooStore.get().katex)
        this.highlightCode()
      })
      this.loading = false
    },
    async getConfig() {
      const res = await call(tcbStore.get(), 'GET_CONFIG_FOR_ADMIN')
      if (res.result && !res.result.code) {
        this.serverConfig = res.result.config
        this.checkConfig()
      }
    },
    checkConfig() {
      if (!this.serverConfig.HIGHLIGHT) this.serverConfig.HIGHLIGHT = 'true'
      // 在已登錄的情況下，不用再輸入昵稱和郵箱等信息
      let metaData = {}
      const mStr = localStorage.getItem('twikoo')
      if (mStr) {
        metaData = JSON.parse(mStr)
      }
      ['nick', 'mail', 'avatar'].forEach(key => {
        if (!metaData[key]) {
          this.serverConfig[key] = ''
        } else {
          this.serverConfig[key] = metaData[key]
        }
      })
      if (!metaData.nick && this.serverConfig.BLOGGER_NICK) {
        metaData.nick = this.serverConfig.BLOGGER_NICK
      }
      if (!metaData.mail && this.serverConfig.BLOGGER_EMAIL) {
        metaData.mail = this.serverConfig.BLOGGER_EMAIL
      }
      if (!metaData.link && this.serverConfig.SITE_URL) {
        metaData.link = this.serverConfig.SITE_URL
      }
      localStorage.setItem('twikoo', JSON.stringify(metaData))
      // TODO
      //app.$emit('initMeta')
      this.$mitt.emit('initMeta')
    },
    onPageSizeChange(newPageSize) {
      this.pageSize = newPageSize
      this.getComments()
    },
    switchPage(e) {
      this.currentPage = e
      this.getComments()
    },
    handleView(comment) {
      window.open(`${comment.url}#${comment._id}`)
    },
    async handleDelete(comment) {
      if (!confirm(t('ADMIN_COMMENT_DELETE_CONFIRM'))) return
      this.loading = true
      await call(tcbStore.get(), 'COMMENT_DELETE_FOR_ADMIN', {
        id: comment._id
      })
      await this.getComments()
      this.loading = false
    },
    handleSpam(comment, isSpam) {
      this.setComment(comment, { isSpam })
    },
    handleTop(comment, top) {
      this.setComment(comment, { top })
    },
    async setComment(comment, set) {
      this.loading = true
      await call(tcbStore.get(), 'COMMENT_SET_FOR_ADMIN', {
        id: comment._id,
        set
      })
      await this.getComments()
      this.loading = false
    },
    highlightCode() {
      if (this.serverConfig.HIGHLIGHT === 'true') {
        renderCode(this.$refs['comment-list'], this.serverConfig.HIGHLIGHT_THEME)
      }
    }
  },
  async mounted() {
    await Promise.all([
      this.getConfig(),
      this.getComments()
    ])
    this.highlightCode()
  }
}
</script> -->
  
<style>
.tk-admin-comment {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tk-admin-comment a {
  color: currentColor;
  text-decoration: underline;
}

.tk-admin-warn {
  margin-bottom: 1em;
}

.tk-admin-comment-filter {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tk-admin-comment-filter-keyword {
  flex: 1;
}

.tk-admin-comment-filter-type {
  height: 32px;
  margin: 0 0.5em;
  padding: 0 0.5em;
  color: #ffffff;
  background: none;
  border: 1px solid rgba(144, 147, 153, 0.31);
  border-radius: 4px;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.tk-admin-comment-filter-type:focus {
  border-color: #409eff;
}

.tk-admin-comment-filter-type option {
  color: initial;
}

.tk-admin-comment-list {
  margin-top: 1em;
}

.tk-admin-comment-list,
.tk-admin-comment-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.tk-admin-comment-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
}

.tk-admin-comment .tk-avatar {
  margin-right: 0.5em;
}

.tk-admin-actions {
  display: flex;
  margin-bottom: 1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>