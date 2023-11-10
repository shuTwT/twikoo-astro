/**
 * 
 * @returns  {import('astro').AstroIntegration}
 */
export default function twikoo(){
    return {
        name:'twikoo',
        hooks:{
            'astro:config:setup':({config,injectScript})=>{
                const envId= config.envId ?? ''
                const el=config.el ?? 'tcomment'
                const region=config.region ?? ''
                const path=config.path ?? ''
                const lang=config.lang ?? ''
                const twikooConfig=config.twikooConfig ?? {}
                
            }
        }
    }
}