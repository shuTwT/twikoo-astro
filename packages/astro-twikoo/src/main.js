export { default as Twikoo} from "./App.vue"
import { install } from "./utils/tcb"
import { isUrl, getCommentsCountApi, getRecentCommentsApi,getCommentsApi } from './utils'
async function initTcb(options) {
    if(typeof window==='undefined') return null
    if (typeof window.cloudbase === 'undefined') {
        logger.error('Please import cloudbase firstly:\n<script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js"\></script\>')
        return null
    }
    /* eslint-disable-next-line no-undef */
    return await install(globalThis.cloudbase, options)
}
export async function getCommentsCount (options = {}) {
    const tcb = isUrl(options.envId) ? null : await initTcb(options)
    return await getCommentsCountApi(tcb, options)
  }
  
export async function getRecentComments (options = {}) {
    const tcb = isUrl(options.envId) ? null : await initTcb(options)
    return await getRecentCommentsApi(tcb, options)
}

export async function getComments (options = {}) {
    const tcb = isUrl(options.envId) ? null : await initTcb(options)
    return await getCommentsApi(tcb, options)
}