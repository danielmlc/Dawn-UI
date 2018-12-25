/**
 * @author danielmlc
 */
const path = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');
const nodeGlobals = require('rollup-plugin-node-globals');
const vue = require('rollup-plugin-vue').default;


const isProductionEnv = process.env.NODE_ENV === 'production'
const resolveFile = function(filePath) {
    return path.join(__dirname, '..', filePath)
  }


const babelOptions = {
    "presets": [
      ["env", {
        "modules": false
      }],
    ],
    "plugins": [
      "transform-object-rest-spread",
    ],
  }
module.exports = [
{
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('lib/index.js'),
    format: 'es',
    name: 'DawnUI',
  }, 
  plugins: [
    vue(),
    json(),
    nodeResolve(),
    nodeGlobals(),
    commonjs(),
    postcss({
      extract: true,
      minimize: isProductionEnv,
      extensions:['.css', '.scss'],
    }),
    // 使用和配置babel编译插件
    babel(babelOptions),
    
  ],
  }
]