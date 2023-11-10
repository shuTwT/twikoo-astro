
/**
 * 
 * @param {import('rollup').RollupBuild} bundle 
 * @param {import('rollup').OutputOptions} options 
 * @returns 
 */
export function writeBundles(bundle,options){
    return Promise.all(options.map((option)=>bundle.write(options)))
}

/**
 * 
 * @param {string} name 
 * @param {boolean} minify 
 * @param {string} ext 
 */
export function formatBundleFilename(name,minify,ext){
    return `${name}${minify ? '.min' : ''}.${ext}`
}