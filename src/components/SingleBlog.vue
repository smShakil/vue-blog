<template>
  <div>
    <div class="singleItem">
      <button class="deleteButton" @click="deletepost(blog.id)">Delete</button>
      <div class="bannerImg">
        <img v-if="blog.banner" :src="blog.banner" alt="Banner Image">
      </div>
      <div class="blogContent">
        <h3 class="title">{{blog.title}}</h3>
        <p class="content">{{blog.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'SingleBlog',
  props: ['blog'],
  methods: {
    // ...mapActions([
    //   'deletePost'
    // ])
    deletepost () {
      this.$store.dispatch('deletePost', this.blog.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleItem{
  position: relative;
  padding: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ddd;
  margin-bottom: 50px;
}
.bannerImg{
  max-width: calc(30% - 25px);
  max-height: 200px;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}
.bannerImg img{
  max-width: 100%;
  max-height: 200px;
  display: block;
  margin: 0 auto;
}
.blogContent{
  display: inline-block;
  width: 70%;
  vertical-align: top;
}
.blogContent .title{
  font-size: 30px;
  margin-bottom: 10px;
}
.deleteButton{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: #F44336;
  color: #fff;
  text-decoration: none;
}
</style>
