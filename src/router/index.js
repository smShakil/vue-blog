import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import AddBlog from '@/components/AddBlog'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/add', name: 'AddBlog', component: AddBlog }
  ],
  mode: 'history'
})
