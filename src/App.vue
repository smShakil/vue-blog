<template>
  <div>
    <blog-navigation/>
    <div class="pageContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    'blog-navigation': Navigation
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  padding-top: 70px;
  font-family: cursive;
  color: #333
}
h1,h2,h3,h4,h5,h6{
  font-family: monospace;
  color: #666;
}
.pageContent{
  padding: 50px;
}
</style>
