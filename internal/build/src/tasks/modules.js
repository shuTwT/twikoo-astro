import glob from 'fast-glob'
import {build}from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import { pkgDir } from '../../gulpfile.js'
import { writeBundles } from '../utils/rollup.js'
import buildConfig from '../../build.config.js'
export const buildModules=async ()=>{
    const input=excludeFiles(
        await glob('**/*.{js,ts,vue}',{
            cwd:pkgDir,
            absolute:true,
            onlyFiles:true
        })
    )
    const bundle=await build({
        plugins:[ vuePlugin()],
        build:{
            rollupOptions:{
                input,
            }
        }
    })
    
}