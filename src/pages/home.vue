<template>
  <div class = 'g-wrapper'>
    <common-header></common-header>
    <div class = 'carousel'>
      <banner></banner>
      <div class = 'decoration'>
        <img id = 'shape_up' src = '../assets/shape_up.png'/>
        <img id = 'shape_down' src = '../assets/shape_down.png'/>
      </div>
    </div>
    <div class = 'article-wrapper'>
      <div class = 'article'>
        <div class = 'article-image left-side'>
          <h2>{{ articleList[0].date }}</h2>
          <img :src = 'articleList[0].image'/>
        </div>
        <div class = 'article-content right-side'>
          <h3> {{articleList[0].title}} </h3>
          <p> {{ articleList[0].content}}</p>
        </div>
      </div>
      <div class = 'article'>
        <div class = 'article-image right-side'>
          <h2>{{ articleList[1].date }}</h2>
          <img :src = 'articleList[1].image'/>
        </div>
        <div class = 'article-content left-side'>
          <h3> {{articleList[1].title}} </h3>
          <p> {{ articleList[1].content}}</p>
        </div>
      </div>
    </div>
    <div class = 'group-wrapper'>
        <ul>
          <li v-for = 'group in groupList'>
            <router-link :to = 'group.href'>
              <div  class = 'group-item' :style = "{ backgroundImage: 'url('+group.backgroundImage+')' }" >
                <img :src = 'group.avater'/>
                <p>{{ group.name }}</p>
                <div class = 'group-link'>
                  <img src = '../assets/arrow.png'/>
                </div>
              </div>
            </router-link>
          </li>

        </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import commonHeader from '../components/commonHeader.vue'
  import banner from '../components/banner.vue'
  import commonFooter from '../components/commonFooter.vue'
  import api from '../api/index'
  export default {
    name: 'home',
    components: {
      commonHeader,
      banner,
      commonFooter
    },
    data() {
      return {
        articleList: [
          {
            title: 'Lorem ipsum',
            date: '2017-11-11',
            image: 'http://upload-images.jianshu.io/upload_images/7361314-a7ccb4de932e024a.jpg',
            content: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit, ' +
            ' mollit anim id est laborum.'
          },
          {
            title: 'Lorem ipsum dolor sit amet',
            date: '2017-11-22',
            image: 'http://upload-images.jianshu.io/upload_images/3024218-eab5b2c50269dfed.jpg',
            content: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
            ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ],
        groupList: [
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/2046246-503d676a5d557422.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          },
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/1032836-75ceac005d8d374e.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          },
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/7361314-104f5d668e68ec92.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          },
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/7361314-104f5d668e68ec92.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          },
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/7361314-104f5d668e68ec92.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          },
          {
            name: '程序开发组',
            backgroundImage: 'http://upload-images.jianshu.io/upload_images/7361314-104f5d668e68ec92.jpg',
            avater: 'http://upload-images.jianshu.io/upload_images/4026404-1166e64a8b6a41f8.jpg',
            href: '/group/code'
          }
        ]
      }
    },
    methods: {
      getArticle() {
        api.getArticle().then((response) => {
       console.log(response.data.data)
//        console.log(this);
        this.articleList = response.data.data})
      }
    },
    created() {
    },
    mounted() {
//      this.getArticle();
//      console.log(this.articleList);
    }
  }
</script>


<style scoped>
    .carousel{
      width: 100%;
    }
  .carousel .decoration{
    position: relative;
    width: 108px;
    margin: 0 auto;
    transform: translateY(-50%);
  }
  .carousel .decoration img{
    margin: 0 auto;
    width: 108px;
    vertical-align: top;
  }
  .article-wrapper{
    width: 100%;
    position: relative;
  }
  .article{
    width: 84.2%;
    margin: 0 auto;
    padding-top: 5%;
    overflow: hidden;
  }
  .article-image{
    width: 50%;
    height: 0;
    max-width: 50%;
    /*display: inline-block;*/
  }
  .article-image img{
    float: right;
    width: 85%;
    /*vertical-align: top;*/
  }
  .article-image h2{
    width: 30%;
    min-width: 120px;
    float: left;
    text-align: left;
    padding-bottom: 0.3125em;
    border-bottom: 0.18em solid #0066cc;
    transform: rotate(90deg);
    transform-origin: 30% 30%;
  }
  .article-content{
    width: 40%;
    padding-left: 8%;
    margin: 10% 0;
  }
  .article-content h3{
    font-size: 1.875em;
    font-weight: bold;
    padding-bottom: 2%;
  }

  .left-side{
    float: left;
  }
  .right-side{
    float: right;
  }


  /*group items*/
  .group-wrapper{
    width: 100%;
    padding: 2% 0;
    background: #eee;
  }
  .group-wrapper ul{
    margin: 0 auto;
    list-style-type: none;
    width: 86.3%;
  }
  .group-wrapper li{
    width: 26.1%;
    padding: 3%;
    display: inline-block;
  }
  .group-item{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 0;
    /*min-height: 100px;*/
    padding-bottom: 118%;
    max-width: 430px;
    min-width: 150px;
    border-bottom: 6px solid #0066cc;
    background-repeat: repeat-x;
    background-position: center center;
    background-size: cover;
    text-align: left;
    color: #fff;
  }
  .group-item img{
    padding-top: 11.6%;
    padding-left: 11.6%;
    width: 8em;
    height: 10.8em;
  }
  .group-item p{
    padding-left: 11.6%;
    font-size: 1.5em;
  }
  .group-link{
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #0066cc;

  }
  .group-link img{
    vertical-align: middle;
    padding: 13px;
    width: 30px;
    height: 30px;
  }
  .group-wrapper a:hover .group-link{
    display: block;
  }

  @media screen and (max-device-width: 900px){
    .article-image h2{
      display: block;
      float: none;
      /*position: absolute;*/
      /*bottom: 0;*/
      text-align: center;
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    .article-image,
    .article-content{
      display: block;
      width: 100%;
      height: auto;
      max-width: 100%;
      padding: 0;
      margin:0 auto;
      margin-bottom: 50px;
    }
    .article-image img{
      float: none;
      width: 100%;
    }

    .group-item img{
      margin: 0 auto;
      width: 50%;
      height: auto;
    }
  }
</style>
