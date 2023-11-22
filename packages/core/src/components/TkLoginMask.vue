<template>
    <div class="tk-login-mask">
        <div class="mask-bg"></div>
        <div class="msg">博主设置了登录才能留言</div>
        <button class="login-btn" @click="()=>handleLogin()">去登录</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const eventBus=inject('$mitt')
function handleLogin(){
    eventBus.emit('login')
}
</script>

<style  scoped>
.tk-login-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 275px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.mask-bg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--twikoo-mask-bg,rgba(255,255,255,0.6));
    -webkit-filter: saturate(180%) blur(10px);
    filter: saturate(180%) blur(10px);
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    backdrop-filter: saturate(180%) blur(10px);
    z-index: 1;
}
.tk-login-mask .msg{
    z-index: 2;
}
.tk-login-mask .login-btn{
    outline: none;
    background-color: var(--twikoo-font-color);
    color: var(--twikoo-background);
    border: none;
    padding: 10px;
    border-radius: 12px;
    z-index: 2;
}
.tk-login-mask .login-btn:active{
    transform: translateY(1px);
}
</style>