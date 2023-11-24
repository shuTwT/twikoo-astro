<template>
  <div class="tk-footer">
    Powered by <a href="https://twikoo.js.org" target="_blank">Twikoo</a>
    v{{ version }}
  </div>
</template>
<script setup>
import { version } from '../version'
import { call, getUrl, getHref } from '../utils'
import { tcbStore, twikooStore } from "../store"
import { onMounted } from 'vue';

const counter = {}

async function getCounter() {
  const counterEl = document.getElementById('twikoo_visitors')
  if (!counterEl) return
  if (['localhost', '127.0.0.1', '0.0.0.0'].indexOf(window.location.hostname) !== -1) return
  const url = getUrl(twikooStore.get().path)
  const href = getHref(twikooStore.get().href)
  const result = await call(tcbStore.get(), 'COUNTER_GET', {
    url,
    href,
    title: document.title
  })
  counter.value = result.result
  if (counter.value.time || counter.value.time === 0) {
    counterEl.innerHTML = counter.value.time
  }
}

onMounted(()=>{
  getCounter()
})
</script>
  
<style scoped>
.tk-footer {
  width: 100%;
  text-align: end;
  font-size: 0.75em;
  color: #999999;
  margin-top: 1em;
}
.tk-footer a{
    background-color: transparent;
    color: var(--twikoo-font-color,#3273dc);
    cursor: pointer;
    text-decoration: none;
}
</style>