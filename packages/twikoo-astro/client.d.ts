declare global{
    namespace globalThis{
        var $twikoo:$twikooGlobal
        var cloudbase:any
    }
}
type loginOrigin={
    isLogin:boolean,
    token?:string,
    expiresIn?:string
}
export type $twikooGlobal={
    /**
     * 是否需要登录
     */
    needLogin:boolean
    /**
     * 登录数据源
     * @returns {loginOrigin}
     */
    loginOrigin:()=>loginOrigin
    /**
     * 登录事件
     * @returns 
     */
    loginEvent:()=>void
    /**
     * 日志器
     * @returns 
     */
    logger:()=>void
}
