<template>
  <div id = 'app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family:  "Microsoft YaHei UI Light", Helvetica, Arial, sans-serif;
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0066cc;
}
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, form{
    margin: 0;
    padding: 0;
  }
</style>
