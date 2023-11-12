<template>
    <div class="tk-admin-container">
        <div class="tk-admin" :class="{ '__show': show }" v-loading="loading">
            <a class="tk-admin-close" @click="onClose" v-html="iconClose"></a>
            <div class="tk-login-title" v-if="needUpdate">
                <div>{{ t('ADMIN_NEED_UPDATE') }}</div>
                <a href="https://twikoo.js.org/update.html" target="_blank">https://twikoo.js.org/update.html</a>
            </div>
            <div v-if="!needUpdate">
                <div class="tk-login" v-if="!isLogin && isSetPassword">
                    <div class="tk-login-title">{{ t('ADMIN_LOGIN_TITLE') }}</div>
                    <input type="hidden" />
                    <ElInput class="tk-password" :placeholder="t('ADMIN_PASSWORD_PLACEHOLDER')" v-model="password"
                        show-password @keyup.enter.native="onLogin" ref="focusmeRef">
                        <template v-slot:prepend>{{ t('ADMIN_PASSWORD') }}</template>
                        <template v-slot:append>
                            <ElButton @click="onLogin">{{ t('ADMIN_LOGIN') }}</ElButton>
                        </template>

                    </ElInput>
                    <div class="tk-login-msg" v-if="loginErrorMessage">
                        {{ loginErrorMessage }}
                        <a href="https://twikoo.js.org/faq.html" rel="noopener noreferrer" target="_blank">{{
                            t('ADMIN_FORGOT') }}</a>
                    </div>
                </div>
                <div class="tk-regist" v-if="!isLogin && !isSetPassword">
                    <div class="tk-login-title">{{ t('ADMIN_LOGIN_TITLE') }}</div>
                    <ElInput class="tk-password" :placeholder="t('ADMIN_CREDENTIALS_PLACEHOLDER')" v-if="!isSetCredentials"
                        v-model="credentials" ref="focusmeRef">
                        <template v-slot:prepend>{{ t('ADMIN_CREDENTIALS') }}</template>
                    </ElInput>
                    <ElInput class="tk-password" :placeholder="t('ADMIN_SET_PASSWORD_PLACEHOLDER')" v-model="password"
                        show-password>
                        <template v-slot:prepend>{{ t('ADMIN_SET_PASSWORD') }}</template>
                    </ElInput>
                    <ElInput class="tk-password" :placeholder="t('ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER')"
                        v-model="passwordConfirm" show-password>
                        <template v-slot:prepend>{{ t('ADMIN_SET_PASSWORD_CONFIRM') }}</template>
                    </ElInput>
                    <ElButton class="tk-regist-button" :disabled="!canRegist" @click="onRegist">{{ t('ADMIN_REGIST') }}
                    </ElButton>
                    <div class="tk-login-msg" v-if="loginErrorMessage">{{ loginErrorMessage }}</div>
                    <div class="tk-login-msg" v-if="!isSetCredentials">
                        <a href="https://twikoo.js.org/faq.html" rel="noopener noreferrer" target="_blank">{{
                            t('ADMIN_CREDENTIALS_FAQ') }}</a>
                    </div>
                </div>
                <div class="tk-panel" v-if="isLogin">
                    <div class="tk-panel-title">
                        <div>{{ t('ADMIN_TITLE') }}</div>
                        <a class="tk-panel-logout" @click="onLogout">{{ t('ADMIN_LOGOUT') }}</a>
                    </div>
                    <div class="tk-tabs">
                        <div class="tk-tab" :class="{ __active: activeTabName === 'comment' }"
                            @click="activeTabName = 'comment'">{{ t('ADMIN_COMMENT') }}</div>
                        <div class="tk-tab" :class="{ __active: activeTabName === 'config' }"
                            @click="activeTabName = 'config'">{{ t('ADMIN_CONFIG') }}</div>
                        <div class="tk-tab" :class="{ __active: activeTabName === 'import' }"
                            @click="activeTabName = 'import'">{{ t('ADMIN_IMPORT') }}</div>
                        <div class="tk-tab" :class="{ __active: activeTabName === 'export' }"
                            @click="activeTabName = 'export'">{{ t('ADMIN_EXPORT') }}</div>
                    </div>
                    <TkAdminComment v-show="activeTabName === 'comment'" />
                    <TkAdminConfig v-show="activeTabName === 'config'" />
                    <TkAdminImport v-show="activeTabName === 'import'" />
                    <TkAdminExport v-show="activeTabName === 'export'" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ElButton, ElInput, ElLoading } from 'element-plus'
import md5 from 'blueimp-md5'
import TkAdminComment from './TkAdminComment.vue'
import TkAdminConfig from './TkAdminConfig.vue'
import TkAdminImport from './TkAdminImport.vue'
import TkAdminExport from './TkAdminExport.vue'
import t from '../utils/i18n'
import { logger, call } from '../utils'
import iconClose from '@fortawesome/fontawesome-free/svgs/solid/times.svg?raw'
import { tcbStore } from '../store'
import { computed, ref } from 'vue'

