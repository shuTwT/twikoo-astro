//import { marked } from '../lib/marked/marked'
import {marked}from "../../marked/marked"

/**
 * https://marked.js.org/#/USING_ADVANCED.md
 */
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  smartypants: false,
  mangle:false,
  headerIds:false
})

export default marked