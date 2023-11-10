import {resolve,dirname} from "node:path"
import { fileURLToPath } from "node:url"
import {copyFile,mkdir }from 'node:fs/promises'
import {spawn }from "node:child_process"
import gulp from 'gulp'
import {run,withTaskName,runTask} from './src/index.js'
const {series, parallel }=gulp
const __dirname=dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
export const rootDir = resolve(__dirname, '..','..')
export const pkgDir = resolve(rootDir, 'packages')
export const localeRoot = resolve(pkgDir, 'locale')
export const astroTwikooRoot = resolve(pkgDir, 'astro-twikoo')
export const coreRoot = resolve(pkgDir, 'core')
export const buildRoot =resolve(rootDir,'internal','build')

// output

export const buildOutput = resolve(rootDir, 'dist')
export const astroTwikooOutput = resolve(buildOutput, 'astro-twikoo')

//pkg
export const astroTwikooPkg = resolve(astroTwikooRoot, 'package.json')

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

    parallel(
        runTask('buildModules'),
        //runTask('buildFullBundle'),
        // runTask('generateTypesDefinitions'),
        // runTask('buildHelper'),
        // series(
        //     withTaskName('buildThemeChalk', () =>
        //         run('pnpm run -C packages/theme-chalk build')
        //     ),
        //     copyFullStyle
        // )
    ),

)
