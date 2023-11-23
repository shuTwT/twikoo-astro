//import i18n from './i18n'
import {zhCn} from '../../../locale/index.mjs'
// ISO Language Code Table http://www.lingoes.net/en/translator/langcode.htm
// RSS Language Code Table https://www.rssboard.org/rss-language-codes

const langs = {
  zh: 0,
  'zh-cn': 0,
  'zh-CN': 0,
  'zh-HK': 1,
  'zh-tw': 2,
  'zh-TW': 2,
  'en-us': 3,
  'en-US': 3,
  'en-gb': 3,
  'en-GB': 3,
  en: 3,
  uz: 4,
  'uz-UZ': 4,
  ja: 5,
  'ja-JP': 5
}
const langList=['zh-CN','zh-HK','zh-TW','en','uz','ja']

let userLanguage = ''

const setLanguage = (options = {}) => {
    if(options.lang in langs){
        userLanguage=options.lang
    }else if(typeof window !=='undefined'){
        userLanguage=navigator.language
    }else{
        userLanguage='en'
    }
}

const translate = (key, language) => {
  const lang = language || userLanguage || typeof window!=='undefined'&&navigator.language
  let value
  if (lang && langs[lang]) {
    const lang=langList[langs[lang]]
    if(langList[langs[lang]]=='zh-CN'){
      value=zhCn.el[key]
    }
    //value = i18n[key][langs[lang]]
  } else {
    value=zhCn.el[key]
    //value = i18n[key][langs['zh-CN']]
  }
  return value || ''
}

export default translate
export {
  setLanguage
}