import { defineConfig } from "vite"
import path from "node:path"
import vue from "@vitejs/plugin-vue"
import {visualizer} from "rollup-plugin-visualizer"

export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            gzipSize: true,
            brotliSize: true,
            emitFile: false,
            filename: "test.html",
            open: true
        })
    ],
    build: {
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'jsdom',
                'prismjs',
                'prismjs/plugins/autoloader/prism-autoloader'
            ],
            output: [
                {
                    format: "es",
                    entryFileNames: "twikoo.mjs",
                    exports: "named",
                    dir: "es",
                    globals:{
                        vue:'Vue',
                    }
                },
                {
                    format: "cjs",
                    entryFileNames: "twikoo.cjs",
                    exports: "named",
                    dir: "lib",
                    globals:{
                        vue:'Vue'
                    }
                },
                {
                    format: "umd",
                    name: "twikoo",
                    entryFileNames: "twikoo.umd.js",
                    exports: "named",
                    dir: "dist",
                    globals:{
                        vue:'Vue'
                    }
                }
            ]
        },
        lib: {
            entry: 
                path.resolve(__dirname, "./src/main.js"),
        },
    }
})