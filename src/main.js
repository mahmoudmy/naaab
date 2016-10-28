import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bulma/css/bulma.css'

import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/:page', component: App },
    { path: '/sh/:sh/:page', component: App }
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
