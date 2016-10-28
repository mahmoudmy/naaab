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
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
