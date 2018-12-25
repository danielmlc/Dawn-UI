import Button from './button/index.js';
import Alert from './alert/index.js';

export default {

    install(Vue) {
        Vue.component('d-button', Button);
        Vue.component('d-alert', Alert);
    }

};