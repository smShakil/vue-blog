<template>
  <div v-if="!error && !loading">
    <single-blog-item v-for="blog in posts" :key="blog.id" :blog="blog"/>
  </div>
  <p v-else-if="loading">Loading.........</p>
  <p v-else-if="error" class="error">An Error Occured</p>
</template>

<script>
import SingleBlog from './SingleBlog'

export default {
  name: 'Home',
  components: {
    'single-blog-item': SingleBlog
  },
  data () {
    return {
      posts: {},
      loading: true,
      error: false
    }
  },
  created () {
    this.$http
      .get(`https://vujs-blog.firebaseio.com/.json`)
      .then(data => {
        this.loading = false
        let blogArray = []
        for (let key in data.body.posts) {
          data.body.posts[key].id = key
          blogArray.push(data.body.posts[key])
        }
        this.posts = blogArray
      }, errorRes => {
        this.loading = false
        this.error = true
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: #f00;
  font-size: 24px;
}
</style>
