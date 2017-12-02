<template>
  <header class = 'g-header'>
    <div id = logo>
      <img src = '../assets/logo.png'/>
      <h4>维生素俱乐部</h4>
    </div>

      <ul class = 'nav'>
        <li v-for = 'menu in menus'>
          <router-link :to = 'menu.href' class = 'link-item'>{{ menu.title }}</router-link>
        </li>
        <li>
          <input id = 'search' type = 'text'/>
        </li>
        <li>
          <a href = '#'>登陆</a>
        </li>
        <li>
          <a href = '#'>注册</a>
        </li>
      </ul>
  </header>
</template>

<script>
  export default {
    data() {
      return{
        menus: [
          {
            title: '俱乐部风采',
            href: '../pages/home'
          },
          {
            title: '近期活动',
            href: '../pages/activity'
          },
          {
            title: '俱乐部成员',
            href: '../pages/menber'
          },
          {
            title: '加入我们',
            href: '../pages/joinus'
          }
        ]
      }
    }
  }
</script>

<style>
  .g-header{
    width: 100%;
    height: 60px;
    background: #000;
    color: #fff;
  }
  /* left side logo & header */
  #logo{
    position: absolute;
    width: 24%;
    left: 10.52%;
    line-height: 60px;
    text-align: left;
  }
  #logo img{
    width: 69%;
    vertical-align: middle;
  }
  #logo h4{
    float: right;
    margin-left: 1em;
  }

  /* nav */
  .nav{
    position: absolute;
    right: 5.2%;
    list-style-type: none;
    line-height: 60px;
  }
  .nav li{
    display: inline-block;
    margin-left: 1.825em;
  }
  .nav li a{
    text-decoration: none;
    color: #fff;
  }
  .nav #search{
    width: 160px;
    height: 20px;
    border: 1px solid #fff;
    background: #eee url(../assets/search_icon.png) 150px 3px no-repeat;
    -webkit-background-size: 18px;
    background-size: 18px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    padding-left: 20px;
    outline: none;
  }
</style>
