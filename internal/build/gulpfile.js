import {resolve,dirname} from "node:path"
import { fileURLToPath } from "node:url"
import {copyFile,mkdir }from 'node:fs/promises'
import {spawn }from "node:child_process"
import gulp from 'gulp'
import {run} from './utils/index.js'
const {series, parallel }=gulp
const __dirname=dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
export const rootDir = resolve(__dirname, '..','..')
export const pkgDir = resolve(rootDir, 'packages')
export const localeRoot = resolve(pkgDir, 'locale')
export const astroTwikooRoot = resolve(pkgDir, 'astro-twikoo')
export const coreRoot = resolve(pkgDir, 'core')

// output

export const buildOutput = resolve(rootDir, 'dist')
export const astroTwikooOutput = resolve(rootDir, 'astro-twikoo')

//pkg
export const astroTwikooPkg = resolve(astroTwikooRoot, 'package.json')

// const run = async (command, cwd = rootDir) => {
//     new Promise((resolve, reject) => {
//         const [cmd, ...args] = command.split(' ')
//         const app = spawn(cmd, args, {
//             cwd,
//             stdio: 'inherit',
//             shell: process.platform === 'win32',
//         })

//         const onProcessExit = () => app.kill('SIGHUP')

//         app.on('close', (code) => {
//             process.removeListener('exit', onProcessExit)

//             if (code === 0) resolve()
//             else
//                 reject(
//                     new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
//                 )
//         })
//         process.on('exit', onProcessExit)
//     })
// }

/**
 * 
 * @param {string} name 
 * @param {T} fn
 * @returns 
 */
const withTaskName = (name, fn) => Object.assign(fn, { displayName: name })

/**
 * 
 * @param {string} name 
 */
const runTask = (name) => {
    withTaskName(`shellTask:${name}`, () =>
        run(`pnpm run build-start ${name}`)
    )
}
const copyFiles = () => {
    Promise.all([
        copyFile(astroTwikooPkg, resolve(astroTwikooOutput, 'package.json')),
        copyFile(
            resolve(rootDir, 'README.md'),
            resolve(astroTwikooOutput, 'README.md'),
        )
    ])
}


export default  series(
    withTaskName('clean', () => run('pnpm run clean')),
    withTaskName('createOutput', () => mkdir(astroTwikooOutput, { recursive: true })),

    // parallel(
    //     runTask('buildModules'),
    //     runTask('buildFullBundle'),
    //     runTask('generateTypesDefinitions'),
    //     runTask('buildHelper'),
    //     // series(
    //     //     withTaskName('buildThemeChalk', () =>
    //     //         run('pnpm run -C packages/theme-chalk build')
    //     //     ),
    //     //     copyFullStyle
    //     // )
    // ),

)
