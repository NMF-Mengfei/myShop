
import Vue from 'vue';
import VueRouter from 'vue-router'


import Cart from '../pages/Cart/cart.vue'
import Home from '../pages/Home/home.vue'
import Me from '../pages/Me/me.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/home',component:Home},
    {path:'/cart',component:Cart},
    {path:'/me',component:Me},
    {path:'/',redirect:'/home'},
  ]
})
