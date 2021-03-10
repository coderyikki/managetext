import Vue from 'vue'
import Router from 'vue-router'

const Login = ()=>import('@/views/login/index.vue')

Vue.use(Router)


const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login
  }
];

const router = new Router({
  routes
})

export default router
