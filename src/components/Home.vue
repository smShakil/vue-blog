<template>
  <div>
    <single-blog-item :posts="posts"/>
  </div>
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
      posts: {}
    }
  },
  created () {
    this.$http
      .get(`https://vujs-blog.firebaseio.com/.json`)
      .then(function (data) {
        this.posts = data.body.posts
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
