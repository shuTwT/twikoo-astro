import {buildRoot} from '../../gulpfile.js'
import {run} from './process.js'
/**
 * 
 * @param {string} name 
 * @param {T} fn 
 * @returns 
 */
export const withTaskName=(name,fn)=>Object.assign(fn,{displayName:name})

/**
 * 
 * @param {string} name 
 */
export const runTask=(name)=>
    withTaskName(`shellTask:${name}`,()=>
        run(`pnpm run start ${name}`, buildRoot)
    )
