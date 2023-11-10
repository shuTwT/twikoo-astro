import {defineBuildConfig} from 'unbuild'
export default defineBuildConfig({
    entry:['src/main.js'],
    clean:false,
    declartion:false,
    rollup:{
        emitCJS:true
    }
})