const props = defineProps({
    show: Boolean
})

const focusmeRef = ref()
const loading = ref(true)
const version = ref('')
const needUpdate = ref(false)
const isLogin = ref(false)
const isSetPassword = ref(true)
const isSetCredentials = ref(false)
const credentials = ref('')
const password = ref('')
const passwordConfirm = ref('')
const loginErrorMessage = ref('')
const activeTabName = ref('comment')

const canRegist = computed(() => {
    return !this.isSetPassword &&
        !!this.password &&
        this.password === this.passwordConfirm &&
        (this.isSetCredentials || this.credentials)
})

const emit = defineEmits(['close'])

async function onLogin() {
    if (!password.value) {
        loginErrorMessage.value = t('ADMIN_PASSWORD_REQUIRED')
        return
    }
    loading.value = true
    loginErrorMessage.value = ''
    const passwordMd5 = md5(this.password)
    const res = await call(tcbStore.get(), 'LOGIN', {
        password: passwordMd5
    })
    if (res.result.message) {
        loginErrorMessage.value = res.result.message
    } else if (res.result.ticket) {
        try {
            await tcbStore.get().auth
                .customAuthProvider()
                .signIn(res.result.ticket)
            logger.log('登录成功')
            password.value = ''
            checkAuth()
        } catch (err) {
            logger.error('登录失败', err)
        }
    } else if (res.result.code === 0) {
        logger.log('登录成功')
        localStorage.setItem('twikoo-access-token', passwordMd5)
        password.value = ''
        checkAuth()
    }
    loading.value = false
}
async function onLogout() {
    loading.value = true
    if (tcbStore.get()) {
        await tcbStore.get().auth.signOut()
        await tcbStore.get().auth
            .anonymousAuthProvider()
            .signIn()
    } else {
        localStorage.removeItem('twikoo-access-token')
    }
    isLogin.value = false
    loading.value = false
}
async function onRegist() {
    loading.value = true
    const passwordMd5 = md5(password.value)
    const res = await call(tcbStore.get(), 'SET_PASSWORD', {
        password: passwordMd5,
        credentials: this.credentials
    })
    if (!res.result.code) {
        password.value = ''
        isSetPassword.value = true
        onLogin()
    } else {
        loginErrorMessage.value = t('ADMIN_REGIST_FAILED')
        if (res.result.message) {
            loginErrorMessage.value += '，' + res.result.message
        }
        logger.warn('Twikoo 注册失败', res)
    }
    loading.value = false
}
async function onShow() {
    loading.value = true
    await this.checkAuth()
    if (!this.isLogin) {
        await checkIfPasswordSet()
        focusPassword()
    }
    loading.value = false
}
function focusPassword() {
    // 聚焦密码输入框
    setTimeout(() => {
        focusmeRef.value && focusmeRef.value.focus()
    }, 500)
}
async function checkAuth() {
    // 检查用户身份

    if (tcbStore.get()) {
        const currentUser = await tcbStore.get().auth.getCurrenUser()
        isLogin.value = currentUser.loginType === 'CUSTOM'
    } else {
        const result = await call(tcbStore.get(), 'GET_CONFIG')
        if (result && result.result && result.result.config) {
            isLogin.value = result.result.config.IS_ADMIN
        }
    }
}
async function checkIfPasswordSet() {
    // 检查是否设置过密码
    try {
        const res = await call(tcbStore.get(), 'GET_PASSWORD_STATUS')
        version.value = res.result.version
        isSetPassword.value = res.result.status
        isSetCredentials.value = !tcbStore.get()
    } catch (e) {
        needUpdate.value = true
        loading.value = false
        throw e
    }
}
function onClose() {
    emit('close')
}

</script>

<!-- <script>
import { ElButton, ElInput, ElLoading } from 'element-plus'
import md5 from 'blueimp-md5'
import TkAdminComment from './TkAdminComment.vue'
import TkAdminConfig from './TkAdminConfig.vue'
import TkAdminImport from './TkAdminImport.vue'
import TkAdminExport from './TkAdminExport.vue'
import t from '../utils/i18n'
import { logger, call } from '../utils'
import iconClose from '@fortawesome/fontawesome-free/svgs/solid/times.svg?raw'
import { tcbStore } from '../store'

