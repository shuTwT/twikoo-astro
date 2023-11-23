import {defineConfig} from 'tsup'
import packageJson from './package.json' assert { type : 'json' }

export default defineConfig({
    entry:['./lang/en.ts','./lang/zh-cn.ts'],
    format:['esm'],
    dts:false,
    splitting:false,
    sourcemap:false,
    clean:true,
    minify:false,
    banner:{
        js:`/*!
* locale v${packageJson.version}
*/`
    },
    outDir:"dist"
})
