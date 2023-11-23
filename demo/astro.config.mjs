import fs from "node:fs"
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

const ssrTransformCustomDir = ()=>{
    return {
        props:[],
        needRuntime:true
    }
}

// https://astro.build/config
export default defineConfig({
    integrations: [
        vue({
          template:{
            compilerOptions:{
                directiveTransforms:{
                    'click-outside':ssrTransformCustomDir,
                    'clickoutside':ssrTransformCustomDir,
                    'loading':ssrTransformCustomDir
                },
              // 将所有带短横线的标签名都视为自定义元素
              //isCustomElement:(tag)=>tag.includes('-')
            }
          },
          //appEntrypoint:'/src/pages/_app'
        }),
    ],
    output: 'static',
});