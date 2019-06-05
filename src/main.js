import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

// Bootstrap
Vue.use(BootstrapVue)
Vue.use(VueWait)

new Vue({
    router,
    render: h => h(App),
    wait: new VueWait(),
}).$mount('#app')

import VueWait from 'vue-wait'

