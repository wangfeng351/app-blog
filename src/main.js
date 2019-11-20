import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.changeData = function (){
	return article ;
}

// 定义服务器地址前缀为全局变量
Vue.prototype.baseURL = 'http://localhost:8080';
/* 全局属性 */
Vue.prototype.$articles = "1";
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

