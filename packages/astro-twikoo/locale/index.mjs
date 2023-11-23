/*!
* locale v0.0.1
*/

// lang/en.ts
var en_default = {
  name: "en",
  el: {
    ADMIN_CLIENT_VERSION: "Client version: ",
    ADMIN_SERVER_VERSION: "Server version: ",
    ["ADMIN_COMMENT"]: "Comment",
    ["ADMIN_COMMENT_DELETE"]: "Delete",
    ["ADMIN_COMMENT_DELETE_CONFIRM"]: "Confirm deletion?",
    ["ADMIN_COMMENT_FILTER_ALL"]: "All",
    ["ADMIN_COMMENT_FILTER_VISIBLE"]: "Visible",
    ["ADMIN_COMMENT_FILTER_HIDDEN"]: "Hidden",
    ["ADMIN_COMMENT_HIDE"]: "Hide",
    ["ADMIN_COMMENT_IS_SPAM_SUFFIX"]: " (Hidden)",
    ["ADMIN_COMMENT_SEARCH"]: "Search",
    ["ADMIN_COMMENT_SEARCH_PLACEHOLDER"]: "Search by nick, mail, website, IP, comment, or article path",
    ["ADMIN_COMMENT_SHOW"]: "Show",
    ["ADMIN_COMMENT_TOP"]: "Pin",
    ["ADMIN_COMMENT_UNTOP"]: "Unpin",
    ["ADMIN_COMMENT_VIEW"]: "View",
    ADMIN_CONFIG: "Configuration",
    ["ADMIN_CONFIG_CATEGORY_COMMON"]: "General",
    ["ADMIN_CONFIG_CATEGORY_IM"]: "Instant notification",
    ["ADMIN_CONFIG_CATEGORY_MAIL"]: "Email notification",
    ["ADMIN_CONFIG_CATEGORY_PLUGIN"]: "Plugin",
    ["ADMIN_CONFIG_CATEGORY_PRIVACY"]: "Privacy",
    ["ADMIN_CONFIG_CATEGORY_SPAM"]: "Spam",
    ADMIN_CONFIG_EMAIL_TEST: "Email notification test",
    ADMIN_CONFIG_EMAIL_TEST_BTN: "Send test mail",
    ADMIN_CONFIG_EMAIL_TEST_HELP: "Input an email address & send test mail",
    ADMIN_CONFIG_EMAIL_TEST_RESULT: "Test result: ",
    ADMIN_CONFIG_EXAMPLE: "Example: ",
    ["ADMIN_CONFIG_ITEM_AKISMET_KEY"]: 'Akismet spam protection. Set to "MANUAL_REVIEW" to enable manual review. Leave it blank to not use anti-spam. Register Akismet: https://akismet.com',
    ["ADMIN_CONFIG_ITEM_BLOGGER_NICK"]: "Admin nick name.",
    ["ADMIN_CONFIG_ITEM_BLOGGER_EMAIL"]: "Admin Email address. Used for Email notification and admin identification.",
    ["ADMIN_CONFIG_ITEM_COMMENT_BG_IMG"]: "URL for custom background image.",
    ["ADMIN_CONFIG_ITEM_COMMENT_PAGE_SIZE"]: "Comment page size. Default: 8.",
    ["ADMIN_CONFIG_ITEM_COMMENT_PLACEHOLDER"]: "Comment placeholder. Use <br> to start a newline. Default: empty.",
    ["ADMIN_CONFIG_ITEM_CORS_ALLOW_ORIGIN"]: "Vercel CORS allow origin, note: incorrect settings can cause loading failure. Default: blank, format: https://blog.example.com; If you need to add multiple domain names, please use, separate",
    ["ADMIN_CONFIG_ITEM_DEFAULT_GRAVATAR"]: `Avatar placeholder. Default:  "identicon". Choose from: '404',
    'mp',
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
    'robohash',
    'blank'`,
    ["ADMIN_CONFIG_ITEM_EMOTION_CDN"]: "Emotion CDN. Separate by comma. Default: https://owo.imaegoo.com/owo.json",
    ["ADMIN_CONFIG_ITEM_FORBIDDEN_WORDS"]: "Configure prohibited words. Comments containing prohibited words will be auto spammed. Separate by comma.",
    ["ADMIN_CONFIG_ITEM_GRAVATAR_CDN"]: "Custom avator CDN. (Examples: gravatar.com) Default: cravatar.cn.",
    ["ADMIN_CONFIG_ITEM_HIDE_ADMIN_CRYPT"]: "Set a cipher to hide the management panel entrance, only when the same cipher is entered in the nickname field the management panel entry will be displayed. Leave it blank to not hide the management entrance.",
    ["ADMIN_CONFIG_ITEM_HIGHLIGHT"]: "Enable code highlighting. If your theme conflicts with code highlighting, please set it to false. Default: true.",
    ["ADMIN_CONFIG_ITEM_HIGHLIGHT_THEME"]: `Code highlighting theme. Select from: 
    'default',
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'
    . Visit https://prismjs.com for preview. If your theme conflicts with code highlighting, please set it to none. Default: none.`,
    ["ADMIN_CONFIG_ITEM_IMAGE_CDN"]: `The image bed for image uploading. Select from: 'qcloud',
    '7bu',
    'https://7bu.top',
    'smms'`,
    ["ADMIN_CONFIG_ITEM_IMAGE_CDN_TOKEN"]: "The image bed token. Unnessessary for qcloud",
    ["ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE"]: "How many comments can be posted by each IP every 10 minutes, 0 is unlimited, default: 10.",
    ["ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE_ALL"]: "How many comments can be posted by all IPs every 10 minutes, 0 is unlimited, default: 10.",
    ["ADMIN_CONFIG_ITEM_LIMIT_LENGTH"]: "Comment length limitation, 0 is unlimited, default: 500.",
    ["ADMIN_CONFIG_ITEM_MAIL_SUBJECT"]: "Custom Email notification subject. Leave it blank to use the default subject.",
    ["ADMIN_CONFIG_ITEM_MAIL_SUBJECT_ADMIN"]: "Custom admin Email notification subject. Leave it blank to use the default subject.",
    ["ADMIN_CONFIG_ITEM_MAIL_TEMPLATE"]: "Custom Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}",
    ["ADMIN_CONFIG_ITEM_MAIL_TEMPLATE_ADMIN"]: "Custom admin Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}",
    ["ADMIN_CONFIG_ITEM_MASTER_TAG"]: "Custom admin identifier.",
    ["ADMIN_CONFIG_ITEM_NOTIFY_SPAM"]: "Notifications for spam comments. Default: true.",
    ["ADMIN_CONFIG_ITEM_QCLOUD_SECRET_ID"]: "Tencent Cloud secret id for spam detection. When Tencent Cloud and Akismet are set at the same time, only Tencent Cloud will take effect. Register: https://twikoo.js.org/cms.html",
    ["ADMIN_CONFIG_ITEM_QCLOUD_SECRET_KEY"]: "Tencent Cloud secret key.",
    ["ADMIN_CONFIG_ITEM_PUSHOO_CHANNEL"]: `IM notification push channel. Support: 'qmsg',
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
    'feishu'`,
    ["ADMIN_CONFIG_ITEM_PUSHOO_TOKEN"]: "IM notification push token. See https://pushoo.js.org for details",
    ["ADMIN_CONFIG_ITEM_DISPLAYED_FIELDS"]: "Input boxes displayed on the interface. Default: nick,mail,link",
    ["ADMIN_CONFIG_ITEM_REQUIRED_FIELDS"]: 'Required fields for comments. Set to "nick,mail,link" means all fields are required. Set to "none" means all fields are optional. Default: nick,mail.',
    ["ADMIN_CONFIG_ITEM_SC_MAIL_NOTIFY"]: "Whether to notify admin via IM and email at the same time, the default is to notify admin only via IM. Default: false.",
    ["ADMIN_CONFIG_ITEM_SENDER_EMAIL"]: "Email address for Email notification. For most email service providers, SENDER_EMAIL must be consistent with SMTP_USER, otherwise emails cannot be sent.",
    ["ADMIN_CONFIG_ITEM_SENDER_NAME"]: "The title for Email notification.",
    ["ADMIN_CONFIG_ITEM_SHOW_EMOTION"]: "Enable emoticons. Default: true.",
    ["ADMIN_CONFIG_ITEM_SHOW_IMAGE"]: "Enable picture uploading. Default: true.",
    ["ADMIN_CONFIG_ITEM_SHOW_UA"]: "Show users' OS and browser. Default: true.",
    ["ADMIN_CONFIG_ITEM_SHOW_REGION"]: "Show users' IP region (province). Default: false.",
    ["ADMIN_CONFIG_ITEM_SITE_NAME"]: "Website name.",
    ["ADMIN_CONFIG_ITEM_SITE_URL"]: "Website URL.",
    ["ADMIN_CONFIG_ITEM_SMTP_HOST"]: "Custom SMTP server address. If you have configured SMTP_SERVICE, please leave it empty.",
    ["ADMIN_CONFIG_ITEM_SMTP_PASS"]: "Email notification mailbox password. Enter authorization code for QQ/163 mail.",
    ["ADMIN_CONFIG_ITEM_SMTP_PORT"]: "Custom SMTP port. If you have configured SMTP_SERVICE, please leave it empty.",
    ["ADMIN_CONFIG_ITEM_SMTP_SECURE"]: 'Custom TLS for SMTP. Enter "true" or "false". If you have configured SMTP_SERVICE, please leave it empty.',
    ["ADMIN_CONFIG_ITEM_SMTP_SERVICE"]: `Email service provider for Email notification. Support: '126',
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
    'qiye.aliyun'`,
    ["ADMIN_CONFIG_ITEM_SMTP_USER"]: "Email notification mailbox username.",
    ADMIN_CONFIG_RESET: "Reset",
    ADMIN_CONFIG_SAVE: "Save",
    ADMIN_CREDENTIALS: "Private key file",
    ADMIN_CREDENTIALS_FAQ: "How to get the private key",
    ADMIN_CREDENTIALS_PLACEHOLDER: "Please paste the contents of the private key file",
    ADMIN_FORGOT: "Forget your password",
    ADMIN_EXPORT: "Export",
    ADMIN_EXPORT_WARN: "Export all data as a JSON file. If you encounter export failures or missing data, connect to the database to export manually",
    ADMIN_EXPORT_COMMENT: "Export comment",
    ADMIN_EXPORT_COUNTER: "Export counter",
    ["ADMIN_IMPORT"]: "Import",
    ["ADMIN_IMPORT_FILE_REQUIRED"]: "No file selected",
    ["ADMIN_IMPORT_IMPORTED"]: "Imported ",
    ["ADMIN_IMPORT_IMPORTING"]: "Importing ",
    ["ADMIN_IMPORT_LOG"]: "Log",
    ["ADMIN_IMPORT_SELECT"]: "Select",
    ["ADMIN_IMPORT_SELECT_FILE"]: "Select file",
    ["ADMIN_IMPORT_SELECT_SOURCE"]: "Select source",
    ["ADMIN_IMPORT_SOURCE_REQUIRED"]: "No source selected.",
    ["ADMIN_IMPORT_START"]: "Start import",
    ["ADMIN_IMPORT_STARTING"]: "Importing",
    ["ADMIN_IMPORT_TIP_ARTALK"]: "Please upload the Artalk export file in JSON format.The file name is usually comments.data.json",
    ["ADMIN_IMPORT_TIP_DISQUS"]: "Please upload the Disqus export file in XML format. The file name is usually [website name]-[export time]-all.xml",
    ["ADMIN_IMPORT_TIP_VALINE"]: "Please upload the Valine export file in JSON format. The file name is usually Comment.json",
    ["ADMIN_IMPORT_UPLOADED"]: "Uploaded ",
    ["ADMIN_IMPORT_UPLOADING"]: "Uploading ",
    ["ADMIN_IMPORT_WARN"]: "Import comments from other comment systems.\nThe data is safe, and the import function is performed entirely in your cloud environment.\nPlease backup your comment database before importing.",
    ADMIN_LOGIN: "Sign in",
    ADMIN_LOGIN_TITLE: "Twikoo Management Panel",
    ADMIN_LOGOUT: "Sign out",
    ADMIN_NEED_UPDATE: "A new version of Twikoo is required for comment management.",
    ADMIN_PASSWORD: "Password",
    ADMIN_PASSWORD_PLACEHOLDER: "Enter your password...",
    ADMIN_PASSWORD_REQUIRED: "Please enter your password",
    ADMIN_REGIST: "Register",
    ADMIN_REGIST_FAILED: "Register failed",
    ADMIN_SET_PASSWORD: "Set password",
    ADMIN_SET_PASSWORD_CONFIRM: "Confirm password",
    ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER: "Confirm password...",
    ADMIN_SET_PASSWORD_PLACEHOLDER: "Password",
    ADMIN_TITLE: "Twikoo Management Panel",
    COMMENTS_COUNT_SUFFIX: " comments",
    COMMENTS_EXPAND: "Load more",
    COMMENTS_NO_COMMENTS: "No comment",
    COMMENT_EXPAND: "Read more",
    COMMENT_COLLAPSE: "Collapse",
    COMMENT_MASTER_TAG: "Admin",
    COMMENT_REPLIED: "Reply",
    COMMENT_REVIEWING_TAG: "Pending",
    COMMENT_TOP_TAG: "Pinned",
    COMMENT_FAILED: "Comment failed",
    META_INPUT_LINK: "Website",
    META_INPUT_MAIL: "Email",
    META_INPUT_NICK: "Nickname",
    META_INPUT_NOT_REQUIRED: "Optional",
    META_INPUT_REQUIRED: "Required",
    PAGINATION_COUNT_PREFIX: "",
    PAGINATION_COUNT_SUFFIX: " entries",
    PAGINATION_GOTO_PREFIX: "Goto page",
    PAGINATION_GOTO_SUFFIX: "",
    PAGINATION_PAGESIZE: "entries/page",
    SUBMIT_CANCEL: "Cancel",
    SUBMIT_PREVIEW: "Preview",
    SUBMIT_SEND: "Send",
    IMAGE_UPLOAD_PLACEHOLDER: "Uploading image",
    IMAGE_UPLOAD_FAILED: "IMAGE UPLOAD FAILED",
    IMAGE_UPLOAD_FAILED_NO_CONF: "The blogger didn't configured any image bed service",
    IMAGE_UPLOAD_PLEASE_WAIT: "Uploading image, please try again later",
    SUBMIT_SENDING: "Sending",
    TIMEAGO_DAYS: "days ago",
    TIMEAGO_HOURS: "hours ago",
    TIMEAGO_MINUTES: "minutes ago",
    TIMEAGO_NOW: "Just now",
    TIMEAGO_SECONDS: "seconds ago"
  }
};

