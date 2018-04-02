<template>
  <div>
    <div class="addBlog">
      <div v-if="blogPost" class="successMsg">
        <p>Blog posted Successfully</p>
      </div>
      <h2>Add Blog</h2>
      <label>Title:</label>
      <input type="text" placeholder="Type Blog Title" v-model="blog.title">
      <br>

      <label>Body:</label>
      <textarea placeholder="Type Blog Body" rows="5" v-model="blog.content"></textarea>
      <br>

      <label>Banner:</label>
      <input type="file" accept="image/*" placeholder="Type Blog title" @change="processFile">

      <button @click.prevent="addBlog">Add Blog</button>
    </div>

    <single-blog-item :blog="blog"/>
  </div>
</template>

<script>
import SingleBlog from './SingleBlog'

export default {
  name: 'AddBlog',
  components: {
    'single-blog-item': SingleBlog
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        banner: ''
      },
      blogPost: false
    }
  },
  methods: {
    processFile (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.blog.banner = e.target.result
      }
      reader.readAsDataURL(file)
    },
    addBlog () {
      this.$http
        .post('https://vujs-blog.firebaseio.com/posts.json', this.blog)
        .then(function (data) {
          this.blog = {
            title: '',
            content: '',
            banner: ''
          }
          this.blogPost = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addBlog{
  padding: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ddd;
  margin-bottom: 50px;
}
.successMsg{
  color: #42b983;
  margin-bottom: 10px;
}
h2{
  text-align: center;
  margin-bottom: 50px;
  color: #42b983;
}
label{
  display: block;
  margin-bottom: 5px;
}
input,
textarea{
  margin-bottom: 10px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  resize: none;
  font-family: sans-serif;
}
.addBlog button{
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: #42b983;
  color: #fff;
  text-decoration: none;
  float: right;
}

</style>
