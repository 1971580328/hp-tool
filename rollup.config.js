import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'index.js', // 入口文件
  output: [
    {
      file: './es/index.js',
      format: 'esm', // 将项目保存为 ES6 模块文件
      entryFileNames: '[name].esm.js',
      plugins: [resolve(), commonjs(), terser(), cleanup()]
    },
    {
      file: './dist/index.js',
      format: 'cjs', // CommonJS，适用于 Node 和 Browserify/Webpack
      entryFileNames: '[name].cjs.js',
      plugins: [resolve(), commonjs(), terser(), cleanup()]
    }
  ]
}
