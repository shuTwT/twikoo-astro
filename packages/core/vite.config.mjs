import { defineConfig } from "vite"
import path from "node:path"
import VueMacros from "unplugin-vue-macros/vite"
import Vue from "@vitejs/plugin-vue"
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
        })
    ],
    build: {
        minify: false,
        rollupOptions: {
            external: [
                'vue',
                'jsdom',
                'prismjs',
                'prismjs/plugins/autoloader/prism-autoloader',
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