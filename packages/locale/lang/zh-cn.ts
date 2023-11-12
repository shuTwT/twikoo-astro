import {
  S,
  pushooChannels,
  smtpServices,
  highlightThemes,
  imageBedServices,
  defaultGravatar,
} from "../utils";
export default {
  name: "zh-CN",
  el: {
    ADMIN_CLIENT_VERSION: "前端版本：",
    ADMIN_SERVER_VERSION: "云函数版本：",
    [S.AC]: "评论管理",
    [S.AC + "_DELETE"]: "删除",
    [S.AC + "_DELETE_CONFIRM"]: "确认删除？",
    [S.AC + "_FILTER_ALL"]: "全部",
    [S.AC + "_FILTER_VISIBLE"]: "只看可见",
    [S.AC + "_FILTER_HIDDEN"]: "只看隐藏",
    [S.AC + "_HIDE"]: "隐藏",
    [S.AC + "_IS_SPAM_SUFFIX"]: " (已隐藏)",
    [S.AC + "_SEARCH"]: "搜索",
    [S.AC + "_SEARCH_PLACEHOLDER"]:
      "搜索昵称、邮箱、网址、IP、评论正文、文章地址",
    [S.AC + "_SHOW"]: "显示",
    [S.AC + "_TOP"]: "置顶",
    [S.AC + "_UNTOP"]: "取消置顶",
    [S.AC + "_VIEW"]: "查看",
    ADMIN_CONFIG: "配置管理",
    [S.ACC + "_COMMON"]: "通用",
    [S.ACC + "_IM"]: "即时通知",
    [S.ACC + "_MAIL"]: ["邮件通知"],
    [S.ACC + "_PLUGIN"]: ["插件"],
    [S.ACC + "_PRIVACY"]: ["隐私"],
    [S.ACC + "_SPAM"]: ["反垃圾"],
    ADMIN_CONFIG_EMAIL_TEST: ["邮件通知测试"],
    ADMIN_CONFIG_EMAIL_TEST_BTN: "发送测试邮件",
    ADMIN_CONFIG_EMAIL_TEST_HELP: "输入一个邮箱地址，发送测试邮件",
    ADMIN_CONFIG_EMAIL_TEST_RESULT: "测试结果：",
    ADMIN_CONFIG_EXAMPLE: "示例：",
    [S.ACI + "_AKISMET_KEY"]:
      'Akismet 反垃圾评论，用于垃圾评论检测，设为 "MANUAL_REVIEW" 开启人工审核，留空不使用反垃圾。注册：https://akismet.com',
    [S.ACI + "_BLOGGER_NICK"]: "博主的昵称。",
    [S.ACI + "_BLOGGER_EMAIL"]: "博主的邮箱地址，用于邮件通知、博主标识。",
    [S.ACI + "_COMMENT_BG_IMG"]: "评论框自定义背景图片 URL 地址。",
    [S.ACI + "_COMMENT_PAGE_SIZE"]: "评论列表分页大小，默认为 8。",
    [S.ACI + "_COMMENT_PLACEHOLDER"]: "评论框提示信息，可用<br>换行，默认为空",
    [S.ACI + "_CORS_ALLOW_ORIGIN"]:
      "Vercel CORS 安全域名，注意：错误设置会导致无法加载，默认为空，格式为 https://blog.example.com；如需添加多域名请使用,分隔",
    [S.ACI +
    "_DEFAULT_GRAVATAR"]: `默认的头像显示。默认值为 "identicon"，可选：${defaultGravatar.join(
      "、"
    )}`,
    [S.ACI + "_EMOTION_CDN"]:
      "表情 CDN，英文逗号分隔。默认为：https://owo.imaegoo.com/owo.json",
    [S.ACI + "_FORBIDDEN_WORDS"]:
      "违禁词配置，包含违禁词的内容会直接标记为垃圾评论。英文逗号分隔。",
    [S.ACI + "_GRAVATAR_CDN"]:
      "自定义头像 CDN 地址。如：cn.gravatar.com, cravatar.cn, sdn.geekzu.org, gravatar.loli.net，默认：cravatar.cn",
    [S.ACI + "_HIDE_ADMIN_CRYPT"]:
      "隐藏管理面板入口。可设置一个“暗号”，只有在“昵称”一栏输入相同的“暗号”时，管理面板入口才会显示，留空则不隐藏管理入口",
    [S.ACI + "_HIGHLIGHT"]:
      "启用代码高亮功能。如果您的主题和代码高亮有冲突，请设为 false。默认：true",
    [S.ACI + "_HIGHLIGHT_THEME"]: `代码高亮主题，可选：${highlightThemes.join(
      "、"
    )}，访问 https://prismjs.com 可预览主题效果。如果您的主题和代码高亮有冲突，请设为 none。默认：none`,

    [S.ACI +
    "_IMAGE_CDN"]: `插入图片所使用的图床，目前支持：${imageBedServices.join(
      "、"
    )}`,

    [S.ACI + "_IMAGE_CDN_TOKEN"]: "图床 token。qcloud 图床无需设置",
    [S.ACI + "_LIMIT_PER_MINUTE"]:
      "单个 IP 发言频率限制（条/10分钟），0 为无限制，默认：10",

    [S.ACI + "_LIMIT_PER_MINUTE_ALL"]:
      "全站发言频率限制（条/10分钟），0 为无限制，默认：10",

    [S.ACI + "_LIMIT_LENGTH"]: "评论长度限制，0 为无限制，默认：500",
    [S.ACI + "_MAIL_SUBJECT"]: "自定义通知邮件主题，留空则使用默认主题。",
    [S.ACI + "_MAIL_SUBJECT_ADMIN"]:
      "自定义博主通知邮件主题，留空则使用默认主题。",
    [S.ACI + "_MAIL_TEMPLATE"]:
      "自定义通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}",

    [S.ACI + "_MAIL_TEMPLATE_ADMIN"]:
      "自定义博主通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}",

    [S.ACI + "_MASTER_TAG"]: "博主标识自定义文字，默认为 “博主”。",
    [S.ACI + "_NOTIFY_SPAM"]: "垃圾评论是否发送通知，默认：true",
    [S.ACI + "_QCLOUD_SECRET_ID"]:
      "腾讯云 secret id，用于垃圾评论检测。同时设置腾讯云和 Akismet 时，只有腾讯云会生效。注册：https://twikoo.js.org/cms.html",
    [S.ACI + "_QCLOUD_SECRET_KEY"]: "腾讯云 secret key",
    [S.ACI +
    "_PUSHOO_CHANNEL"]: `即时消息推送平台名称，支持：${pushooChannels.join(
      "、"
    )} 等`,

    [S.ACI + "_PUSHOO_TOKEN"]:
      "即时消息推送 token。请参考 https://pushoo.js.org 里的详细说明配置",

    [S.ACI + "_DISPLAYED_FIELDS"]: "界面上展示的输入框，默认：nick,mail,link",
    [S.ACI + "_REQUIRED_FIELDS"]:
      "评论必填信息，设为 nick,mail,link 代表全必填，设为 none 代表全选填，默认：nick,mail",

    [S.ACI + "_SC_MAIL_NOTIFY"]:
      "是否同时通过 IM 和邮件 2 种方式通知博主，默认只通过 IM 通知博主，默认：false",

    [S.ACI + "_SENDER_EMAIL"]:
      "邮件通知邮箱地址。对于大多数邮箱服务商，SENDER_EMAIL 必须和 SMTP_USER 保持一致，否则无法发送邮件。",

    [S.ACI + "_SENDER_NAME"]: "邮件通知标题。",
    [S.ACI + "_SHOW_EMOTION"]: "启用插入表情功能，默认为：true",
    [S.ACI + "_SHOW_IMAGE"]: "启用插入图片功能，默认为：true",
    [S.ACI + "_SHOW_UA"]: "是否显示用户系统和浏览器，默认为：true",
    [S.ACI + "_SHOW_REGION"]:
      "是否显示用户 IP 属地到省，可能不准确，不支持 IPv6，默认为：false",

    [S.ACI + "_SITE_NAME"]: "网站名称",
    [S.ACI + "_SITE_URL"]: "网站地址",
    [S.ACI + "_SMTP_HOST"]:
      "自定义 SMTP 服务器地址。如您已配置 SMTP_SERVICE，此项请留空。",

    [S.ACI + "_SMTP_PASS"]: "邮件通知邮箱密码，QQ、163邮箱请填写授权码。",
    [S.ACI + "_SMTP_PORT"]:
      "自定义 SMTP 端口。如您已配置 SMTP_SERVICE，此项请留空。",

    [S.ACI + "_SMTP_SECURE"]:
      "自定义 SMTP 是否使用TLS，请填写 true 或 false。如您已配置 SMTP_SERVICE，此项请留空。",

    [S.ACI + "_SMTP_SERVICE"]: `邮件通知邮箱服务商。支持：${smtpServices.join(
      "、"
    )}`,

    [S.ACI + "_SMTP_USER"]: "邮件通知邮箱用户名。",
    ADMIN_CONFIG_RESET: "重置",
    ADMIN_CONFIG_SAVE: "保存",
    ADMIN_CREDENTIALS: "私钥文件",
    ADMIN_CREDENTIALS_FAQ: "如何获得私钥",
    ADMIN_CREDENTIALS_PLACEHOLDER: "请粘贴私钥文件内容",
    ADMIN_FORGOT: "忘记密码",
    ADMIN_EXPORT: "导出",
    ADMIN_EXPORT_WARN:
      "将全部数据导出为 JSON 文件。如果遇到评论较多、导出失败或缺失数据，请连接数据库手动导出",
    ADMIN_EXPORT_COMMENT: "导出评论",
    ADMIN_EXPORT_COUNTER: "导出访问量",
    [S.AI]: "导入",
    [S.AI + "_FILE_REQUIRED"]: "未选择文件",
    [S.AI + "_IMPORTED"]: "完成导入 ",
    [S.AI + "_IMPORTING"]: "开始导入 ",
    [S.AI + "_LOG"]: "日志",
    [S.AI + "_SELECT"]: "请选择",
    [S.AI + "_SELECT_FILE"]: "选择文件",
    [S.AI + "_SELECT_SOURCE"]: "选择源系统",
    [S.AI + "_SOURCE_REQUIRED"]: "未选择源系统",
    [S.AI + "_START"]: "开始导入",
    [S.AI + "_STARTING"]: "开始导入",
    [S.AI + "_TIP_ARTALK"]:
      "请上传 JSON 格式的 Artalk 导出文件，文件名通常为 comments.data.json",
    [S.AI + "_TIP_DISQUS"]:
      "请上传 XML 格式的 Disqus 导出文件，文件名通常为 [网站名称]-[导出时间]-all.xml",
    [S.AI + "_TIP_VALINE"]:
      "请上传 JSON 格式的 Valine 导出文件，文件名通常为 Comment.json",
    [S.AI + "_UPLOADED"]: "上传完成 ",
    [S.AI + "_UPLOADING"]: "已上传 ",
    [S.AI + "_WARN"]:
      "支持从其他评论系统的备份文件导入评论。\n数据是安全的，导入功能完全在您的云环境进行。\n建议在导入前备份 comment 数据库。",
    ADMIN_LOGIN: "登录",
    ADMIN_LOGIN_TITLE: "Twikoo 评论管理",
    ADMIN_LOGOUT: "退出登录",
    ADMIN_NEED_UPDATE: "若要使用评论管理，请更新 Twikoo 云函数",
    ADMIN_PASSWORD: "密码",
    ADMIN_PASSWORD_PLACEHOLDER: "请输入",
    ADMIN_PASSWORD_REQUIRED: "请输入密码",
    ADMIN_REGIST: "注册",
    ADMIN_REGIST_FAILED: "注册失败",
    ADMIN_SET_PASSWORD: "设置密码",
    ADMIN_SET_PASSWORD_CONFIRM: "确认密码",
    ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER: "确认密码",
    ADMIN_SET_PASSWORD_PLACEHOLDER: "密码",
    ADMIN_TITLE: "Twikoo 管理面板",
    COMMENTS_COUNT_SUFFIX: " 条评论",
    COMMENTS_EXPAND: "查看更多",
    COMMENTS_NO_COMMENTS: "没有评论",
    COMMENT_EXPAND: "展开",
    COMMENT_COLLAPSE: "收起",
    COMMENT_MASTER_TAG: "博主",
    COMMENT_REPLIED: "回复",
    COMMENT_REVIEWING_TAG: "审核中",
    COMMENT_TOP_TAG: "置顶",
    COMMENT_FAILED: "评论失败",
    META_INPUT_LINK: "网址",
    META_INPUT_MAIL: "邮箱",
    META_INPUT_NICK: "昵称",
    META_INPUT_NOT_REQUIRED: "选填",
    META_INPUT_REQUIRED: "必填",
    PAGINATION_COUNT_PREFIX: "共 ",
    PAGINATION_COUNT_SUFFIX: " 条",
    PAGINATION_GOTO_PREFIX: "前往",
    PAGINATION_GOTO_SUFFIX: "页",
    PAGINATION_PAGESIZE: "条/页",
    SUBMIT_CANCEL: "取消",
    SUBMIT_PREVIEW: "预览",
    SUBMIT_SEND: "发送",
    IMAGE_UPLOAD_PLACEHOLDER: "图片上传中",
    IMAGE_UPLOAD_FAILED: "图片上传失败",
    IMAGE_UPLOAD_FAILED_NO_CONF: "博主未配置图床服务",
    IMAGE_UPLOAD_PLEASE_WAIT: "图片上传中，请稍候再发送",
    SUBMIT_SENDING: "发送中",
    TIMEAGO_DAYS: "天前",
    TIMEAGO_HOURS: "小时前",
    TIMEAGO_MINUTES: "分钟前",

    TIMEAGO_NOW: "刚刚",

    TIMEAGO_SECONDS: "秒前",
  },
};
