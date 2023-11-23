import { defineConfig } from "vite"
import path from "node:path"
import VueMacros from "unplugin-vue-macros/vite"
import Vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import {visualizer} from "rollup-plugin-visualizer"

export default defineConfig({
    plugins: [
        VueMacros({
            plugins:{
                vue:Vue()
            }
        }),
        visualizer({
            gzipSize: true,
            brotliSize: true,
            emitFile: false,
            filename: "test.html",
            open: false
        }),
        dts()
    ],
    build: {
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'jsdom',
                'prismjs',
                'prismjs/plugins/autoloader/prism-autoloader',
                'lodash-es',
                'lodash-unified',
                'nanostores',
                '@nanostores/vue',
                'blueimp-md5',
                '@vueuse/core'
            ],
            output: [
                {
                    format: "es",
                    entryFileNames: "twikoo.mjs",
                    exports: "named",
                    dir: "es"
                },
                {
                    format: "cjs",
                    entryFileNames: "twikoo.cjs",
                    exports: "named",
                    dir: "lib"
                }
            ]
        },
        lib: {
            entry: 
                path.resolve(__dirname, "./src/main.js"),
        },
    }
})