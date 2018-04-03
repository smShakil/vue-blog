<template>
  <div v-if="!this.$store.state.error && !this.$store.state.loading">
    <single-blog-item v-for="blog in posts" :key="blog.id" :blog="blog"/>
  </div>
  <p v-else-if="this.$store.state.loading">Loading.........</p>
  <p v-else-if="this.$store.state.error" class="error">An Error Occured</p>
</template>

<script>
import { mapActions } from 'vuex'
import SingleBlog from './SingleBlog'

export default {
  name: 'Home',
  components: {
    'single-blog-item': SingleBlog
  },

  computed: {
    posts () {
      return this.$store.state.posts
    }
  },

  methods: {
    ...mapActions({
      fetchPosts: 'fetchPosts'
    })
  },

  created () {
    this.fetchPosts()
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
