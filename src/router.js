import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FAQ from './views/FAQ.vue'
import AboutUs from './views/AboutUs.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    // {
    //   path: '/aboutus',
    //   name: 'about-us',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/AboutUs.vue')
    // }
  ]
})
