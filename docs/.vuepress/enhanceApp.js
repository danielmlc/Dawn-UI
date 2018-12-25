
import components from './components'
import dawnUi from '../../lib/index.js';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  for(var key in components){    
      Vue.component('docs-'+key, components[key])
  }  
  Vue.use(dawnUi)
}
