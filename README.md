# twikoo

一个**简洁**、**安全**、**免费**的静态网站评论系统。

A **simple**, **safe**, **free** comment system.  

**简体中文** | [English](./README.en.md)

## 简介

这是一个[twikoo](https://github.com/twikoojs/twikoo)的魔改版，适配astro

**注意**：该仓库仅包含魔改版的前端，后端依旧为原版

更多详情请查看[原仓库](https://github.com/twikoojs/twikoo)

fork from **12f841f**

## 快速开始

安装

````shell
npm install twikoo-astro
# yarn add twikoo-astro
# pnpm add twikoo-astro
````

引入

````astro
---
import 'twikoo-astro/style/var.css'
import 'twikoo-astro/style/index.css'
import Twikoo from "twikoo-astro/components/Twikoo";
---
<!-- 在合适的地方 -->
<script>
window.$twikoo={
}
</script>
<Twikoo envId="http://localhost:8080">
<!-- 在合适的地方  -->
````

接下来，你需要一份twikoo后端服务，并将服务地址填入`envId`中

## 配置

````astro
<script>
    globalThis.$twikoo:{
    	needLogin:true,//需要登录
    	loginOrigin:()=>{isLogin:boolean,token,expiresIn},//登录数据源
    	loginEvent:()=>void//登录事件
    }
</script>
````

## 自定义主题覆盖

对var.css中的变量进行覆盖可以自定义主题

````
:root:not([data-theme=dark]) {
    --twikoo-input-bg: #f7f7f7;
    --twikoo-font-color: #363636;
    --twikoo-background: #fff;
    --twikoo-second-bg: #f7f8f9;
    --twikoo-button-font-color-white: #fff;
    --twikoo-button-font-color-black: #000;
    --twikoo-border-color: #e3e8f7;
    --twikoo-border: 1px solid #e3e8f7;
    --twikoo-shadow-border: 0 8px 16px -4px #00000050;
    --twikoo-mask-bg: rgba(255, 255, 255, 0.6);
    --twikoo-scrollbar: rgba(60, 60, 67, 0.4);
    --twikoo-color-lighttext: skyblue;
}
````

## 已完成

- [x] SSR适配
- [x] 再次点击回复按钮可关闭面板
- [x] 允许对接站点登录功能


## 待完成


- [ ] 进一步缩小体积
- [ ] 自定义语言覆盖
- [ ] css变量
- [ ] 自定义默认头像
- [ ] 增加一个选项，允许将有无index.html的情况一视同仁



## 预览

请clone项目到本地运行查看



## 许可

MIT License