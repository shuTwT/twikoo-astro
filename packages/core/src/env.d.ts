declare interface TwikooInitOptions{
    /**
     * 腾讯云环境填envId，其他填url
     */
    envId:string,
    /**
     * 地域
     * @default ap-shanghai
     */
    region?:string
    /**
     * 用于区分不同文章js路径
     * @default location.pathname
     */
    path?:string
    /**
     * 手动设置评论区语言
     * @default zh-CN
     */
    lang?:string
}