<template>
    <div  class="twikoo" ref="twikoo">
        <TkComments v-if="$props.envId" @admin="showAdmin = true" :show-admin-entry="showAdminEntry" />
        <TkFooter />
        <TkAdmin v-if="$props.envId" :show="showAdmin" @close="showAdmin = false" />
    </div>
</template>

<script setup>
import { install } from "./utils/tcb";
import { zhCn } from "@astro-twikoo/locale";
import TkComments from "./components/TkComments.vue";
import TkFooter from "./components/TkFooter.vue";
import TkAdmin from "./components/TkAdmin.vue";
import { setLanguage, logger, isUrl } from './utils'
import { onMounted, provide, ref } from "vue";
import { initOwoData, tcbStore, twikooStore,$twikooOauthStore } from "./store"
import mitt from "mitt"

const showAdmin = ref(false);

defineOptions({
    options:'twikooApp',
})

const props = defineProps({
    envId: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        default: () => 'ap-shanghai'
    },
    path: {
        type: String,
        default: () => 'location.pathname'
    },
    lang: {
        type: String,
        default: () => 'zh-CN'
    },
    locale: {
        type: Object,
        default: zhCn
    },
    renderer:{
    },
    enableAvatar:{
        type:Boolean
    },
    prerenderComments:{
    }
})

const options = { envId: props.envId, region: props.region, path: props.path, lang: props.lang,enableAvatar:props.enableAvatar }
const tcb = isUrl(props.envId) ? null : await initTcb({})
tcbStore.set(tcb)
setLanguage(options)
twikooStore.set(options)
const eventBus=new mitt()
const showAdminEntry=ref(false)
async function initTcb() {
    if (typeof window.cloudbase === 'undefined') {
        logger.error('Please import cloudbase firstly:\n<script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js"\></script\>')
        return null
    }
    /* eslint-disable-next-line no-undef */
    return await install(cloudbase, options)
}
function onShowAdminEntry(v) {
    showAdminEntry.value = v;
}
provide('onShowAdminEntry',onShowAdminEntry)
provide('$mitt',eventBus)
provide('prerenderComments',props.prerenderComments)

eventBus.on("oauth",async()=>{
    if(globalThis.$twikoo&&typeof globalThis.$twikoo.loginEvent=='function'){
        globalThis.$twikoo.loginEvent()
    }
    if(globalThis.$twikoo&&typeof globalThis.$twikoo.loginOrigin=='function'){
        $twikooOauthStore.setKey('isLogin',(await globalThis.$twikoo.loginOrigin()).isLogin)
    }
    
})
onMounted(async () => {
    await initOwoData()
    if(globalThis.$twikoo&&typeof globalThis.$twikoo.needLogin){
        twikooStore.setKey('needLogin',globalThis.$twikoo.needLogin)
    }
    if(globalThis.$twikoo&&typeof globalThis.$twikoo.loginOrigin=='function'){
        $twikooOauthStore.setKey('isLogin',(await globalThis.$twikoo.loginOrigin()).isLogin)
    }
});
</script>

<style>
@import url("vant/es/style/css-variables.css");
@import url("vant/es/button/index.css");
@import url("./lib/owo.css");
@import url("./var.css");
@import url("./style.css");
@import url("element-plus/theme-chalk/el-var.css");
@import url("element-plus/theme-chalk/el-icon.css");
/* @import url("element-plus/theme-chalk/el-button.css"); */
@import url("element-plus/theme-chalk/el-input.css");
@import url("element-plus/theme-chalk/el-loading.css");


.twikoo {
    position: relative;
}

.twikoo svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

/* 全局 CSS */
.tk-expand {
    width: 100%;
    cursor: pointer;
    padding: 0.75em;
    text-align: center;
    transition: all 0.5s;
}

.tk-expand:hover {
    background-color: rgba(0, 0, 0, 0.13);
}

.tk-expand:active {
    background-color: rgba(0, 0, 0, 0.19);
}

.tk-content img {
    max-width: 300px;
    max-height: 300px;
    vertical-align: middle;
}

.tk-owo-emotion,
.twikoo .OwO-item img {
    width: 3em;
    height: auto;
}

.twikoo .el-loading-mask {
    background-color: transparent;
    backdrop-filter: opacity(20%);
}

.twikoo .el-textarea .el-input__count {
    color: currentColor;
    background: transparent;
}

.tk-admin-warn {
    padding: 1rem 1.5rem;
    background-color: #fff7d0;
    border-left: 0.5rem solid #e7c000;
    color: #6b5900;
    align-self: stretch;
}
</style>
