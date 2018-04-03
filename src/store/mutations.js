const mutations = {
  fetchPosts: (state, data) => {
    state.loading = false
    let blogArray = []
    for (let key in data.body.posts) {
      data.body.posts[key].id = key
      blogArray.push(data.body.posts[key])
    }
    state.posts = blogArray
  },

  handleError: (state) => {
    state.loading = false
    state.error = true
  },

  deleteBlog: (state, payload) => {
    state.posts.map((value, key) => {
      value.id === payload && (
        state.posts.splice(key, 1)
      )
    })
  }
}

export default mutations