export default {
    components: {
        ElButton, ElInput,
        TkAdminComment,
        TkAdminConfig,
        TkAdminImport,
        TkAdminExport
    },
    directives: {
        "Loading": ElLoading.directive,
    },
    props: {
        show: Boolean
    },
    data () {
        return {
            iconClose,
            loading: true,
            version: '',
            needUpdate: false,
            isLogin: false,
            isSetPassword: true,
            isSetCredentials: false,
            credentials: '',
            password: '',
            passwordConfirm: '',
            loginErrorMessage: '',
            activeTabName: 'comment'
        }
    },
    computed: {
        canRegist () {
            return !this.isSetPassword &&
                !!this.password &&
                this.password === this.passwordConfirm &&
                (this.isSetCredentials || this.credentials)
        }
    },
    methods: {
        t,
        async onLogin () {
            if (!this.password) {
                this.loginErrorMessage = t('ADMIN_PASSWORD_REQUIRED')
                return
            }
            this.loading = true
            this.loginErrorMessage = ''
            const passwordMd5 = md5(this.password)
            const res = await call(tcbStore.get(), 'LOGIN', {
                password: passwordMd5
            })
            if (res.result.message) {
                this.loginErrorMessage = res.result.message
            } else if (res.result.ticket) {
                try {
                    await tcbStore.get().auth
                        .customAuthProvider()
                        .signIn(res.result.ticket)
                    logger.log('登录成功')
                    this.password = ''
                    this.checkAuth()
                } catch (err) {
                    logger.error('登录失败', err)
                }
            } else if (res.result.code === 0) {
                logger.log('登录成功')
                localStorage.setItem('twikoo-access-token', passwordMd5)
                this.password = ''
                this.checkAuth()
            }
            this.loading = false
        },
        async onLogout () {
            this.loading = true
            if (tcbStore.get()) {
                await tcbStore.get().auth.signOut()
                await tcbStore.get().auth
                    .anonymousAuthProvider()
                    .signIn()
            } else {
                localStorage.removeItem('twikoo-access-token')
            }
            this.isLogin = false
            this.loading = false
        },
        async onRegist () {
            this.loading = true
            const passwordMd5 = md5(this.password)
            const res = await call(tcbStore.get(), 'SET_PASSWORD', {
                password: passwordMd5,
                credentials: this.credentials
            })
            if (!res.result.code) {
                this.passwordMd5 = ''
                this.isSetPassword = true
                this.onLogin()
            } else {
                this.loginErrorMessage = t('ADMIN_REGIST_FAILED')
                if (res.result.message) {
                    this.loginErrorMessage += '，' + res.result.message
                }
                logger.warn('Twikoo 注册失败', res)
            }
            this.loading = false
        },
        async onShow () {
            this.loading = true
            await this.checkAuth()
            if (!this.isLogin) {
                await this.checkIfPasswordSet()
                this.focusPassword()
            }
            this.loading = false
        },
        focusPassword () {
            // 聚焦密码输入框
            setTimeout(() => {
                this.$refs.focusme && this.$refs.focusme.focus()
            }, 500)
        },
        async checkAuth () {
            // 检查用户身份
            
            if (tcbStore.get()) {
                const currentUser = await tcbStore.get().auth.getCurrenUser()
                this.isLogin = currentUser.loginType === 'CUSTOM'
            } else {
                const result = await call(tcbStore.get(), 'GET_CONFIG')
                if (result && result.result && result.result.config) {
                    this.isLogin = result.result.config.IS_ADMIN
                }
            }
        },
        async checkIfPasswordSet () {
            // 检查是否设置过密码
            try {
                const res = await call(tcbStore.get(), 'GET_PASSWORD_STATUS')
                this.version = res.result.version
                this.isSetPassword = res.result.status
                this.isSetCredentials = !tcbStore.get()
            } catch (e) {
                this.needUpdate = true
                this.loading = false
                throw e
            }
        },
        onClose () {
            this.$emit('close')
        }
    },
    watch: {
        show (val) {
            // 弹出管理面板
            if (val) this.onShow()
        }
    }
}
</script> -->
  
<style>
.tk-admin-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

.tk-admin {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    pointer-events: all;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(5px);
    transition: all 0.5s ease;
    visibility: hidden;
}

.tk-admin::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}

.tk-admin::-webkit-scrollbar-track {
    background-color: transparent;
}

.tk-admin::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.31);
}

.tk-admin.__show {
    left: 0;
    visibility: visible;
}

.tk-admin-close {
    position: sticky;
    float: right;
    display: block;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    box-sizing: content-box;
    color: #ffffff;
}

.tk-login,
.tk-regist {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
}

.tk-login-title {
    color: #ffffff;
    font-size: 1.25rem;
    text-align: center;
    margin-top: 10rem;
}

.tk-password,
.tk-login-msg {
    color: #ffffff;
    width: 80%;
    text-align: center;
    margin-top: 1rem;
}

.tk-password .el-input__inner {
    min-width: 100px;
}

.tk-login-msg a {
    color: #ffffff;
    margin-left: 1em;
    text-decoration: underline;
}

.tk-regist-button {
    margin-top: 1rem;
}

.tk-panel {
    color: #ffffff;
    padding: 2rem;
}

.tk-panel-title {
    font-size: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.tk-panel-logout {
    color: #ffffff;
    font-size: 1rem;
    text-decoration: underline;
}

.tk-panel .tk-tabs {
    display: flex;
    margin-bottom: 1em;
    border-bottom: 2px solid #c0c4cc;
}

.tk-panel .tk-tab {
    color: #c0c4cc;
    cursor: pointer;
    line-height: 2em;
    margin-right: 2em;
    margin-bottom: -2px;
}

.tk-panel .tk-tab.__active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
}
</style>