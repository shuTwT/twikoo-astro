export { default as Twikoo} from "./App.vue"
import { setLanguage, logger, isUrl, getCommentsCountApi, getRecentCommentsApi } from './utils'

export async function getCommentsCount (options = {}) {
    const tcb = isUrl(options.envId) ? null : await initTcb(options)
    return await getCommentsCountApi(tcb, options)
  }
  
export async function getRecentComments (options = {}) {
    const tcb = isUrl(options.envId) ? null : await initTcb(options)
    return await getRecentCommentsApi(tcb, options)
  }