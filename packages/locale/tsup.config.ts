import {defineConfig} from 'tsup'
import packageJson from './package.json' assert { type : 'json' }

export default defineConfig({
    entry:['./index.ts'],
    format:['esm'],
    dts:true,
    splitting:false,
    sourcemap:false,
    clean:true,
    minify:false,
    banner:{
        js:`/*!
* locale v${packageJson.version}
*/`
    },
    outDir:"../astro-twikoo/locale"
})
