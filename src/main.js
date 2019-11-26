import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引用文件
import global_ from '@/util/Global'
import axios from 'axios'
import VueAxios from 'vue-axios'

import infiniteScroll from 'vue-infinite-scroll'
// 挂载到vue实例上
Vue.prototype.GlOBAL = global_
Vue.use(infiniteScroll);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

