import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/vue-blog/', name: 'Home', component: Home },
    { path: '/vue-blog/add', name: 'AddBlog', component: AddBlog }
  ],
  mode: 'history'
})
