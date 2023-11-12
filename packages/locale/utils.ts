/**
 * 把 i18n 的 key 中相同的部分提取出来可以减小打包 js 的体积
 */
export const S = {
    AC: 'ADMIN_COMMENT',
    ACC: 'ADMIN_CONFIG_CATEGORY',
    ACI: 'ADMIN_CONFIG_ITEM',
    AI: 'ADMIN_IMPORT'
  }
  
export const pushooChannels = [
    'qmsg',
    'serverchan',
    'pushplus',
    'pushplushxtrip',
    'dingtalk',
    'wecom',
    'bark',
    'gocqhttp',
    'atri',
    'pushdeer',
    'igot',
    'telegram',
    'feishu'
  ].map(s => `"${s}"`)
  
export const smtpServices = [
    '126',
    '163',
    '1und1',
    'AOL',
    'DebugMail',
    'DynectEmail',
    'FastMail',
    'GandiMail',
    'Gmail',
    'Godaddy',
    'GodaddyAsia',
    'GodaddyEurope',
    'Hotmail',
    'Mail.ru',
    'Maildev',
    'Mailgun',
    'Mailjet',
    'Mailosaur',
    'Mandrill',
    'Naver',
    'OpenMailBox',
    'Outlook365',
    'Postmark',
    'QQ',
    'QQex',
    'SES',
    'SES-EU-WEST-1',
    'SES-US-EAST-1',
    'SES-US-WEST-2',
    'SendCloud',
    'SendGrid',
    'SendPulse',
    'SendinBlue',
    'Sparkpost',
    'Yahoo',
    'Yandex',
    'Zoho',
    'hot.ee',
    'iCloud',
    'mail.ee',
    'qiye.aliyun'
  ].map(s => `"${s}"`)
  
export const highlightThemes = [
    'default',
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'
  ].map(s => `"${s}"`)
  
export  const imageBedServices = [
    'qcloud',
    '7bu',
    'https://7bu.top',
    'smms'
  ].map(s => `"${s}"`)
  
 export const defaultGravatar = [
    '404',
    'mp',
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
    'robohash',
    'blank'
  ].map(s => `"${s}"`)