import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const http = Vue.http

const actions = {
  fetchPosts: ({commit}) => {
    http
      .get(`https://vujs-blog.firebaseio.com/.json`)
      .then(data => {
        commit('fetchPosts', data)
      }, errorRes => {
        commit('handleError')
      })
  },

  deletePost: ({commit}, payload) => {
    http
      .delete('https://vujs-blog.firebaseio.com/posts/' + payload + '.json')
      .then(function (data) {
        commit('deleteBlog', payload)
      })
  }
}

export default actions
