import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/:page', component: App },
    { path: '/', redirect: '/1' }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
