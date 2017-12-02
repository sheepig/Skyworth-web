<template>
  <div class = 'footer'>
    <img src = '../assets/logo.jpeg' />
    <p>俱乐部微信公众号<br>
    skyworth_club</p>
  </div>
</template>

<script>
  export default {

  }
</script>
<style scoped>
  .footer {
    height: 150px;
    width: 100%;
    background: #000;
  }
  .footer img{
    width: 120px;
  }
  .footer p,
  .footer img{
    display: inline-block;
    vertical-align: middle;
    line-height: 150%;
    padding-top: 15px;
    color: #fff;
  }
</style>
