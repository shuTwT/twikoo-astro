import {deepMap} from 'nanostores'
import { call } from '../utils'
import { initOwoEmotions } from '../utils'

export const tcbStore=deepMap({
})
export const twikooStore=deepMap({
    envId:"",
    serverConfig:{
        "DISPLAYD_FIELDS":{}
    }
})
export const $owoStore=deepMap({
    odata:{},
})
export function setOwodata({odata}){
    $owoStore.setKey('odata',odata)
}
export async function initOwoData(cdn){
    const odata = await initOwoEmotions(cdn || 'https://owo.imaegoo.com/owo.json')
    $owoStore.setKey('odata',odata)
}
export async function initTwikooConfig(){
    try {
        const result = await call(tcbStore.get(), 'GET_CONFIG')
        if (result && result.result && result.result.config) {
          twikooStore.setKey('serverConfig',result.result.config)
        }
      } catch (err) {
        throw err
      }
}