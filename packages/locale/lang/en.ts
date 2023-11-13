export default {
  name: "en",
  el: {
    ADMIN_CLIENT_VERSION: "Client version: ",
    ADMIN_SERVER_VERSION: "Server version: ",
    ["ADMIN_COMMENT"]: "Comment",
    ["ADMIN_COMMENT" + "_DELETE"]: "Delete",
    ["ADMIN_COMMENT" + "_DELETE_CONFIRM"]: "Confirm deletion?",
    ["ADMIN_COMMENT" + "_FILTER_ALL"]: "All",
    ["ADMIN_COMMENT" + "_FILTER_VISIBLE"]: "Visible",
    ["ADMIN_COMMENT" + "_FILTER_HIDDEN"]: "Hidden",
    ["ADMIN_COMMENT" + "_HIDE"]: "Hide",
    ["ADMIN_COMMENT" + "_IS_SPAM_SUFFIX"]: " (Hidden)",
    ["ADMIN_COMMENT" + "_SEARCH"]: "Search",
    ["ADMIN_COMMENT" + "_SEARCH_PLACEHOLDER"]:
      "Search by nick, mail, website, IP, comment, or article path",
    ["ADMIN_COMMENT" + "_SHOW"]: "Show",
    ["ADMIN_COMMENT" + "_TOP"]: "Pin",
    ["ADMIN_COMMENT" + "_UNTOP"]: "Unpin",
    ["ADMIN_COMMENT" + "_VIEW"]: "View",

    ADMIN_CONFIG: "Configuration",
    ["ADMIN_CONFIG_CATEGORY" + "_COMMON"]: "General",
    ["ADMIN_CONFIG_CATEGORY" + "_IM"]: "Instant notification",
    ["ADMIN_CONFIG_CATEGORY" + "_MAIL"]: "Email notification",
    ["ADMIN_CONFIG_CATEGORY" + "_PLUGIN"]: "Plugin",
    ["ADMIN_CONFIG_CATEGORY" + "_PRIVACY"]: "Privacy",
    ["ADMIN_CONFIG_CATEGORY" + "_SPAM"]: "Spam",

    ADMIN_CONFIG_EMAIL_TEST: "Email notification test",
    ADMIN_CONFIG_EMAIL_TEST_BTN: "Send test mail",

    ADMIN_CONFIG_EMAIL_TEST_HELP: "Input an email address & send test mail",

    ADMIN_CONFIG_EMAIL_TEST_RESULT: "Test result: ",

    ADMIN_CONFIG_EXAMPLE: "Example: ",

    ["ADMIN_CONFIG_ITEM" + "_AKISMET_KEY"]:
      'Akismet spam protection. Set to "MANUAL_REVIEW" to enable manual review. Leave it blank to not use anti-spam. Register Akismet: https://akismet.com',
    ["ADMIN_CONFIG_ITEM" + "_BLOGGER_NICK"]: "Admin nick name.",

    ["ADMIN_CONFIG_ITEM" + "_BLOGGER_EMAIL"]:
      "Admin Email address. Used for Email notification and admin identification.",
    ["ADMIN_CONFIG_ITEM" + "_COMMENT_BG_IMG"]:
      "URL for custom background image.",
    ["ADMIN_CONFIG_ITEM" + "_COMMENT_PAGE_SIZE"]:
      "Comment page size. Default: 8.",
    ["ADMIN_CONFIG_ITEM" + "_COMMENT_PLACEHOLDER"]:
      "Comment placeholder. Use <br> to start a newline. Default: empty.",

    ["ADMIN_CONFIG_ITEM" + "_CORS_ALLOW_ORIGIN"]:
      "Vercel CORS allow origin, note: incorrect settings can cause loading failure. Default: blank, format: https://blog.example.com; If you need to add multiple domain names, please use, separate",
    ["ADMIN_CONFIG_ITEM" +
    "_DEFAULT_GRAVATAR"]: `Avatar placeholder. Default:  "identicon". Choose from: '404',
    'mp',
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
    'robohash',
    'blank'`,
    ["ADMIN_CONFIG_ITEM" + "_EMOTION_CDN"]:
      "Emotion CDN. Separate by comma. Default: https://owo.imaegoo.com/owo.json",
    ["ADMIN_CONFIG_ITEM" + "_FORBIDDEN_WORDS"]:
      "Configure prohibited words. Comments containing prohibited words will be auto spammed. Separate by comma.",

    ["ADMIN_CONFIG_ITEM" + "_GRAVATAR_CDN"]:
      "Custom avator CDN. (Examples: gravatar.com) Default: cravatar.cn.",

    ["ADMIN_CONFIG_ITEM" + "_HIDE_ADMIN_CRYPT"]:
      "Set a cipher to hide the management panel entrance, only when the same cipher is entered in the nickname field the management panel entry will be displayed. Leave it blank to not hide the management entrance.",

    ["ADMIN_CONFIG_ITEM" + "_HIGHLIGHT"]:
      "Enable code highlighting. If your theme conflicts with code highlighting, please set it to false. Default: true.",

    ["ADMIN_CONFIG_ITEM" +
    "_HIGHLIGHT_THEME"]: `Code highlighting theme. Select from: 
    'default',
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'
    . Visit https://prismjs.com for preview. If your theme conflicts with code highlighting, please set it to none. Default: none.`,
    ["ADMIN_CONFIG_ITEM" +
    "_IMAGE_CDN"]: `The image bed for image uploading. Select from: 'qcloud',
    '7bu',
    'https://7bu.top',
    'smms'`,

    ["ADMIN_CONFIG_ITEM" + "_IMAGE_CDN_TOKEN"]:
      "The image bed token. Unnessessary for qcloud",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_PER_MINUTE"]:
      "How many comments can be posted by each IP every 10 minutes, 0 is unlimited, default: 10.",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_PER_MINUTE_ALL"]:
      "How many comments can be posted by all IPs every 10 minutes, 0 is unlimited, default: 10.",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_LENGTH"]:
      "Comment length limitation, 0 is unlimited, default: 500.",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_SUBJECT"]:
      "Custom Email notification subject. Leave it blank to use the default subject.",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_SUBJECT_ADMIN"]:
      "Custom admin Email notification subject. Leave it blank to use the default subject.",
    ["ADMIN_CONFIG_ITEM" + "_MAIL_TEMPLATE"]:
      "Custom Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}",
    ["ADMIN_CONFIG_ITEM" + "_MAIL_TEMPLATE_ADMIN"]:
      "Custom admin Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}",
    ["ADMIN_CONFIG_ITEM" + "_MASTER_TAG"]: "Custom admin identifier.",
    ["ADMIN_CONFIG_ITEM" + "_NOTIFY_SPAM"]:
      "Notifications for spam comments. Default: true.",
    ["ADMIN_CONFIG_ITEM" + "_QCLOUD_SECRET_ID"]:
      "Tencent Cloud secret id for spam detection. When Tencent Cloud and Akismet are set at the same time, only Tencent Cloud will take effect. Register: https://twikoo.js.org/cms.html",
    ["ADMIN_CONFIG_ITEM" + "_QCLOUD_SECRET_KEY"]: "Tencent Cloud secret key.",

    ["ADMIN_CONFIG_ITEM" +
    "_PUSHOO_CHANNEL"]: `IM notification push channel. Support: 'qmsg',
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

    ["ADMIN_CONFIG_ITEM" + "_PUSHOO_TOKEN"]:
      "IM notification push token. See https://pushoo.js.org for details",

    ["ADMIN_CONFIG_ITEM" + "_DISPLAYED_FIELDS"]:
      "Input boxes displayed on the interface. Default: nick,mail,link",

    ["ADMIN_CONFIG_ITEM" + "_REQUIRED_FIELDS"]:
      'Required fields for comments. Set to "nick,mail,link" means all fields are required. Set to "none" means all fields are optional. Default: nick,mail.',
    ["ADMIN_CONFIG_ITEM" + "_SC_MAIL_NOTIFY"]:
      "Whether to notify admin via IM and email at the same time, the default is to notify admin only via IM. Default: false.",

    ["ADMIN_CONFIG_ITEM" + "_SENDER_EMAIL"]:
      "Email address for Email notification. For most email service providers, SENDER_EMAIL must be consistent with SMTP_USER, otherwise emails cannot be sent.",
    ["ADMIN_CONFIG_ITEM" + "_SENDER_NAME"]: "The title for Email notification.",
    ["ADMIN_CONFIG_ITEM" + "_SHOW_EMOTION"]: "Enable emoticons. Default: true.",
    ["ADMIN_CONFIG_ITEM" + "_SHOW_IMAGE"]:
      "Enable picture uploading. Default: true.",
    ["ADMIN_CONFIG_ITEM" + "_SHOW_UA"]:
      "Show users' OS and browser. Default: true.",
    ["ADMIN_CONFIG_ITEM" + "_SHOW_REGION"]:
      "Show users' IP region (province). Default: false.",
    ["ADMIN_CONFIG_ITEM" + "_SITE_NAME"]: "Website name.",
    ["ADMIN_CONFIG_ITEM" + "_SITE_URL"]: "Website URL.",
    ["ADMIN_CONFIG_ITEM" + "_SMTP_HOST"]:
      "Custom SMTP server address. If you have configured SMTP_SERVICE, please leave it empty.",
    ["ADMIN_CONFIG_ITEM" + "_SMTP_PASS"]:
      "Email notification mailbox password. Enter authorization code for QQ/163 mail.",
    ["ADMIN_CONFIG_ITEM" + "_SMTP_PORT"]:
      "Custom SMTP port. If you have configured SMTP_SERVICE, please leave it empty.",

    ["ADMIN_CONFIG_ITEM" + "_SMTP_SECURE"]:
      'Custom TLS for SMTP. Enter "true" or "false". If you have configured SMTP_SERVICE, please leave it empty.',

    ["ADMIN_CONFIG_ITEM" +
    "_SMTP_SERVICE"]: `Email service provider for Email notification. Support: '126',
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

    ["ADMIN_CONFIG_ITEM" + "_SMTP_USER"]:
      "Email notification mailbox username.",
    ADMIN_CONFIG_RESET: "Reset",
    ADMIN_CONFIG_SAVE: "Save",
    ADMIN_CREDENTIALS: "Private key file",
    ADMIN_CREDENTIALS_FAQ: "How to get the private key",

    ADMIN_CREDENTIALS_PLACEHOLDER:
      "Please paste the contents of the private key file",

    ADMIN_FORGOT: "Forget your password",

    ADMIN_EXPORT: "Export",
    ADMIN_EXPORT_WARN:
      "Export all data as a JSON file. If you encounter export failures or missing data, connect to the database to export manually",

    ADMIN_EXPORT_COMMENT: "Export comment",

    ADMIN_EXPORT_COUNTER: "Export counter",
    ["ADMIN_IMPORT"]: "Import",
    ["ADMIN_IMPORT" + "_FILE_REQUIRED"]: "No file selected",

    ["ADMIN_IMPORT" + "_IMPORTED"]: "Imported ",

    ["ADMIN_IMPORT" + "_IMPORTING"]: "Importing ",

    ["ADMIN_IMPORT" + "_LOG"]: "Log",

    ["ADMIN_IMPORT" + "_SELECT"]: "Select",

    ["ADMIN_IMPORT" + "_SELECT_FILE"]: "Select file",

    ["ADMIN_IMPORT" + "_SELECT_SOURCE"]: "Select source",

    ["ADMIN_IMPORT" + "_SOURCE_REQUIRED"]: "No source selected.",

    ["ADMIN_IMPORT" + "_START"]: "Start import",

    ["ADMIN_IMPORT" + "_STARTING"]: "Importing",

    ["ADMIN_IMPORT" + "_TIP_ARTALK"]:
      "Please upload the Artalk export file in JSON format.The file name is usually comments.data.json",

    ["ADMIN_IMPORT" + "_TIP_DISQUS"]:
      "Please upload the Disqus export file in XML format. The file name is usually [website name]-[export time]-all.xml",

    ["ADMIN_IMPORT" + "_TIP_VALINE"]:
      "Please upload the Valine export file in JSON format. The file name is usually Comment.json",

    ["ADMIN_IMPORT" + "_UPLOADED"]: "Uploaded ",
    ["ADMIN_IMPORT" + "_UPLOADING"]: "Uploading ",
    ["ADMIN_IMPORT" + "_WARN"]:
      "Import comments from other comment systems.\nThe data is safe, and the import function is performed entirely in your cloud environment.\nPlease backup your comment database before importing.",
    ADMIN_LOGIN: "Sign in",
    ADMIN_LOGIN_TITLE: "Twikoo Management Panel",
    ADMIN_LOGOUT: "Sign out",

    ADMIN_NEED_UPDATE:
      "A new version of Twikoo is required for comment management.",

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
    IMAGE_UPLOAD_FAILED_NO_CONF:
      "The blogger didn't configured any image bed service",
    IMAGE_UPLOAD_PLEASE_WAIT: "Uploading image, please try again later",
    SUBMIT_SENDING: "Sending",
    TIMEAGO_DAYS: "days ago",
    TIMEAGO_HOURS: "hours ago",
    TIMEAGO_MINUTES: "minutes ago",
    TIMEAGO_NOW: "Just now",
    TIMEAGO_SECONDS: "seconds ago",
  },
};
