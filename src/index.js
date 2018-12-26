/**
 * @author danielmlc
 */

import component from './packages/index.js';


export default {

  install(Vue, options = {}) {
      Vue.use(component);
  }
};
