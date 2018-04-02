<template>
  <div>
    <div class="singleItem">
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
export default {
  name: 'SingleBlog',
  props: ['blog']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleItem{
  padding: 50px;
  background: #eee;
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
</style>
