export default {
  name: "ja",
  el: {
    ADMIN_CLIENT_VERSION: "フロントエンドバージョン：",
    ADMIN_SERVER_VERSION: "クラウド機能バージョン: ",
    ["ADMIN_COMMENT"]: "コメント管理",

    ["ADMIN_COMMENT" + "_DELETE"]: "削除",
    ["ADMIN_COMMENT" + "_DELETE_CONFIRM"]: "削除を確認する？",

    ["ADMIN_COMMENT" + "_FILTER_ALL"]: "全部",
    ["ADMIN_COMMENT" + "_FILTER_VISIBLE"]: "可視のみ",

    ["ADMIN_COMMENT" + "_FILTER_HIDDEN"]: "非表示のみ",

    ["ADMIN_COMMENT" + "_HIDE"]: "非表示",
    ["ADMIN_COMMENT" + "_IS_SPAM_SUFFIX"]: " (非表示にされた)",

    ["ADMIN_COMMENT" + "_SEARCH"]: "検索",
    ["ADMIN_COMMENT" + "_SEARCH_PLACEHOLDER"]:
      "ニックネーム、メールアドレス、ウェブサイトURL、IPアドレス、コメント内容、記事のURLを検索",

    ["ADMIN_COMMENT" + "_SHOW"]: ["显示", "顯示", "顯示", "Show", "Кўрсатиш", "表示"],
    ["ADMIN_COMMENT" + "_TOP"]: ["置顶", "置頂", "置頂", "Pin", "Қадамоқ", "トップに固定"],
    ["ADMIN_COMMENT" + "_UNTOP"]: "トップ固定を解除",

    ["ADMIN_COMMENT" + "_VIEW"]: "閲覧",
    ADMIN_CONFIG: "設定管理",

    ["ADMIN_CONFIG_CATEGORY" + "_COMMON"]: "共通",
    ["ADMIN_CONFIG_CATEGORY" + "_IM"]: "即時通知",

    ["ADMIN_CONFIG_CATEGORY" + "_MAIL"]: "メール通知",

    ["ADMIN_CONFIG_CATEGORY" + "_PLUGIN"]: "プラグイン",

    ["ADMIN_CONFIG_CATEGORY" + "_PRIVACY"]: "プライバシー",

    ["ADMIN_CONFIG_CATEGORY" + "_SPAM"]: "スパム対策",

    ADMIN_CONFIG_EMAIL_TEST: "メール通知テスト",

    ADMIN_CONFIG_EMAIL_TEST_BTN: "テストメールを送信",

    ADMIN_CONFIG_EMAIL_TEST_HELP:
      "メールアドレスを入力し、テストメールを送信してください",

    ADMIN_CONFIG_EMAIL_TEST_RESULT: "テスト結果：",

    ADMIN_CONFIG_EXAMPLE: "例：",

    ["ADMIN_CONFIG_ITEM" + "_AKISMET_KEY"]:
      'Akismetは、スパムコメントの検出に使用されるアンチスパムサービスです。"MANUAL_REVIEW"を設定すると、人の手によるレビューが必要なコメントを開始します。コメントのスパム対策にAkismetを使用することで、不要なコメントをブロックし、サイトのセキュリティを向上させることができます。 Akismetの詳細情報と登録は、https://akismet.com で提供されています。',

    ["ADMIN_CONFIG_ITEM" + "_BLOGGER_NICK"]: "管理者のニックネーム。",

    ["ADMIN_CONFIG_ITEM" + "_BLOGGER_EMAIL"]:
      "管理者のメールアドレス、通知、ブロガー識別のため。",

    ["ADMIN_CONFIG_ITEM" + "_COMMENT_BG_IMG"]:
      "コメントボックスのカスタム背景画像のURLアドレス。",

    ["ADMIN_CONFIG_ITEM" + "_COMMENT_PAGE_SIZE"]:
      "コメントリストのページサイズ、デフォルトは8。",

    ["ADMIN_CONFIG_ITEM" + "_COMMENT_PLACEHOLDER"]:
      "コメントボックスのヒントメッセージ、<br>で改行可能、デフォルトは空」",

    ["ADMIN_CONFIG_ITEM" + "_CORS_ALLOW_ORIGIN"]:
      "Vercel CORS セキュアドメイン、注意：誤った設定は読み込みエラーを引き起こす可能性があります、デフォルトは空、形式は https://blog.example.com です。複数のドメインを追加する場合は、コンマで区切ってください。",

    ["ADMIN_CONFIG_ITEM" +
    "_DEFAULT_GRAVATAR"]: `デフォルトのプロフィール画像表示。デフォルト値は "identicon" で、選択肢は：'404',
    'mp',
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
    'robohash',
    'blank' です`,

    ["ADMIN_CONFIG_ITEM" + "_EMOTION_CDN"]:
      "表情 CDN，英文逗号分隔。默认为：https://owo.imaegoo.com/owo.json",

    ["ADMIN_CONFIG_ITEM" + "_FORBIDDEN_WORDS"]:
      "禁止語設定、禁止語を含むコンテンツは直ちにスパムコメントとしてマークされます。コンマで区切ってください。",

    ["ADMIN_CONFIG_ITEM" + "_GRAVATAR_CDN"]:
      "カスタムプロフィール画像CDNアドレス。例：cn.gravatar.com、cravatar.cn、sdn.geekzu.org、gravatar.loli.net、デフォルト：cravatar.cn",

    ["ADMIN_CONFIG_ITEM" + "_HIDE_ADMIN_CRYPT"]:
      '管理パネルのエントリを非表示にする。 "パスワード" を設定でき、 "ニックネーム" 列に同じ "パスワード" を入力した場合のみ、管理パネルのエントリが表示されます。空白の場合、管理エントリは非表示にされません。',

    ["ADMIN_CONFIG_ITEM" + "_HIGHLIGHT"]:
      "コードハイライト機能を有効にします。テーマとコードハイライトに競合がある場合、falseに設定してください。デフォルト：true",

    ["ADMIN_CONFIG_ITEM" +
    "_HIGHLIGHT_THEME"]: `コードハイライトのテーマ、選択肢：'default',
    'coy',
    'dark',
    'funky',
    'okaidia',
    'solarizedlight',
    'tomorrow',
    'twilight'、テーマの効果をプレビューするには https://prismjs.com を訪問してください。テーマとコードハイライトに競合がある場合、noneに設定してください。デフォルト：none`,

    ["ADMIN_CONFIG_ITEM" +
    "_IMAGE_CDN"]: `画像のアップロードに使用する画像ホスティングサービス、現在のサポート：'qcloud',
    '7bu',
    'https://7bu.top',
    'smms'`,

    ["ADMIN_CONFIG_ITEM" + "_IMAGE_CDN_TOKEN"]:
      "画像ホスティングトークン。qcloud画像ホスティングには設定が必要ありません",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_PER_MINUTE"]:
      "シングルIPスピーキング回数制限（メッセージ/10分）、0は無制限、デフォルト：10",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_PER_MINUTE_ALL"]:
      "全体サイトの発言頻度制限（件/10分間）、0は制限なし、デフォルト：10",

    ["ADMIN_CONFIG_ITEM" + "_LIMIT_LENGTH"]: "コメント長さの制限、0は無制限、デフォルト：500",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_SUBJECT"]:
      "カスタム通知メールの件名、空白の場合はデフォルトの件名を使用します。",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_SUBJECT_ADMIN"]:
      "カスタムブロガー通知メールの件名、空白の場合はデフォルトの件名を使用します。",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_TEMPLATE"]:
      "カスタム通知メールテンプレート、空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${PARENT_NICK}、${PARENT_COMMENT}、${NICK}、${COMMENT}、${POST_URL}、${IMG}、${PARENT_IMG}",

    ["ADMIN_CONFIG_ITEM" + "_MAIL_TEMPLATE_ADMIN"]:
      "カスタムブロガー通知メールテンプレート、空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${NICK}、${COMMENT}、${POST_URL}、${IP}、${MAIL}、${IMG}",

    ["ADMIN_CONFIG_ITEM" + "_MASTER_TAG"]:
      'ブロガー識別カスタムテキスト、デフォルトは "ブロガー"',

    ["ADMIN_CONFIG_ITEM" + "_NOTIFY_SPAM"]:
      "スパムコメントの通知を送信するかどうか、デフォルト：true",

    ["ADMIN_CONFIG_ITEM" + "_QCLOUD_SECRET_ID"]:
      "Tencent CloudのシークレットID、スパムコメントの検出に使用されます。同時にTencent CloudとAkismetを設定した場合、Tencent Cloudのみが有効になります。登録：https://twikoo.js.org/cms.html",

    ["ADMIN_CONFIG_ITEM" + "_QCLOUD_SECRET_KEY"]: "Tencent Cloudのシークレットキー",

    ["ADMIN_CONFIG_ITEM" +
    "_PUSHOO_CHANNEL"]: `即時メッセージプッシュプラットフォームの名前、サポート：'qmsg',
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
    'feishu' など`,

    ["ADMIN_CONFIG_ITEM" + "_PUSHOO_TOKEN"]:
      "即時メッセージプッシュトークン。詳細な設定については、https://pushoo.js.org の説明をご覧ください",

    ["ADMIN_CONFIG_ITEM" + "_DISPLAYED_FIELDS"]:
      "画面に表示される入力欄、デフォルト：nick,mail,link",

    ["ADMIN_CONFIG_ITEM" + "_REQUIRED_FIELDS"]:
      "コメント必須情報、すべての必須情報にはnick,mail,linkに設定、すべての任意情報にはnoneに設定、デフォルト：nick,mail",

    ["ADMIN_CONFIG_ITEM" + "_SC_MAIL_NOTIFY"]:
      "ブロガーにIMとEメールで同時に通知するかどうか、デフォルトはIMのみで通知、デフォルト：false",

    ["ADMIN_CONFIG_ITEM" + "_SENDER_EMAIL"]:
      "電子メール通知の電子メールアドレス。 ほとんどのメールボックス・プロバイダでは、SENDER_EMAILはSMTP_USERと同じでなければなりません。",
    ["ADMIN_CONFIG_ITEM" + "_SENDER_NAME"]: "メール通知のタイトル",

    ["ADMIN_CONFIG_ITEM" + "_SHOW_EMOTION"]: "顔文字の挿入を有効にする、デフォルト：true",

    ["ADMIN_CONFIG_ITEM" + "_SHOW_IMAGE"]: "画像挿入機能を有効にする、デフォルト：true",

    ["ADMIN_CONFIG_ITEM" + "_SHOW_UA"]:
      "ユーザーシステムとブラウザーを表示するかどうか、デフォルトは：true",

    ["ADMIN_CONFIG_ITEM" + "_SHOW_REGION"]:
      "ユーザーIPの所在地（省）を表示するかどうか、不正確の可能性があり、IPv6はサポートされていません、デフォルトは：false",

    ["ADMIN_CONFIG_ITEM" + "_SITE_NAME"]: "ウェブサイト名",
    ["ADMIN_CONFIG_ITEM" + "_SITE_URL"]: "ウェブサイトのアドレス",

    ["ADMIN_CONFIG_ITEM" + "_SMTP_HOST"]:
      "カスタムSMTPサーバのアドレス。 SMTP_SERVICEを設定している場合は空白のままにします。",

    ["ADMIN_CONFIG_ITEM" + "_SMTP_PASS"]:
      "メール通知のメールボックスパスワード、QQ、163メールは認証コードを入力してください",

    ["ADMIN_CONFIG_ITEM" + "_SMTP_PORT"]:
      "カスタムSMTPポート。 SMTP_SERVICEを設定している場合は、空白のままにします。",

    ["ADMIN_CONFIG_ITEM" + "_SMTP_SECURE"]:
      "SMTPがTLSを使用するかどうかをカスタマイズします。trueまたはfalseを記入してください。SMTP_SERVICEを設定している場合は、この項目を空白にしてください。",

    ["ADMIN_CONFIG_ITEM" +
    "_SMTP_SERVICE"]: `メール通知メールボックスサービスプロバイダ。 サポート: '126',
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
    'qiye.aliyun'.`,

    ["ADMIN_CONFIG_ITEM" + "_SMTP_USER"]: "メール通知のメールボックスユーザー名。",

    ADMIN_CONFIG_RESET: "リセット",
    ADMIN_CONFIG_SAVE: "保存",
    ADMIN_CREDENTIALS: "秘密鍵ファイル",

    ADMIN_CREDENTIALS_FAQ: "秘密鍵を取得する方法",

    ADMIN_CREDENTIALS_PLACEHOLDER: "秘密鍵ファイルの内容を貼り付けてください",

    ADMIN_FORGOT: "パスワードを忘れた",

    ADMIN_EXPORT: "エクスポート",
    ADMIN_EXPORT_WARN:
      "すべてのデータをJSONファイルとしてエクスポートします。コメントが多く、エクスポートに失敗したりデータが欠落している場合は、データベースに手動で接続してエクスポートしてください",
    ADMIN_EXPORT_COMMENT: "コメントをエクスポート",

    ADMIN_EXPORT_COUNTER: "ページビューをエクスポート",

    ["ADMIN_IMPORT"]: "インポート",
    ["ADMIN_IMPORT" + "_FILE_REQUIRED"]: "ファイルが選択されていません",

    ["ADMIN_IMPORT" + "_IMPORTED"]: "インポート完了 ",

    ["ADMIN_IMPORT" + "_IMPORTING"]: "インポートを開始 ",

    ["ADMIN_IMPORT" + "_LOG"]: "システムログ",
    ["ADMIN_IMPORT" + "_SELECT"]: "選択してください",

    ["ADMIN_IMPORT" + "_SELECT_FILE"]: "ファイルを選択",

    ["ADMIN_IMPORT" + "_SELECT_SOURCE"]: "ソースシステムを選択",

    ["ADMIN_IMPORT" + "_SOURCE_REQUIRED"]: "ソースシステムが選択されていません",

    ["ADMIN_IMPORT" + "_START"]: "インポートを開始",

    ["ADMIN_IMPORT" + "_STARTING"]: "インポート中です",

    ["ADMIN_IMPORT" + "_TIP_ARTALK"]:
      "通常comments.data.jsonという名前のJSON形式のArtalkエクスポートファイルをアップロードしてください",
    ["ADMIN_IMPORT" + "_TIP_DISQUS"]:
      "DisqusエクスポートファイルをXML形式でアップロードしてください。ファイル名は通常、[サイト名]-[エクスポート時間]-all.xmlです。",

    ["ADMIN_IMPORT" + "_TIP_VALINE"]:
      "通常Comment.jsonという名前のJSON形式のValineエクスポートファイルをアップロードしてください。",

    ["ADMIN_IMPORT" + "_UPLOADED"]: "アップロード完了",

    ["ADMIN_IMPORT" + "_UPLOADING"]: "すでにアップロードされています",
    ["ADMIN_IMPORT" + "_WARN"]:
      "他のレビューシステムのバックアップファイルからのレビューのインポートに対応。 \nデータは安全で、インポート機能はすべてクラウド環境で実行されます。 \nインポート前にコメントデータベースをバックアップすることを推奨します。",

    ADMIN_LOGIN: "ログイン",

    ADMIN_LOGIN_TITLE: "Twikoo コメント管理",

    ADMIN_LOGOUT: "ログアウト",

    ADMIN_NEED_UPDATE:
      "コメント管理を使用するには、Twikoo クラウド関数を更新してください",

    ADMIN_PASSWORD: "パスワード",

    ADMIN_PASSWORD_PLACEHOLDER: "入力してください",

    ADMIN_PASSWORD_REQUIRED: "パスワードを入力してください",

    ADMIN_REGIST: "登録",

    ADMIN_REGIST_FAILED: "登録に失敗しました",

    ADMIN_SET_PASSWORD: "パスワードの設定",

    ADMIN_SET_PASSWORD_CONFIRM: "パスワードの確認",

    ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER: "パスワードの確認",

    ADMIN_SET_PASSWORD_PLACEHOLDER: "パスワード",

    ADMIN_TITLE: "Twikoo管理パネル",

    COMMENTS_COUNT_SUFFIX: " 件のコメント",

    COMMENTS_EXPAND: "もっと見る",

    COMMENTS_NO_COMMENTS: "コメントなし",

    COMMENT_EXPAND: "コメントを展開する",

    COMMENT_COLLAPSE: "コメントを折りたたむ",

    COMMENT_MASTER_TAG: "管理者",

    COMMENT_REPLIED: "返信",
    COMMENT_REVIEWING_TAG: "検討中",

    COMMENT_TOP_TAG: "トップに固定",

    COMMENT_FAILED: "コメント失敗",

    META_INPUT_LINK: "ウェブサイト",

    META_INPUT_MAIL: "受信箱",
    META_INPUT_NICK: "ネットネーム",

    META_INPUT_NOT_REQUIRED: "任意",

    META_INPUT_REQUIRED: "必須項目",

    PAGINATION_COUNT_PREFIX: "合計 ",
    PAGINATION_COUNT_SUFFIX: " 件",

    PAGINATION_GOTO_PREFIX: "ページに移動",

    PAGINATION_GOTO_SUFFIX: "ページ",
    PAGINATION_PAGESIZE: "件/ページ",

    SUBMIT_CANCEL: "キャンセル",

    SUBMIT_PREVIEW: "プレビュー",

    SUBMIT_SEND: "送信",
    IMAGE_UPLOAD_PLACEHOLDER: "画像のアップロード中",

    IMAGE_UPLOAD_FAILED: "画像のアップロード失敗",

    IMAGE_UPLOAD_FAILED_NO_CONF: "管理者がイメージサービスを設定していない",

    IMAGE_UPLOAD_PLEASE_WAIT: "写真はアップロード中です",

    SUBMIT_SENDING: "送信中",

    TIMEAGO_DAYS: "日前",
    TIMEAGO_HOURS: "時間前",

    TIMEAGO_MINUTES: "分前",

    TIMEAGO_NOW: "たった今",
    TIMEAGO_SECONDS: "秒前",
  },
};
