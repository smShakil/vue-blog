<template>
  <nav>
    <ul>
      <li><router-link to="/vue-blog/" exact>Home</router-link></li>
      <li><router-link to="/vue-blog/add" exact>Add Blog</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  background: rgba(0,0,0,0.6);
  text-align: center;
  z-index: 99;
}
ul li{
  display: inline-block;
  margin: 0 10px;
  list-style-type: none;
}
ul li a{
  padding: 10px 20px;
  border-radius: 5px;
  color: #42b983;
  text-decoration: none;
  display: inline-block;
}
.router-link-active{
  background-color: #42b983;
  color: #fff;
}
</style>