// lang/zh-cn.ts
var zh_cn_default = {
  name: "zh-CN",
  el: {
    ADMIN_CLIENT_VERSION: "\u524D\u7AEF\u7248\u672C\uFF1A",
    ADMIN_SERVER_VERSION: "\u4E91\u51FD\u6570\u7248\u672C\uFF1A",
    ["ADMIN_COMMENT"]: "\u8BC4\u8BBA\u7BA1\u7406",
    ["ADMIN_COMMENT_DELETE"]: "\u5220\u9664",
    ["ADMIN_COMMENT_DELETE_CONFIRM"]: "\u786E\u8BA4\u5220\u9664\uFF1F",
    ["ADMIN_COMMENT_FILTER_ALL"]: "\u5168\u90E8",
    ["ADMIN_COMMENT_FILTER_VISIBLE"]: "\u53EA\u770B\u53EF\u89C1",
    ["ADMIN_COMMENT_FILTER_HIDDEN"]: "\u53EA\u770B\u9690\u85CF",
    ["ADMIN_COMMENT_HIDE"]: "\u9690\u85CF",
    ["ADMIN_COMMENT_IS_SPAM_SUFFIX"]: " (\u5DF2\u9690\u85CF)",
    ["ADMIN_COMMENT_SEARCH"]: "\u641C\u7D22",
    ["ADMIN_COMMENT_SEARCH_PLACEHOLDER"]: "\u641C\u7D22\u6635\u79F0\u3001\u90AE\u7BB1\u3001\u7F51\u5740\u3001IP\u3001\u8BC4\u8BBA\u6B63\u6587\u3001\u6587\u7AE0\u5730\u5740",
    ["ADMIN_COMMENT_SHOW"]: "\u663E\u793A",
    ["ADMIN_COMMENT_TOP"]: "\u7F6E\u9876",
    ["ADMIN_COMMENT_UNTOP"]: "\u53D6\u6D88\u7F6E\u9876",
    ["ADMIN_COMMENT_VIEW"]: "\u67E5\u770B",
    ADMIN_CONFIG: "\u914D\u7F6E\u7BA1\u7406",
    ["ADMIN_CONFIG_CATEGORY_COMMON"]: "\u901A\u7528",
    ["ADMIN_CONFIG_CATEGORY_IM"]: "\u5373\u65F6\u901A\u77E5",
    ["ADMIN_CONFIG_CATEGORY_MAIL"]: ["\u90AE\u4EF6\u901A\u77E5"],
    ["ADMIN_CONFIG_CATEGORY_PLUGIN"]: ["\u63D2\u4EF6"],
    ["ADMIN_CONFIG_CATEGORY_PRIVACY"]: ["\u9690\u79C1"],
    ["ADMIN_CONFIG_CATEGORY_SPAM"]: ["\u53CD\u5783\u573E"],
    ADMIN_CONFIG_EMAIL_TEST: ["\u90AE\u4EF6\u901A\u77E5\u6D4B\u8BD5"],
    ADMIN_CONFIG_EMAIL_TEST_BTN: "\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6",
    ADMIN_CONFIG_EMAIL_TEST_HELP: "\u8F93\u5165\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740\uFF0C\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6",
    ADMIN_CONFIG_EMAIL_TEST_RESULT: "\u6D4B\u8BD5\u7ED3\u679C\uFF1A",
    ADMIN_CONFIG_EXAMPLE: "\u793A\u4F8B\uFF1A",
    ["ADMIN_CONFIG_ITEM_AKISMET_KEY"]: 'Akismet \u53CD\u5783\u573E\u8BC4\u8BBA\uFF0C\u7528\u4E8E\u5783\u573E\u8BC4\u8BBA\u68C0\u6D4B\uFF0C\u8BBE\u4E3A "MANUAL_REVIEW" \u5F00\u542F\u4EBA\u5DE5\u5BA1\u6838\uFF0C\u7559\u7A7A\u4E0D\u4F7F\u7528\u53CD\u5783\u573E\u3002\u6CE8\u518C\uFF1Ahttps://akismet.com',
    ["ADMIN_CONFIG_ITEM_BLOGGER_NICK"]: "\u535A\u4E3B\u7684\u6635\u79F0\u3002",
    ["ADMIN_CONFIG_ITEM_BLOGGER_EMAIL"]: "\u535A\u4E3B\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u7528\u4E8E\u90AE\u4EF6\u901A\u77E5\u3001\u535A\u4E3B\u6807\u8BC6\u3002",
    ["ADMIN_CONFIG_ITEM_COMMENT_BG_IMG"]: "\u8BC4\u8BBA\u6846\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247 URL \u5730\u5740\u3002",
    ["ADMIN_CONFIG_ITEM_COMMENT_PAGE_SIZE"]: "\u8BC4\u8BBA\u5217\u8868\u5206\u9875\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A 8\u3002",
    ["ADMIN_CONFIG_ITEM_COMMENT_PLACEHOLDER"]: "\u8BC4\u8BBA\u6846\u63D0\u793A\u4FE1\u606F\uFF0C\u53EF\u7528<br>\u6362\u884C\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A",
    ["ADMIN_CONFIG_ITEM_CORS_ALLOW_ORIGIN"]: "Vercel CORS \u5B89\u5168\u57DF\u540D\uFF0C\u6CE8\u610F\uFF1A\u9519\u8BEF\u8BBE\u7F6E\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u683C\u5F0F\u4E3A https://blog.example.com\uFF1B\u5982\u9700\u6DFB\u52A0\u591A\u57DF\u540D\u8BF7\u4F7F\u7528,\u5206\u9694",
    ["ADMIN_CONFIG_ITEM_DEFAULT_GRAVATAR"]: `\u9ED8\u8BA4\u7684\u5934\u50CF\u663E\u793A\u3002\u9ED8\u8BA4\u503C\u4E3A "identicon"\uFF0C\u53EF\u9009\uFF1A'404',
    'mp',
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
    'robohash',
    'blank'`,
    ["ADMIN_CONFIG_ITEM_EMOTION_CDN"]: "\u8868\u60C5 CDN\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694\u3002\u9ED8\u8BA4\u4E3A\uFF1Ahttps://owo.imaegoo.com/owo.json",
    ["ADMIN_CONFIG_ITEM_FORBIDDEN_WORDS"]: "\u8FDD\u7981\u8BCD\u914D\u7F6E\uFF0C\u5305\u542B\u8FDD\u7981\u8BCD\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u6807\u8BB0\u4E3A\u5783\u573E\u8BC4\u8BBA\u3002\u82F1\u6587\u9017\u53F7\u5206\u9694\u3002",
    ["ADMIN_CONFIG_ITEM_GRAVATAR_CDN"]: "\u81EA\u5B9A\u4E49\u5934\u50CF CDN \u5730\u5740\u3002\u5982\uFF1Acn.gravatar.com, cravatar.cn, sdn.geekzu.org, gravatar.loli.net\uFF0C\u9ED8\u8BA4\uFF1Acravatar.cn",
    ["ADMIN_CONFIG_ITEM_HIDE_ADMIN_CRYPT"]: "\u9690\u85CF\u7BA1\u7406\u9762\u677F\u5165\u53E3\u3002\u53EF\u8BBE\u7F6E\u4E00\u4E2A\u201C\u6697\u53F7\u201D\uFF0C\u53EA\u6709\u5728\u201C\u6635\u79F0\u201D\u4E00\u680F\u8F93\u5165\u76F8\u540C\u7684\u201C\u6697\u53F7\u201D\u65F6\uFF0C\u7BA1\u7406\u9762\u677F\u5165\u53E3\u624D\u4F1A\u663E\u793A\uFF0C\u7559\u7A7A\u5219\u4E0D\u9690\u85CF\u7BA1\u7406\u5165\u53E3",
    ["ADMIN_CONFIG_ITEM_HIGHLIGHT"]: "\u542F\u7528\u4EE3\u7801\u9AD8\u4EAE\u529F\u80FD\u3002\u5982\u679C\u60A8\u7684\u4E3B\u9898\u548C\u4EE3\u7801\u9AD8\u4EAE\u6709\u51B2\u7A81\uFF0C\u8BF7\u8BBE\u4E3A false\u3002\u9ED8\u8BA4\uFF1Atrue",
    ["ADMIN_CONFIG_ITEM_HIGHLIGHT_THEME"]: `\u4EE3\u7801\u9AD8\u4EAE\u4E3B\u9898\uFF0C\u53EF\u9009\uFF1A'default',
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'\uFF0C\u8BBF\u95EE https://prismjs.com \u53EF\u9884\u89C8\u4E3B\u9898\u6548\u679C\u3002\u5982\u679C\u60A8\u7684\u4E3B\u9898\u548C\u4EE3\u7801\u9AD8\u4EAE\u6709\u51B2\u7A81\uFF0C\u8BF7\u8BBE\u4E3A none\u3002\u9ED8\u8BA4\uFF1Anone`,
    ["ADMIN_CONFIG_ITEM_IMAGE_CDN"]: `\u63D2\u5165\u56FE\u7247\u6240\u4F7F\u7528\u7684\u56FE\u5E8A\uFF0C\u76EE\u524D\u652F\u6301\uFF1A'qcloud',
    '7bu',
    'https://7bu.top',
    'smms'`,
    ["ADMIN_CONFIG_ITEM_IMAGE_CDN_TOKEN"]: "\u56FE\u5E8A token\u3002qcloud \u56FE\u5E8A\u65E0\u9700\u8BBE\u7F6E",
    ["ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE"]: "\u5355\u4E2A IP \u53D1\u8A00\u9891\u7387\u9650\u5236\uFF08\u6761/10\u5206\u949F\uFF09\uFF0C0 \u4E3A\u65E0\u9650\u5236\uFF0C\u9ED8\u8BA4\uFF1A10",
    ["ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE_ALL"]: "\u5168\u7AD9\u53D1\u8A00\u9891\u7387\u9650\u5236\uFF08\u6761/10\u5206\u949F\uFF09\uFF0C0 \u4E3A\u65E0\u9650\u5236\uFF0C\u9ED8\u8BA4\uFF1A10",
    ["ADMIN_CONFIG_ITEM_LIMIT_LENGTH"]: "\u8BC4\u8BBA\u957F\u5EA6\u9650\u5236\uFF0C0 \u4E3A\u65E0\u9650\u5236\uFF0C\u9ED8\u8BA4\uFF1A500",
    ["ADMIN_CONFIG_ITEM_MAIL_SUBJECT"]: "\u81EA\u5B9A\u4E49\u901A\u77E5\u90AE\u4EF6\u4E3B\u9898\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u4E3B\u9898\u3002",
    ["ADMIN_CONFIG_ITEM_MAIL_SUBJECT_ADMIN"]: "\u81EA\u5B9A\u4E49\u535A\u4E3B\u901A\u77E5\u90AE\u4EF6\u4E3B\u9898\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u4E3B\u9898\u3002",
    ["ADMIN_CONFIG_ITEM_MAIL_TEMPLATE"]: "\u81EA\u5B9A\u4E49\u901A\u77E5\u90AE\u4EF6\u6A21\u677F\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u6A21\u677F\u3002\u53EF\u5305\u542B\u7684\u5B57\u6BB5\uFF1A${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}",
    ["ADMIN_CONFIG_ITEM_MAIL_TEMPLATE_ADMIN"]: "\u81EA\u5B9A\u4E49\u535A\u4E3B\u901A\u77E5\u90AE\u4EF6\u6A21\u677F\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u6A21\u677F\u3002\u53EF\u5305\u542B\u7684\u5B57\u6BB5\uFF1A${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}",
    ["ADMIN_CONFIG_ITEM_MASTER_TAG"]: "\u535A\u4E3B\u6807\u8BC6\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C\u9ED8\u8BA4\u4E3A \u201C\u535A\u4E3B\u201D\u3002",
    ["ADMIN_CONFIG_ITEM_NOTIFY_SPAM"]: "\u5783\u573E\u8BC4\u8BBA\u662F\u5426\u53D1\u9001\u901A\u77E5\uFF0C\u9ED8\u8BA4\uFF1Atrue",
    ["ADMIN_CONFIG_ITEM_QCLOUD_SECRET_ID"]: "\u817E\u8BAF\u4E91 secret id\uFF0C\u7528\u4E8E\u5783\u573E\u8BC4\u8BBA\u68C0\u6D4B\u3002\u540C\u65F6\u8BBE\u7F6E\u817E\u8BAF\u4E91\u548C Akismet \u65F6\uFF0C\u53EA\u6709\u817E\u8BAF\u4E91\u4F1A\u751F\u6548\u3002\u6CE8\u518C\uFF1Ahttps://twikoo.js.org/cms.html",
    ["ADMIN_CONFIG_ITEM_QCLOUD_SECRET_KEY"]: "\u817E\u8BAF\u4E91 secret key",
    ["ADMIN_CONFIG_ITEM_PUSHOO_CHANNEL"]: `\u5373\u65F6\u6D88\u606F\u63A8\u9001\u5E73\u53F0\u540D\u79F0\uFF0C\u652F\u6301\uFF1A 'qmsg',
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
    'feishu' \u7B49`,
    ["ADMIN_CONFIG_ITEM_PUSHOO_TOKEN"]: "\u5373\u65F6\u6D88\u606F\u63A8\u9001 token\u3002\u8BF7\u53C2\u8003 https://pushoo.js.org \u91CC\u7684\u8BE6\u7EC6\u8BF4\u660E\u914D\u7F6E",
    ["ADMIN_CONFIG_ITEM_DISPLAYED_FIELDS"]: "\u754C\u9762\u4E0A\u5C55\u793A\u7684\u8F93\u5165\u6846\uFF0C\u9ED8\u8BA4\uFF1Anick,mail,link",
    ["ADMIN_CONFIG_ITEM_REQUIRED_FIELDS"]: "\u8BC4\u8BBA\u5FC5\u586B\u4FE1\u606F\uFF0C\u8BBE\u4E3A nick,mail,link \u4EE3\u8868\u5168\u5FC5\u586B\uFF0C\u8BBE\u4E3A none \u4EE3\u8868\u5168\u9009\u586B\uFF0C\u9ED8\u8BA4\uFF1Anick,mail",
    ["ADMIN_CONFIG_ITEM_SC_MAIL_NOTIFY"]: "\u662F\u5426\u540C\u65F6\u901A\u8FC7 IM \u548C\u90AE\u4EF6 2 \u79CD\u65B9\u5F0F\u901A\u77E5\u535A\u4E3B\uFF0C\u9ED8\u8BA4\u53EA\u901A\u8FC7 IM \u901A\u77E5\u535A\u4E3B\uFF0C\u9ED8\u8BA4\uFF1Afalse",
    ["ADMIN_CONFIG_ITEM_SENDER_EMAIL"]: "\u90AE\u4EF6\u901A\u77E5\u90AE\u7BB1\u5730\u5740\u3002\u5BF9\u4E8E\u5927\u591A\u6570\u90AE\u7BB1\u670D\u52A1\u5546\uFF0CSENDER_EMAIL \u5FC5\u987B\u548C SMTP_USER \u4FDD\u6301\u4E00\u81F4\uFF0C\u5426\u5219\u65E0\u6CD5\u53D1\u9001\u90AE\u4EF6\u3002",
    ["ADMIN_CONFIG_ITEM_SENDER_NAME"]: "\u90AE\u4EF6\u901A\u77E5\u6807\u9898\u3002",
    ["ADMIN_CONFIG_ITEM_SHOW_EMOTION"]: "\u542F\u7528\u63D2\u5165\u8868\u60C5\u529F\u80FD\uFF0C\u9ED8\u8BA4\u4E3A\uFF1Atrue",
    ["ADMIN_CONFIG_ITEM_SHOW_IMAGE"]: "\u542F\u7528\u63D2\u5165\u56FE\u7247\u529F\u80FD\uFF0C\u9ED8\u8BA4\u4E3A\uFF1Atrue",
    ["ADMIN_CONFIG_ITEM_SHOW_UA"]: "\u662F\u5426\u663E\u793A\u7528\u6237\u7CFB\u7EDF\u548C\u6D4F\u89C8\u5668\uFF0C\u9ED8\u8BA4\u4E3A\uFF1Atrue",
    ["ADMIN_CONFIG_ITEM_SHOW_REGION"]: "\u662F\u5426\u663E\u793A\u7528\u6237 IP \u5C5E\u5730\u5230\u7701\uFF0C\u53EF\u80FD\u4E0D\u51C6\u786E\uFF0C\u4E0D\u652F\u6301 IPv6\uFF0C\u9ED8\u8BA4\u4E3A\uFF1Afalse",
    ["ADMIN_CONFIG_ITEM_SITE_NAME"]: "\u7F51\u7AD9\u540D\u79F0",
    ["ADMIN_CONFIG_ITEM_SITE_URL"]: "\u7F51\u7AD9\u5730\u5740",
    ["ADMIN_CONFIG_ITEM_SMTP_HOST"]: "\u81EA\u5B9A\u4E49 SMTP \u670D\u52A1\u5668\u5730\u5740\u3002\u5982\u60A8\u5DF2\u914D\u7F6E SMTP_SERVICE\uFF0C\u6B64\u9879\u8BF7\u7559\u7A7A\u3002",
    ["ADMIN_CONFIG_ITEM_SMTP_PASS"]: "\u90AE\u4EF6\u901A\u77E5\u90AE\u7BB1\u5BC6\u7801\uFF0CQQ\u3001163\u90AE\u7BB1\u8BF7\u586B\u5199\u6388\u6743\u7801\u3002",
    ["ADMIN_CONFIG_ITEM_SMTP_PORT"]: "\u81EA\u5B9A\u4E49 SMTP \u7AEF\u53E3\u3002\u5982\u60A8\u5DF2\u914D\u7F6E SMTP_SERVICE\uFF0C\u6B64\u9879\u8BF7\u7559\u7A7A\u3002",
    ["ADMIN_CONFIG_ITEM_SMTP_SECURE"]: "\u81EA\u5B9A\u4E49 SMTP \u662F\u5426\u4F7F\u7528TLS\uFF0C\u8BF7\u586B\u5199 true \u6216 false\u3002\u5982\u60A8\u5DF2\u914D\u7F6E SMTP_SERVICE\uFF0C\u6B64\u9879\u8BF7\u7559\u7A7A\u3002",
    ["ADMIN_CONFIG_ITEM_SMTP_SERVICE"]: `\u90AE\u4EF6\u901A\u77E5\u90AE\u7BB1\u670D\u52A1\u5546\u3002\u652F\u6301\uFF1A'126',
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
    'qiye.aliyun'`,
    ["ADMIN_CONFIG_ITEM_SMTP_USER"]: "\u90AE\u4EF6\u901A\u77E5\u90AE\u7BB1\u7528\u6237\u540D\u3002",
    ADMIN_CONFIG_RESET: "\u91CD\u7F6E",
    ADMIN_CONFIG_SAVE: "\u4FDD\u5B58",
    ADMIN_CREDENTIALS: "\u79C1\u94A5\u6587\u4EF6",
    ADMIN_CREDENTIALS_FAQ: "\u5982\u4F55\u83B7\u5F97\u79C1\u94A5",
    ADMIN_CREDENTIALS_PLACEHOLDER: "\u8BF7\u7C98\u8D34\u79C1\u94A5\u6587\u4EF6\u5185\u5BB9",
    ADMIN_FORGOT: "\u5FD8\u8BB0\u5BC6\u7801",
    ADMIN_EXPORT: "\u5BFC\u51FA",
    ADMIN_EXPORT_WARN: "\u5C06\u5168\u90E8\u6570\u636E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002\u5982\u679C\u9047\u5230\u8BC4\u8BBA\u8F83\u591A\u3001\u5BFC\u51FA\u5931\u8D25\u6216\u7F3A\u5931\u6570\u636E\uFF0C\u8BF7\u8FDE\u63A5\u6570\u636E\u5E93\u624B\u52A8\u5BFC\u51FA",
    ADMIN_EXPORT_COMMENT: "\u5BFC\u51FA\u8BC4\u8BBA",
    ADMIN_EXPORT_COUNTER: "\u5BFC\u51FA\u8BBF\u95EE\u91CF",
    ["ADMIN_IMPORT"]: "\u5BFC\u5165",
    ["ADMIN_IMPORT_FILE_REQUIRED"]: "\u672A\u9009\u62E9\u6587\u4EF6",
    ["ADMIN_IMPORT_IMPORTED"]: "\u5B8C\u6210\u5BFC\u5165 ",
    ["ADMIN_IMPORT_IMPORTING"]: "\u5F00\u59CB\u5BFC\u5165 ",
    ["ADMIN_IMPORT_LOG"]: "\u65E5\u5FD7",
    ["ADMIN_IMPORT_SELECT"]: "\u8BF7\u9009\u62E9",
    ["ADMIN_IMPORT_SELECT_FILE"]: "\u9009\u62E9\u6587\u4EF6",
    ["ADMIN_IMPORT_SELECT_SOURCE"]: "\u9009\u62E9\u6E90\u7CFB\u7EDF",
    ["ADMIN_IMPORT_SOURCE_REQUIRED"]: "\u672A\u9009\u62E9\u6E90\u7CFB\u7EDF",
    ["ADMIN_IMPORT_START"]: "\u5F00\u59CB\u5BFC\u5165",
    ["ADMIN_IMPORT_STARTING"]: "\u5F00\u59CB\u5BFC\u5165",
    ["ADMIN_IMPORT_TIP_ARTALK"]: "\u8BF7\u4E0A\u4F20 JSON \u683C\u5F0F\u7684 Artalk \u5BFC\u51FA\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u901A\u5E38\u4E3A comments.data.json",
    ["ADMIN_IMPORT_TIP_DISQUS"]: "\u8BF7\u4E0A\u4F20 XML \u683C\u5F0F\u7684 Disqus \u5BFC\u51FA\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u901A\u5E38\u4E3A [\u7F51\u7AD9\u540D\u79F0]-[\u5BFC\u51FA\u65F6\u95F4]-all.xml",
    ["ADMIN_IMPORT_TIP_VALINE"]: "\u8BF7\u4E0A\u4F20 JSON \u683C\u5F0F\u7684 Valine \u5BFC\u51FA\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u901A\u5E38\u4E3A Comment.json",
    ["ADMIN_IMPORT_UPLOADED"]: "\u4E0A\u4F20\u5B8C\u6210 ",
    ["ADMIN_IMPORT_UPLOADING"]: "\u5DF2\u4E0A\u4F20 ",
    ["ADMIN_IMPORT_WARN"]: "\u652F\u6301\u4ECE\u5176\u4ED6\u8BC4\u8BBA\u7CFB\u7EDF\u7684\u5907\u4EFD\u6587\u4EF6\u5BFC\u5165\u8BC4\u8BBA\u3002\n\u6570\u636E\u662F\u5B89\u5168\u7684\uFF0C\u5BFC\u5165\u529F\u80FD\u5B8C\u5168\u5728\u60A8\u7684\u4E91\u73AF\u5883\u8FDB\u884C\u3002\n\u5EFA\u8BAE\u5728\u5BFC\u5165\u524D\u5907\u4EFD comment \u6570\u636E\u5E93\u3002",
    ADMIN_LOGIN: "\u767B\u5F55",
    ADMIN_LOGIN_TITLE: "Twikoo \u8BC4\u8BBA\u7BA1\u7406",
    ADMIN_LOGOUT: "\u9000\u51FA\u767B\u5F55",
    ADMIN_NEED_UPDATE: "\u82E5\u8981\u4F7F\u7528\u8BC4\u8BBA\u7BA1\u7406\uFF0C\u8BF7\u66F4\u65B0 Twikoo \u4E91\u51FD\u6570",
    ADMIN_PASSWORD: "\u5BC6\u7801",
    ADMIN_PASSWORD_PLACEHOLDER: "\u8BF7\u8F93\u5165",
    ADMIN_PASSWORD_REQUIRED: "\u8BF7\u8F93\u5165\u5BC6\u7801",
    ADMIN_REGIST: "\u6CE8\u518C",
    ADMIN_REGIST_FAILED: "\u6CE8\u518C\u5931\u8D25",
    ADMIN_SET_PASSWORD: "\u8BBE\u7F6E\u5BC6\u7801",
    ADMIN_SET_PASSWORD_CONFIRM: "\u786E\u8BA4\u5BC6\u7801",
    ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER: "\u786E\u8BA4\u5BC6\u7801",
    ADMIN_SET_PASSWORD_PLACEHOLDER: "\u5BC6\u7801",
    ADMIN_TITLE: "Twikoo \u7BA1\u7406\u9762\u677F",
    COMMENTS_COUNT_SUFFIX: " \u6761\u8BC4\u8BBA",
    COMMENTS_EXPAND: "\u67E5\u770B\u66F4\u591A",
    COMMENTS_NO_COMMENTS: "\u6CA1\u6709\u8BC4\u8BBA",
    COMMENT_EXPAND: "\u5C55\u5F00",
    COMMENT_COLLAPSE: "\u6536\u8D77",
    COMMENT_MASTER_TAG: "\u535A\u4E3B",
    COMMENT_REPLIED: "\u56DE\u590D",
    COMMENT_REVIEWING_TAG: "\u5BA1\u6838\u4E2D",
    COMMENT_TOP_TAG: "\u7F6E\u9876",
    COMMENT_FAILED: "\u8BC4\u8BBA\u5931\u8D25",
    META_INPUT_LINK: "\u7F51\u5740",
    META_INPUT_MAIL: "\u90AE\u7BB1",
    META_INPUT_NICK: "\u6635\u79F0",
    META_INPUT_NOT_REQUIRED: "\u9009\u586B",
    META_INPUT_REQUIRED: "\u5FC5\u586B",
    PAGINATION_COUNT_PREFIX: "\u5171 ",
    PAGINATION_COUNT_SUFFIX: " \u6761",
    PAGINATION_GOTO_PREFIX: "\u524D\u5F80",
    PAGINATION_GOTO_SUFFIX: "\u9875",
    PAGINATION_PAGESIZE: "\u6761/\u9875",
    SUBMIT_CANCEL: "\u53D6\u6D88",
    SUBMIT_PREVIEW: "\u9884\u89C8",
    SUBMIT_SEND: "\u53D1\u9001",
    IMAGE_UPLOAD_PLACEHOLDER: "\u56FE\u7247\u4E0A\u4F20\u4E2D",
    IMAGE_UPLOAD_FAILED: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25",
    IMAGE_UPLOAD_FAILED_NO_CONF: "\u535A\u4E3B\u672A\u914D\u7F6E\u56FE\u5E8A\u670D\u52A1",
    IMAGE_UPLOAD_PLEASE_WAIT: "\u56FE\u7247\u4E0A\u4F20\u4E2D\uFF0C\u8BF7\u7A0D\u5019\u518D\u53D1\u9001",
    SUBMIT_SENDING: "\u53D1\u9001\u4E2D",
    TIMEAGO_DAYS: "\u5929\u524D",
    TIMEAGO_HOURS: "\u5C0F\u65F6\u524D",
    TIMEAGO_MINUTES: "\u5206\u949F\u524D",
    TIMEAGO_NOW: "\u521A\u521A",
    TIMEAGO_SECONDS: "\u79D2\u524D"
  }
};
export {
  en_default as en,
  zh_cn_default as zhCn
};