<template>
  <div>
    <div class="preview" v-for="blog in posts" :key="blog.id">
      <div class="bannerImg">
        <img v-if="blog.banner" :src="blog.banner" alt="Banner Image">
      </div>
      <h3 class="title">{{blog.title}}</h3>
      <p class="content">{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleBlog',
  props: ['posts'],
  data () {
    return {
      blog: {
        title: '',
        content: '',
        banner: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.preview{
  padding: 50px;
  background: #eee;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ddd;
  margin-bottom: 50px;
}
.bannerImg{
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 20px;
}
.bannerImg img{
  max-width: 100%;
  max-height: 300px;
  display: block;
  margin: 0 auto;
}
.title{
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
