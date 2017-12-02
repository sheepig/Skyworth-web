<template>
  <div class='slide-show' @mouseover='clearInv' @mouseout='runInv'>
    <transition-group tag = 'ul' class = 'slide-ul' name = 'move'>
      <li v-for = '(item, index) in slides' :key = 'index' v-show= 'index === nowIndex'>
        <!--<a :href = 'item.href' :target = 'target'>-->
          <img :src = 'item.src'/>
        <!--</a>-->
      </li>
    </transition-group>

    <div class = 'bullet'>
      <span v-for = '(item, index) in slides.length'
          @click = 'goto(index)'
          class = 'bullet-point'>
        <a :class = " {'active': index === nowIndex }">{{ index + 1}}</a>
      </span>
    </div>

    <div class = 'control-wrapper'>
      <a class = 'slide-side prev' @click = 'goto(prevIndex)'></a>
      <a class = 'slide-side next' @click = 'goto(nextIndex)'></a>
    </div>

  </div>
</template>

<script>
  import api from '../api/index'
  export default {
    name: 'banner',
    data() {
      return {
        nowIndex: 0,
        isShow: true,
        inv: 2000,
        slides: []
      }
    },
    methods: {
      goto(index) {
        this.nowIndex = index
      },
      runInv() {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv() {
        clearInterval(this.invId)
      },
      setImg() {
        api.getBanner().then((response) => {
          if(response.status === 200){
            //console.log(JSON.parse(response.data))
            this.slides = JSON.parse(response.data);
          }
        })
//        this.$http.get('/api/Skyworth/changePictureAction').then(res => {
//          console.log(res)
//        })
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    },
      mounted() {
      this.runInv();
      this.setImg();
      }
  }
</script>

<style lang = 'css' scoped>
  .bullet{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12%;
    margin: auto;
    text-align: center;
    z-index: 10;
  }
  .bullet-point{
    display: inline-block;
    margin-right: 8px;
  }
  .bullet-point a{
    display: block;
    width: 7px;
    height: 7px;
    margin: 0 5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    text-align: left;
    text-indent: -9999px;
    overflow: hidden;
    /*_zoom: 1;*/
    background: #f5f5f5;
    background: rgba(0, 0, 0, .6);
    -webkit-transition: all .5s;
    transition: all .5s;
  }
  .bullet-point .active{
    background: #fff;
    background: rgba(255, 255, 255, .6);
    transform: scale(1.7, 1.7);
  }
  .control-wrapper a{
    display: inline-block;
    position: absolute;
    top: 50%;
    width: 55px;
    height: 55px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #fff;
    -webkit-background-size: 50px, 50px;
    background-size: 50px, 50px;
    text-align: center;
    line-height: 55px;
    font-size: 55px;
    font-weight: bold;
    transform: translateY(-50%);
  }

  .prev{
    left: 40px;
    background: #000;
    background: url('../assets/left_slide.png') center center no-repeat rgba(0, 0, 0, .4);

  }
  .next{
    right: 40px;
    background: #000;
    background: url('../assets/right_slide.png') center center no-repeat rgba(0, 0, 0, .4);
  }

  .slide-show{
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height:0;
  /*@宽高比例*/
    padding-bottom: 30%;
  }
  .slide-ul{
    list-style: none;
    display: block;
  }
  .slide-ul li{
    height: 0;
    max-width: 100%;
    width: 100%;
    background: #888;
    position: relative;
  }
  .slide-ul li img{
    width: 100%;
  }

  .move-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
  }

  .move-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
  }

  .move-enter {
    transform: translateX(100%)
  }

  .move-leave {
    transform: translateX(0)
  }

</style>
