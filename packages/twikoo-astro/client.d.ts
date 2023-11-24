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
    needLogin:boolean
    loginOrigin:()=>any
    loginEvent:()=>void
}
