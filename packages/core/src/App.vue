<template>
    <div id="twikoo" class="twikoo" ref="twikoo">
        <TkComments v-if="$props.envId" @admin="showAdmin = true" :show-admin-entry="showAdminEntry" />
        <TkFooter />
        <TkAdmin v-if="$props.envId" :show="showAdmin" @close="showAdmin = false" />
    </div>
</template>

<script setup>
import { en } from "@astro-twikoo/locale";
import TkComments from "./components/TkComments.vue";
import TkFooter from "./components/TkFooter.vue";
import TkAdmin from "./components/TkAdmin.vue";
import { setLanguage, logger, isUrl } from './utils'
import { onMounted, provide, ref } from "vue";
import { tcbStore, twikooStore } from "./store"
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
        default: en
    }

})

const options = { envId: props.envId, region: props.region, path: props.path, lang: props.lang }
const tcb = isUrl(props.envId) ? null : await initTcb({})
tcbStore.set(tcb)
setLanguage(options)
twikooStore.set(options)

async function initTcb() {
    if (typeof window.cloudbase === 'undefined') {
        logger.error('Please import cloudbase firstly:\n<script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js"\></script\>')
        return null
    }
    /* eslint-disable-next-line no-undef */
    return await install(cloudbase, options)
}

const showAdminEntry=ref(false)
function onShowAdminEntry(v) {
    showAdminEntry.value = v;
}
provide('onShowAdminEntry',onShowAdminEntry)
provide('$mitt',new mitt())
onMounted(() => {
    console.log(tcbStore)
});
</script>

<style>
@import url("./lib/owo.css");
@import url("./var.css");
@import url("element-plus/theme-chalk/el-var.css");
/* @import url("element-plus/theme-chalk/el-icon.css"); */
@import url("element-plus/theme-chalk/el-button.css");
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

/* element-ui overwrite */
.twikoo .el-input__inner,
.twikoo .el-textarea__inner {
    color: var(--twikoo-font-color,#606266);
    background-color: var(--twikoo-input-bg,transparent);
    box-shadow: none;
}

.twikoo .el-input__inner:hover,
.twikoo .el-textarea__inner:hover {
    border-color: rgba(144, 147, 153, 0.5);
}

.twikoo .el-input__inner:focus,
.twikoo .el-textarea__inner:focus {
    border-color: #409eff;
}

.twikoo .el-input-group__append,
.twikoo .el-input-group__prepend {
    color: currentColor;
    background-clip: padding-box;
    background-color: rgba(144, 147, 153, 0.13);
    border-color: rgba(144, 147, 153, 0.31);
}

.twikoo .el-button:not(.el-button--primary):not(.el-button--text) {
    color: currentColor;
    background-color: var(--twikoo-input-bg,rgba(144, 147, 153, 0.063));
    border-color: var(--twikoo-border-color,rgba(144, 147, 153, 0.31));
}

.twikoo .el-button:not(.el-button--primary):not(.el-button--text):active,
.twikoo .el-button:not(.el-button--primary):not(.el-button--text):focus,
.twikoo .el-button:not(.el-button--primary):not(.el-button--text):hover {
    color: #409eff;
    background-color: rgba(64, 158, 255, 0.063);
    border-color: rgba(64, 158, 255, 0.5);
}

.twikoo .el-button--primary.is-disabled,
.twikoo .el-button--primary.is-disabled:active,
.twikoo .el-button--primary.is-disabled:focus,
.twikoo .el-button--primary.is-disabled:hover {
    color: var(--twikoo-font-color,rgba(255, 255, 255, 0.63));
    background-color: rgba(64, 158, 255, 0.5);
    border-color: transparent;
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
.twikoo .el-button{
    color: var(--twikoo-button-font-color-white,#fff);
    background-color: var(--twikoo-font-color);
}
.twikoo .el-button:active,
.twikoo .el-button:focus,
.twikoo .el-button:hover{
    color: var(--twikoo-button-font-color-white,#fff);
    background-color: var(--twikoo-primary-color);
}
</style>
