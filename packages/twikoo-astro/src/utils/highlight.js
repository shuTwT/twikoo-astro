import { twikooStore } from '../store'

const PRISM_CDN = 'https://cdn.staticfile.org/prism/1.28.0'
let Prism
let cssEl

const renderCode = async (el, theme) => {
  const prismCdn = (twikooStore.get().prismCdn) ? twikooStore.get().prismCdn : PRISM_CDN
  window.Prism = window.Prism || {}
  window.Prism.manual = true
  if (!Prism) {
    Prism =await import('prismjs')
    await import('prismjs/plugins/autoloader/prism-autoloader')
    Prism.plugins.autoloader.languages_path = `${prismCdn}/components/`
  }
  loadCss(theme, prismCdn)
  Prism.highlightAllUnder(el)
}

const loadCss = (theme, prismCdn) => {
  const twikooEl = document.getElementById('twikoo')
  if ((cssEl && twikooEl.contains(cssEl)) || !theme || theme === 'none') return
  cssEl = document.createElement('link')
  if (theme === 'default') {
    cssEl.href = `${prismCdn}/themes/prism.min.css`
  } else {
    cssEl.href = `${prismCdn}/themes/prism-${theme}.min.css`
  }
  cssEl.rel = 'stylesheet'
  cssEl.type = 'text/css'
  twikooEl.appendChild(cssEl)
}

export default renderCode