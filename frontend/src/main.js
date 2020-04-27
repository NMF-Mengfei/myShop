// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/js/rem'
import './assets/css/index.css'
import 'font-awesome/css/font-awesome.min.css'

import store from './store'
import router from './router'

Vue.config.productionTip = false

import VueLazyload from 'vue-lazyload'


  Vue.use(ElementUI);
  Vue.use(VueLazyload, {
      preLoad: 1.3,
      // error: 'dist/loading.gif',
      error: '../static/imgs/loading.jpg',
      // loading: 'dist/loading.gif',
      loading: '../static/imgs/loading.jpg',
      attempt: 1
    })


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   router,
//   store,
//   render:h=>h(App)
// }).$mount('#app')
