import { S, pushooChannels, smtpServices, highlightThemes, imageBedServices, defaultGravatar } from '../utils'

export default {
    name:'en',
    el:{
    ADMIN_CLIENT_VERSION: [
      'Client version: '
    ],
    ADMIN_SERVER_VERSION: [
      'Server version: '
    ],
    [S.AC]: [
      'Comment'
    ],
    [S.AC + '_DELETE']: [
      'Delete'
    ],
    [S.AC + '_DELETE_CONFIRM']: [
      'Confirm deletion?'
    ],
    [S.AC + '_FILTER_ALL']: [
      'All'
    ],
    [S.AC + '_FILTER_VISIBLE']: [
      'Visible'
    ],
    [S.AC + '_FILTER_HIDDEN']: [
      'Hidden'
    ],
    [S.AC + '_HIDE']: [
      'Hide'
    ],
    [S.AC + '_IS_SPAM_SUFFIX']: [
      ' (Hidden)'
    ],
    [S.AC + '_SEARCH']: [
      'Search'
    ],
    [S.AC + '_SEARCH_PLACEHOLDER']: [
      'Search by nick, mail, website, IP, comment, or article path'
    ],
    [S.AC + '_SHOW']: [
      'Show'
    ],
    [S.AC + '_TOP']: [
      'Pin'
    ],
    [S.AC + '_UNTOP']: [
      'Unpin'
    ],
    [S.AC + '_VIEW']: [
      'View',
    ],
    ADMIN_CONFIG: [
      'Configuration'
    ],
    [S.ACC + '_COMMON']: [
      'General'
    ],
    [S.ACC + '_IM']: [
      'Instant notification',
      'Тезкор хабарнома',
      '即時通知'
    ],
    [S.ACC + '_MAIL']: [
      'Email notification',
      'Электрон почта хабарномаси',
      'メール通知'
    ],
    [S.ACC + '_PLUGIN']: [
      'Plugin',
      'Плагин',
      'プラグイン'
    ],
    [S.ACC + '_PRIVACY']: [
      'Privacy',
      'Шахсий қоидалар',
      'プライバシー'
    ],
    [S.ACC + '_SPAM']: [
      'Spam',
    ],
    ADMIN_CONFIG_EMAIL_TEST: [
      'Email notification test',
      'Электрон почта хабарномаси тести',
      'メール通知テスト'
    ],
    ADMIN_CONFIG_EMAIL_TEST_BTN: [
      '发送测试邮件',
      '發送測試郵件',
      '發送測試郵件',
      'Send test mail',
      'Синов хатини юбориш',
      'テストメールを送信'
    ],
    ADMIN_CONFIG_EMAIL_TEST_HELP: [
      'Input an email address & send test mail',
    ],
    ADMIN_CONFIG_EMAIL_TEST_RESULT: [
      'Test result: ',
    ],
    ADMIN_CONFIG_EXAMPLE: [
      'Example: ',
    ],
    [S.ACI + '_AKISMET_KEY']: [
      'Akismet spam protection. Set to "MANUAL_REVIEW" to enable manual review. Leave it blank to not use anti-spam. Register Akismet: https://akismet.com'
    ],
    [S.ACI + '_BLOGGER_NICK']: [
      'Admin nick name.',
    ],
    [S.ACI + '_BLOGGER_EMAIL']: [
      'Admin Email address. Used for Email notification and admin identification.'
    ],
    [S.ACI + '_COMMENT_BG_IMG']: [
      'URL for custom background image.'
    ],
    [S.ACI + '_COMMENT_PAGE_SIZE']: [
      'Comment page size. Default: 8.'
    ],
    [S.ACI + '_COMMENT_PLACEHOLDER']: [
      'Comment placeholder. Use <br> to start a newline. Default: empty.',
    ],
    [S.ACI + '_CORS_ALLOW_ORIGIN']: [
      'Vercel CORS allow origin, note: incorrect settings can cause loading failure. Default: blank, format: https://blog.example.com; If you need to add multiple domain names, please use, separate',    ],
    [S.ACI + '_DEFAULT_GRAVATAR']: [
      `Avatar placeholder. Default:  "identicon". Choose from: ${defaultGravatar.join(', ')}`
    ],
    [S.ACI + '_EMOTION_CDN']: [
      'Emotion CDN. Separate by comma. Default: https://owo.imaegoo.com/owo.json'
    ],
    [S.ACI + '_FORBIDDEN_WORDS']: [
      'Configure prohibited words. Comments containing prohibited words will be auto spammed. Separate by comma.',
      'Тақиқланган сўзларни созланг. Тақиқланган сўзларни ўз ичига олган шарҳлар автоматик равишда спамга юборилади. Вергул билан ажратинг.',
      '禁止語設定、禁止語を含むコンテンツは直ちにスパムコメントとしてマークされます。コンマで区切ってください。'
    ],
    [S.ACI + '_GRAVATAR_CDN']: [
      'Custom avator CDN. (Examples: gravatar.com) Default: cravatar.cn.',
      'Custom avator CDN. (Мисоллар: gravatar.com) Default: cravatar.cn.',
      'カスタムプロフィール画像CDNアドレス。例：cn.gravatar.com、cravatar.cn、sdn.geekzu.org、gravatar.loli.net、デフォルト：cravatar.cn'
    ],
    [S.ACI + '_HIDE_ADMIN_CRYPT']: [
      '隐藏管理面板入口。可设置一个“暗号”，只有在“昵称”一栏输入相同的“暗号”时，管理面板入口才会显示，留空则不隐藏管理入口',
      '隱藏管理面板入口。可設定一個“暗號”，只有在“暱稱”一欄輸入相同的“暗號”時，管理面板入口才會顯示，留空則不隱藏管理入口',
      '隱藏管理控制台入口。可設定一個“暗號”，只有在「暱稱」一欄輸入相同的「暗號」時，管理控制台入口才會顯示，留白則不隱藏管理入口',
      'Set a cipher to hide the management panel entrance, only when the same cipher is entered in the nickname field the management panel entry will be displayed. Leave it blank to not hide the management entrance.',
      'Бошқарув панелига киришни яшириш учун шифрни ўрнатинг, фақат тахаллус майдонига худди шу шифр киритилганда бошқарув панелидаги ёзув кўрсатилади. Бошқарув киришини яширмаслик учун уни бўш қолдиринг.',
      '管理パネルのエントリを非表示にする。 "パスワード" を設定でき、 "ニックネーム" 列に同じ "パスワード" を入力した場合のみ、管理パネルのエントリが表示されます。空白の場合、管理エントリは非表示にされません。'
    ],
    [S.ACI + '_HIGHLIGHT']: [
      '启用代码高亮功能。如果您的主题和代码高亮有冲突，请设为 false。默认：true',
      '啟用代碼高亮功能。如果您的主題和代碼高亮有衝突，請設為 false。預設：true',
      '啟用程式碼醒目顯示功能。如果您的主題和此功能發生衝突，請設定為 false。預設：true',
      'Enable code highlighting. If your theme conflicts with code highlighting, please set it to false. Default: true.',
      'Кодни ажратиб кўрсатишни ёқинг. Агар мавзуингиз кодни ажратиб кўрсатишга зид бўлса, уни «фалсе» га ўрнатинг. Стандарт: рост.',
      'コードハイライト機能を有効にします。テーマとコードハイライトに競合がある場合、falseに設定してください。デフォルト：true'
    ],
    [S.ACI + '_HIGHLIGHT_THEME']: [
      `代码高亮主题，可选：${highlightThemes.join('、')}，访问 https://prismjs.com 可预览主题效果。如果您的主题和代码高亮有冲突，请设为 none。默认：none`,
      `代碼高亮主題，可選：${highlightThemes.join('、')}，訪問 https://prismjs.com 可預覽主題效果。如果您的主題和代碼高亮有衝突，請設為 none。預設：none`,
      `程式碼醒目顯示主題，選項：${highlightThemes.join('、')}，瀏覽 https://prismjs.com 可預覽主題效果。如果您的主題和此功能發生衝突，請設定為 none。預設：none`,
      `Code highlighting theme. Select from: ${highlightThemes.join(', ')}. Visit https://prismjs.com for preview. If your theme conflicts with code highlighting, please set it to none. Default: none.`,
      `Кодни таъкидлаш мавзуси. Қуйидагилардан танланг: ${highlightThemes.join(', ')}. Олдиндан кўриш учун https://prismjs.com сайтига ташриф буюринг. Агар мавзуингиз кодни ажратиб кўрсатишга зид бўлса, уни «Ҳеч» га ўрнатинг. Стандарт: йўқ.`,
      `コードハイライトのテーマ、選択肢：${highlightThemes.join('、')}、テーマの効果をプレビューするには https://prismjs.com を訪問してください。テーマとコードハイライトに競合がある場合、noneに設定してください。デフォルト：none`
    ],
    [S.ACI + '_IMAGE_CDN']: [
      `插入图片所使用的图床，目前支持：${imageBedServices.join('、')}`,
      `插入圖片所使用的圖床，目前支持：${imageBedServices.join('、')}`,
      `插入圖片所使用的圖床，目前支援：${imageBedServices.join('、')}`,
      `The image bed for image uploading. Select from: ${imageBedServices.join(', ')}`,
      `Расм юклаш учун расм тўшаги. Қуйидагилардан танланг: ${imageBedServices.join(', ')}`,
      `画像のアップロードに使用する画像ホスティングサービス、現在のサポート：${imageBedServices.join('、')}`
    ],
    [S.ACI + '_IMAGE_CDN_TOKEN']: [
      '图床 token。qcloud 图床无需设置',
      '图床 token。qcloud 图床无需设置',
      '圖床 token。qcloud 圖床不需設定',
      'The image bed token. Unnessessary for qcloud',
      'Тасвир токен белгиси. Қслоуд учун кераксиз',
      '画像ホスティングトークン。qcloud画像ホスティングには設定が必要ありません'
    ],
    [S.ACI + '_LIMIT_PER_MINUTE']: [
      '单个 IP 发言频率限制（条/10分钟），0 为无限制，默认：10',
      '單個 IP 發言頻率限制（條/10分鐘），0 為無限制，預設：10',
      '單個 IP 留言頻率限制（則/10分鐘），0 為無限，預設：10',
      'How many comments can be posted by each IP every 10 minutes, 0 is unlimited, default: 10.',
      'Ҳар бир ИП ҳар 10 дақиқада қанча шарҳ қолдириши мумкин, 0 чексиз, стандарт: 10.',
      'シングルIPスピーキング回数制限（メッセージ/10分）、0は無制限、デフォルト：10'
    ],
    [S.ACI + '_LIMIT_PER_MINUTE_ALL']: [
      '全站发言频率限制（条/10分钟），0 为无限制，默认：10',
      '全站發言頻率限制（條/10分鐘），0 為無限制，預設：10',
      '全站留言頻率限制（則/10分鐘），0 為無限，預設：10',
      'How many comments can be posted by all IPs every 10 minutes, 0 is unlimited, default: 10.',
      'Барча ИП-лар ҳар 10 дақиқада қанча шарҳ қўйиши мумкин, 0 чексиз, стандарт: 10.',
      '全体サイトの発言頻度制限（件/10分間）、0は制限なし、デフォルト：10'
    ],
    [S.ACI + '_LIMIT_LENGTH']: [
      '评论长度限制，0 为无限制，默认：500',
      '評論長度限制，0 為無限制，預設：500',
      '留言長度限制，0 為無限，預設：500',
      'Comment length limitation, 0 is unlimited, default: 500.',
      'Шарҳ узунлиги чеклови, 0 чексиз, стандарт: 500.',
      'コメント長さの制限、0は無制限、デフォルト：500'
    ],
    [S.ACI + '_MAIL_SUBJECT']: [
      '自定义通知邮件主题，留空则使用默认主题。',
      '自定義通知郵件主題，留空則使用預設主題。',
      '自訂通知郵件主題，留白則使用預設主題。',
      'Custom Email notification subject. Leave it blank to use the default subject.',
      'Махсус электрон почта хабарномаси мавзуси. Стандарт мавзуни ишлатиш учун уни бўш қолдиринг.',
      'カスタム通知メールの件名、空白の場合はデフォルトの件名を使用します。'
    ],
    [S.ACI + '_MAIL_SUBJECT_ADMIN']: [
      '自定义博主通知邮件主题，留空则使用默认主题。',
      '自定義博主通知郵件主題，留空則使用預設主題。',
      '自訂站長通知郵件主題，留白則使用預設主題。',
      'Custom admin Email notification subject. Leave it blank to use the default subject.',
      'Махсус администратор электрон почта хабарномаси мавзуси. Стандарт мавзуни ишлатиш учун уни бўш қолдиринг.',
      'カスタムブロガー通知メールの件名、空白の場合はデフォルトの件名を使用します。'
    ],
    [S.ACI + '_MAIL_TEMPLATE']: [
      '自定义通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      '自定義通知郵件模板，留空則使用預設模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      '自訂通知郵件模板，留白則使用預設模板。可包含的欄位：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      'Custom Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      'Махсус электрон почта хабарномаси шаблони. Стандарт шаблонни ишлатиш учун уни бўш қолдиринг. Қўшилиши мумкин бўлган майдонлар:  ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      'カスタム通知メールテンプレート、空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${PARENT_NICK}、${PARENT_COMMENT}、${NICK}、${COMMENT}、${POST_URL}、${IMG}、${PARENT_IMG}'
    ],
    [S.ACI + '_MAIL_TEMPLATE_ADMIN']: [
      '自定义博主通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}',
      '自定義博主通知郵件模板，留空則使用預設模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}',
      '自訂站長通知郵件模板，留白則使用預設模板。可包含的欄位：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}',
      'Custom admin Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}',
      'Махсус администратор электрон почта хабарномаси шаблони. Стандарт шаблонни ишлатиш учун уни бўш қолдиринг. Қўшилиши мумкин бўлган майдонлар:  ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}',
      'カスタムブロガー通知メールテンプレート、空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${NICK}、${COMMENT}、${POST_URL}、${IP}、${MAIL}、${IMG}'
    ],
    [S.ACI + '_MASTER_TAG']: [
      '博主标识自定义文字，默认为 “博主”。',
      '博主標識自定義文字，預設為 “博主”。',
      '站長認證自訂文字，預設為「博主」。', // 可能牽涉到程式碼層面，不做更動以免造成誤導。
      'Custom admin identifier.',
      'Махсус администратор идентификатори.',
      'ブロガー識別カスタムテキスト、デフォルトは "ブロガー"'
    ],
    [S.ACI + '_NOTIFY_SPAM']: [
      '垃圾评论是否发送通知，默认：true',
      '垃圾評論是否發送通知，默認：true',
      '垃圾留言是否發送通知，預設：true',
      'Notifications for spam comments. Default: true.',
      'Спам шарҳлар учун билдиришномалар. Стандарт: рост.',
      'スパムコメントの通知を送信するかどうか、デフォルト：true'
    ],
    [S.ACI + '_QCLOUD_SECRET_ID']: [
      '腾讯云 secret id，用于垃圾评论检测。同时设置腾讯云和 Akismet 时，只有腾讯云会生效。注册：https://twikoo.js.org/cms.html',
      '騰訊雲 secret id，用於垃圾評論檢測。同時設定騰訊雲和 Akismet 時，只有騰訊雲會生效。註冊：https://twikoo.js.org/cms.html',
      '騰訊雲 Secret ID，用於垃圾留言檢測。同時設定騰訊雲和 Akismet 時，只有騰訊雲會被啟用。註冊：https://twikoo.js.org/cms.html', // 「騰訊雲」是一家網路服務提供商，不改為「騰訊雲端」。
      'Tencent Cloud secret id for spam detection. When Tencent Cloud and Akismet are set at the same time, only Tencent Cloud will take effect. Register: https://twikoo.js.org/cms.html',
      'Спамни аниқлаш учун Тенсент Слоуд махфий идентификатори. Тенсент Слоуд ва Акисмет бир вақтнинг ўзида ўрнатилганда, фақат Тенсент Слоуд кучга киради. Рўйхатдан ўтиш: https://twikoo.js.org/cms.html',
      'Tencent CloudのシークレットID、スパムコメントの検出に使用されます。同時にTencent CloudとAkismetを設定した場合、Tencent Cloudのみが有効になります。登録：https://twikoo.js.org/cms.html'
    ],
    [S.ACI + '_QCLOUD_SECRET_KEY']: [
      '腾讯云 secret key',
      '騰訊雲 secret key',
      '騰訊雲 Secret Key',
      'Tencent Cloud secret key.',
      'Тенсент Клауд махфий калити.',
      'Tencent Cloudのシークレットキー'
    ],
    [S.ACI + '_PUSHOO_CHANNEL']: [
      `即时消息推送平台名称，支持：${pushooChannels.join('、')} 等`,
      `即時消息推送平台名称，支持：${pushooChannels.join('、')} 等`,
      `即時訊息推送平台名稱，支援：${pushooChannels.join('、')} 等`,
      `IM notification push channel. Support: ${pushooChannels.join(', ')}`,
      `ИМ билдиришномаси суриш канали. Қўллаб-қувватлаш: ${pushooChannels.join(', ')}`,
      `即時メッセージプッシュプラットフォームの名前、サポート：${pushooChannels.join('、')} など`
    ],
    [S.ACI + '_PUSHOO_TOKEN']: [
      '即时消息推送 token。请参考 https://pushoo.js.org 里的详细说明配置',
      '即時消息推送 token。请参考 https://pushoo.js.org 里的详细说明配置',
      '即時訊息推送 Token。請参考 https://pushoo.js.org 裡的詳細說明進行設定',
      'IM notification push token. See https://pushoo.js.org for details',
      'ИМ билдиришномаси пуш токени. Тафсилотлар учун https://pushoo.js.org га қаранг',
      '即時メッセージプッシュトークン。詳細な設定については、https://pushoo.js.org の説明をご覧ください'
    ],
    [S.ACI + '_DISPLAYED_FIELDS']: [
      '界面上展示的输入框，默认：nick,mail,link',
      '界面上顯示的輸入框，預設：nick,mail,link',
      '界面上顯示的輸入框，預設：nick,mail,link',
      'Input boxes displayed on the interface. Default: nick,mail,link',
      'Поля ввода, отображаемые на интерфейсе, Стандарт: nick,mail,link',
      '画面に表示される入力欄、デフォルト：nick,mail,link'
    ],
    [S.ACI + '_REQUIRED_FIELDS']: [
      '评论必填信息，设为 nick,mail,link 代表全必填，设为 none 代表全选填，默认：nick,mail',
      '評論必填信息，設為 nick,mail,link 代表全必填，設為 none 代表全選填，預設：nick,mail',
      '留言必填資訊，設為 nick,mail,link 代表全必填，設為 none 代表全選填，預設：nick,mail',
      'Required fields for comments. Set to "nick,mail,link" means all fields are required. Set to "none" means all fields are optional. Default: nick,mail.',
      'Шарҳлар учун зарур майдонлар. «Ниск,маил,линк» га ўрнатилган бўлса, барча майдонлар талаб қилинади. «Йўқ» га ўрнатилиши барча майдонлар ихтиёрий эканлигини англатади. Стандарт: ник, почта.',
      'コメント必須情報、すべての必須情報にはnick,mail,linkに設定、すべての任意情報にはnoneに設定、デフォルト：nick,mail'
    ],
    [S.ACI + '_SC_MAIL_NOTIFY']: [
      '是否同时通过 IM 和邮件 2 种方式通知博主，默认只通过 IM 通知博主，默认：false',
      '是否同時通過 IM 和郵件 2 種方式通知博主，預設只通過 IM 通知博主，預設：false',
      '是否同時透過 IM 和郵件 2 種方式通知博主，預設只透過 IM 通知博主，預設：false',
      'Whether to notify admin via IM and email at the same time, the default is to notify admin only via IM. Default: false.',
      'Администраторни бир вақтнинг ўзида ИМ ва электрон почта орқали хабардор қилиш керакми, сукут бўйича администраторни фақат ИМ орқали хабардор қилиш керак. Стандарт: нотўғри.',
      'ブロガーにIMとEメールで同時に通知するかどうか、デフォルトはIMのみで通知、デフォルト：false'
    ],
    [S.ACI + '_SENDER_EMAIL']: [
      '邮件通知邮箱地址。对于大多数邮箱服务商，SENDER_EMAIL 必须和 SMTP_USER 保持一致，否则无法发送邮件。',
      '郵件通知郵箱地址。對於大多數郵箱服務商，SENDER_EMAIL 必須和 SMTP_USER 保持一致，否則無法發送郵件。',
      '郵件通知郵箱帳號。對於大多數電郵服務提供商，SENDER_EMAIL 必須和 SMTP_USER 保持一致，否則無法傳送郵件。',
      'Email address for Email notification. For most email service providers, SENDER_EMAIL must be consistent with SMTP_USER, otherwise emails cannot be sent.',
      'Электрон почта хабарномаси учун электрон почта манзили. Аксарият электрон почта хизмати провайдерлари учун  SENDER_EMAIL билан мос келиши керак, акс ҳолда электрон почта хабарларини юбориб бўлмайди.',
      '電子メール通知の電子メールアドレス。 ほとんどのメールボックス・プロバイダでは、SENDER_EMAILはSMTP_USERと同じでなければなりません。'
    ],
    [S.ACI + '_SENDER_NAME']: [
      '邮件通知标题。',
      '郵件通知標題。',
      '郵件通知標題。',
      'The title for Email notification.',
      'Электрон почта хабарномаси сарлавҳаси.',
      'メール通知のタイトル'
    ],
    [S.ACI + '_SHOW_EMOTION']: [
      '启用插入表情功能，默认为：true',
      '啟用插入表情功能，預設為：true',
      '啟用插入表情功能，預設為：true',
      'Enable emoticons. Default: true.',
      'Кулгичларни ёқинг. Стандарт: рост.',
      '顔文字の挿入を有効にする、デフォルト：true'
    ],
    [S.ACI + '_SHOW_IMAGE']: [
      '启用插入图片功能，默认为：true',
      '啟用插入圖片功能，預設為：true',
      '啟用插入圖片功能，預設為：true',
      'Enable picture uploading. Default: true.',
      'Расм юклашни ёқинг. Стандарт: рост.',
      '画像挿入機能を有効にする、デフォルト：true'
    ],
    [S.ACI + '_SHOW_UA']: [
      '是否显示用户系统和浏览器，默认为：true',
      '是否顯示使用者系統和瀏覽器，預設為：true',
      '是否顯示使用者作業系統和瀏覽器，預設為：true',
      'Show users\' OS and browser. Default: true.',
      'Фойдаланувчиларнинг ОС ва браузерини кўрсатиш. Стандарт: рост.',
      'ユーザーシステムとブラウザーを表示するかどうか、デフォルトは：true'
    ],
    [S.ACI + '_SHOW_REGION']: [
      '是否显示用户 IP 属地到省，可能不准确，不支持 IPv6，默认为：false',
      '是否顯示使用者 IP 屬地到省，預設為：false',
      '是否顯示使用者 IP 所屬地（精確到省），預設為：false',
      'Show users\' IP region (province). Default: false.',
      'Фойдаланувчиларнинг ИП ҳудудини (вилоят) кўрсатиш. Стандарт: нотўғри.',
      'ユーザーIPの所在地（省）を表示するかどうか、不正確の可能性があり、IPv6はサポートされていません、デフォルトは：false'
    ],
    [S.ACI + '_SITE_NAME']: [
      '网站名称',
      '網站名稱',
      '網站名稱',
      'Website name.',
      'Вебсайт номи.',
      'ウェブサイト名'
    ],
    [S.ACI + '_SITE_URL']: [
      '网站地址',
      '網站地址',
      '網站網址',
      'Website URL.',
      'Вебсайт URL.',
      'ウェブサイトのアドレス'
    ],
    [S.ACI + '_SMTP_HOST']: [
      '自定义 SMTP 服务器地址。如您已配置 SMTP_SERVICE，此项请留空。',
      '自定義 SMTP 伺服器地址。如您已配置 SMTP_SERVICE，此項請留空。',
      '自訂 SMTP 伺服器位址。如您已設定 SMTP_SERVICE，此項請留白。',
      'Custom SMTP server address. If you have configured SMTP_SERVICE, please leave it empty.',
      'Махсус СМТП сервер манзили. Агар сиз СМТП_СEРВИСE созлаган бўлсангиз, уни бўш қолдиринг.',
      '自定义 SMTP 服务器地址。如您已配置 SMTP_SERVICE，此项请留空。',
      'カスタムSMTPサーバのアドレス。 SMTP_SERVICEを設定している場合は空白のままにします。'
    ],
    [S.ACI + '_SMTP_PASS']: [
      'Email notification mailbox password. Enter authorization code for QQ/163 mail.',
      'Электрон почта хабарномаси почта қутиси пароли. ҚҚ/163 почтаси учун авторизация кодини киритинг.',
      'メール通知のメールボックスパスワード、QQ、163メールは認証コードを入力してください'
    ],
    [S.ACI + '_SMTP_PORT']: [
      '自定义 SMTP 端口。如您已配置 SMTP_SERVICE，此项请留空。',
      '自定義 SMTP 端口。如您已配置 SMTP_SERVICE，此項請留空。',
      '自訂 SMTP 連接埠。如您已設定 SMTP_SERVICE，此項請留白。',
      'Custom SMTP port. If you have configured SMTP_SERVICE, please leave it empty.',
      'Махсус СМТП порти. Агар сиз СМТП_СEРВИС созлаган бўлсангиз, уни бўш қолдиринг.',
      'カスタムSMTPポート。 SMTP_SERVICEを設定している場合は、空白のままにします。'
    ],
    [S.ACI + '_SMTP_SECURE']: [
      '自定义 SMTP 是否使用TLS，请填写 true 或 false。如您已配置 SMTP_SERVICE，此项请留空。',
      '自定義 SMTP 是否使用TLS，請填寫 true 或 false。如您已配置 SMTP_SERVICE，此項請留空。',
      '自訂 SMTP 是否使用 TLS，請填寫 true 或 false。如您已設定 SMTP_SERVICE，此項請留白。',
      'Custom TLS for SMTP. Enter "true" or "false". If you have configured SMTP_SERVICE, please leave it empty.',
      'СМТП учун махсус ТЛС. «Тўғри» ёки «нотўғри» ни киритинг. Агар сиз СМТП_СEРВИС созлаган бўлсангиз, уни бўш қолдиринг.',
      'SMTPがTLSを使用するかどうかをカスタマイズします。trueまたはfalseを記入してください。SMTP_SERVICEを設定している場合は、この項目を空白にしてください。'
    ],
    [S.ACI + '_SMTP_SERVICE']: [
      `邮件通知邮箱服务商。支持：${smtpServices.join('、')}`,
      `郵件通知郵箱服務商。支持：${smtpServices.join('、')}`,
      `郵件通知郵箱服務提供商。支援：${smtpServices.join('、')}`,
      `Email service provider for Email notification. Support: ${smtpServices.join(', ')}`,
      `Электрон почта хабарномаси учун электрон почта хизмати провайдери. Қўллаб-қувватлаш: ${smtpServices.join(', ')}`,
      `メール通知メールボックスサービスプロバイダ。 サポート: ${smtpServices.join(',')}.`
    ],
    [S.ACI + '_SMTP_USER']: [
      '邮件通知邮箱用户名。',
      '郵件通知郵箱用户名。',
      '郵件通知郵箱使用者名稱。',
      'Email notification mailbox username.',
      'Электрон почта хабарномаси почта қутиси фойдаланувчи номи.',
      'メール通知のメールボックスユーザー名。'
    ],
    ADMIN_CONFIG_RESET: [
      '重置',
      '重置',
      '還原',
      'Reset',
      'Ресет',
      'リセット'
    ],
    ADMIN_CONFIG_SAVE: [
      '保存',
      '保存',
      '儲存',
      'Save',
      'Сақлаш',
      '保存'
    ],
    ADMIN_CREDENTIALS: [
      'Private key file',
      'Shaxsiy kalit fayli',
      '秘密鍵ファイル'
    ],
    ADMIN_CREDENTIALS_FAQ: [
      '如何获得私钥',
      '如何獲得私鑰',
      '如何獲取私鑰',
      'How to get the private key',
      'Shaxsiy kalitni qanday olish mumkin',
      '秘密鍵を取得する方法'
    ],
    ADMIN_CREDENTIALS_PLACEHOLDER: [
      '请粘贴私钥文件内容',
      '請貼上私鑰文件內容',
      '請貼上私鑰檔案內容',
      'Please paste the contents of the private key file',
      'Iltimos, shaxsiy kalit faylining mazmunini joylashtiring',
      '秘密鍵ファイルの内容を貼り付けてください'
    ],
    ADMIN_FORGOT: [
      '忘记密码',
      '忘記密碼',
      '忘記密碼',
      'Forget your password',
      'Парол унутилган',
      'パスワードを忘れた'
    ],
    ADMIN_EXPORT: [
      '导出',
      '匯出',
      '匯出',
      'Export',
      'Экспорт',
      'エクスポート'
    ],
    ADMIN_EXPORT_WARN: [
      'Export all data as a JSON file. If you encounter export failures or missing data, connect to the database to export manually',
      'Барча маълумотларни ЖСОН файли сифатида экспорт қилинг. Экспорт хатоси ёки этишмаётган маълумотларга дуч келсангиз, қўлда экспорт қилиш учун маълумотлар базасига уланинг',
      'すべてのデータをJSONファイルとしてエクスポートします。コメントが多く、エクスポートに失敗したりデータが欠落している場合は、データベースに手動で接続してエクスポートしてください'
    ],
    ADMIN_EXPORT_COMMENT: [
      'Export comment',
    ],
    ADMIN_EXPORT_COUNTER: [
      'Export counter'
    ],
    [S.AI]: [
      'Import'
    ],
    [S.AI + '_FILE_REQUIRED']: [
      'No file selected',
    ],
    [S.AI + '_IMPORTED']: [
      'Imported '
    ],
    [S.AI + '_IMPORTING']: [
      'Importing '
    ],
    [S.AI + '_LOG']: [
      'Log',
    ],
    [S.AI + '_SELECT']: [
      'Select',
    ],
    [S.AI + '_SELECT_FILE']: [
      'Select file',
    ],
    [S.AI + '_SELECT_SOURCE']: [
      'Select source',
    ],
    [S.AI + '_SOURCE_REQUIRED']: [
      'No source selected.',
    ],
    [S.AI + '_START']: [
      'Start import',
    ],
    [S.AI + '_STARTING']: [
      'Importing',
    ],
    [S.AI + '_TIP_ARTALK']: [
      'Please upload the Artalk export file in JSON format.The file name is usually comments.data.json',
    ],
    [S.AI + '_TIP_DISQUS']: [
      'Please upload the Disqus export file in XML format. The file name is usually [website name]-[export time]-all.xml',
    ],
    [S.AI + '_TIP_VALINE']: [
      'Please upload the Valine export file in JSON format. The file name is usually Comment.json',
    ],
    [S.AI + '_UPLOADED']: [
      'Uploaded '
    ],
    [S.AI + '_UPLOADING']: [,
      'Uploading ',
      'Юкланмоқда ',
      'すでにアップロードされています'
    ],
    [S.AI + '_WARN']: [
      '支持从其他评论系统的备份文件导入评论。\n数据是安全的，导入功能完全在您的云环境进行。\n建议在导入前备份 comment 数据库。',
      '支持從其他評論系統的備份文件匯入評論。\n數據是安全的，匯入功能完全在您的雲環境進行。\n建議在匯入前備份 comment 數據庫。',
      '支援從其他留言系統的備份檔案匯入留言。\n資料是安全的，匯入功能完全在您的雲端環境進行。\n建議在匯入前備份 comment 資料庫。',
      'Import comments from other comment systems.\nThe data is safe, and the import function is performed entirely in your cloud environment.\nPlease backup your comment database before importing.',
      'Бошқа шарҳ тизимларидан шарҳларни импорт қилинг.\nМаълумотлар хавфсиз ва импорт функцияси тўлиқ булутли муҳитда амалга оширилади.\nИмпорт қилишдан олдин шарҳлар маълумотлар базасини захираланг.',
      '他のレビューシステムのバックアップファイルからのレビューのインポートに対応。 \nデータは安全で、インポート機能はすべてクラウド環境で実行されます。 \nインポート前にコメントデータベースをバックアップすることを推奨します。'
    ],
    ADMIN_LOGIN: [
      'Sign in'
    ],
    ADMIN_LOGIN_TITLE: [
      'Twikoo Management Panel'
    ],
    ADMIN_LOGOUT: [
      'Sign out'
    ],
    ADMIN_NEED_UPDATE: [
      'A new version of Twikoo is required for comment management.'
    ],
    ADMIN_PASSWORD: [
      'Password',
    ],
    ADMIN_PASSWORD_PLACEHOLDER: [
      'Enter your password...'
    ],
    ADMIN_PASSWORD_REQUIRED: [
      'Please enter your password'
    ],
    ADMIN_REGIST: [
      'Register'
    ],
    ADMIN_REGIST_FAILED: [
      'Register failed'
    ],
    ADMIN_SET_PASSWORD: [
      'Set password'
    ],
    ADMIN_SET_PASSWORD_CONFIRM: [
      'Confirm password'
    ],
    ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER: [
      'Confirm password...'
    ],
    ADMIN_SET_PASSWORD_PLACEHOLDER: [
      'Password'
    ],
    ADMIN_TITLE: [
      'Twikoo Management Panel'
    ],
    COMMENTS_COUNT_SUFFIX: [
      ' comments'
    ],
    COMMENTS_EXPAND: [
      'Load more'
    ],
    COMMENTS_NO_COMMENTS: [
      'No comment'
    ],
    COMMENT_EXPAND: [
      'Read more'
    ],
    COMMENT_COLLAPSE: [
      'Collapse'
    ],
    COMMENT_MASTER_TAG: [
      'Admin'
    ],
    COMMENT_REPLIED: [
      'Reply'
    ],
    COMMENT_REVIEWING_TAG: [
      'Pending'
    ],
    COMMENT_TOP_TAG: [
      'Pinned'
    ],
    COMMENT_FAILED: [
      'Comment failed'
    ],
    META_INPUT_LINK: [
      'Website'
    ],
    META_INPUT_MAIL: [
      'Email'
    ],
    META_INPUT_NICK: [
      'Nickname'
    ],
    META_INPUT_NOT_REQUIRED: [
      'Optional'
    ],
    META_INPUT_REQUIRED: [
      'Required'
    ],
    PAGINATION_COUNT_PREFIX: [
      ''
    ],
    PAGINATION_COUNT_SUFFIX: [
      ' entries'
    ],
    PAGINATION_GOTO_PREFIX: [
      'Goto page'
    ],
    PAGINATION_GOTO_SUFFIX: [
      ''
    ],
    PAGINATION_PAGESIZE: [
      'entries/page'
    ],
    SUBMIT_CANCEL: [
      'Cancel'
    ],
    SUBMIT_PREVIEW: [
      'Preview'
    ],
    SUBMIT_SEND: [
      'Send'
    ],
    IMAGE_UPLOAD_PLACEHOLDER: [
      'Uploading image'
    ],
    IMAGE_UPLOAD_FAILED: [
      'IMAGE UPLOAD FAILED'
    ],
    IMAGE_UPLOAD_FAILED_NO_CONF: [
      'The blogger didn\'t configured any image bed service'
    ],
    IMAGE_UPLOAD_PLEASE_WAIT: [
      'Uploading image, please try again later'
    ],
    SUBMIT_SENDING: [
      'Sending'
    ],
    TIMEAGO_DAYS: [
      'days ago'
    ],
    TIMEAGO_HOURS: [
      'hours ago'
    ],
    TIMEAGO_MINUTES: [
      'minutes ago'
    ],
    TIMEAGO_NOW: [
      'Just now'
    ],
    TIMEAGO_SECONDS: [
      'seconds ago'
    ]
  }
  }