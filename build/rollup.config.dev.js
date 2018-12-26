/**
 * @author danielmlc
 */
process.env.NODE_ENV = 'development';
const path = require('path');
const serve = require('rollup-plugin-serve');
const configList  = require('./rollup.config');

const resolveFile = function(filePath) {
    return path.join(__dirname, '..', filePath)
}
  const PORT = 8001;
  const devSite = `http://localhost:${PORT}`;
  setTimeout(()=>{
    console.log(`[dev]: ${devSite}`)
  }, 500);

  configList.map((config, index) =>{
    config.output.sourcemap = true;
    config.plugins = [
      ...config.plugins,
      ...[
      // 使用开发服务插件
      serve({
          port: PORT,
          contentBase: []
        })
      ]
    ]
  })
 
  module.exports = configList;