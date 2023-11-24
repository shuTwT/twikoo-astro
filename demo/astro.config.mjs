import fs from "node:fs"
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import node from '@astrojs/node'
import gemoji from 'remark-gemoji';
import gfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
    integrations: [
        vue({
          template:{
            compilerOptions:{
                directiveTransforms:{
                },
              // 将所有带短横线的标签名都视为自定义元素
              isCustomElement:(tag)=>tag.includes('-')
            }
          },
          //appEntrypoint:'/src/pages/_app'
        }),
    ],
    output: 'server',
    build:{
        format:'directory'
    },
    markdown: {
        remarkPlugins:[
            gemoji,gfm
        ]
    },
    vite: {
        ssr: {
          noExternal: ['path-to-regexp'],
        },
      },
      adapter: node({
        mode: 'standalone'
    }),
});