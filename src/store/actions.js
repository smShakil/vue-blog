import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const http = Vue.http

const actions = {
  deletePost: ({commit}, id) => {
    http
      .delete('https://vujs-blog.firebaseio.com/posts/' + id + '.json')
      .then(function (data) {
        commit('deleteBlog')
      })
  }
}

export default actions
