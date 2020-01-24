import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
// import env from './env'

axios.defaults.baseURL = '/static/mock/';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = window.hash;
  if(res.status == 0){
      return res.data;
  }else if(res.status == 10){
    if (path != '#/index'){
      window.location.href = '/#/login';
    }
      window.location.href = '/#/login';
  }else{
    alert(res.msg);
    return Promise.reject();
  }
})
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
