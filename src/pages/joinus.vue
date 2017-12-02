<template>
  <div class = 'form'>
    <!--<form id = 'jion-in'>-->
      <p><input type = 'text' placeholder = '姓名' v-model = 'msg.name' /></p>
      <p><input type = 'text' placeholder = '手机号码' v-model = 'msg.phone'/></p>
      <p>
        <!--radio buttons for gender-->
        <input type = 'radio' id = 'male' name = 'picked' value = 'male' v-model = 'msg.gender'/>
        <label for = 'male'>male</label>
        <input type = 'radio' id = 'female'  name = 'picked' value = 'female' v-model = 'msg.gender'/>
        <label for = 'female'>female</label>
      </p>
      <p>
        <!--select first aspiration-->
        <label for = 'firstAspiration'>第一志愿</label>
        <select id = 'firstAspiration' v-model = 'msg.firstAspiration'>
          <option v-for = 'option in options' v-bind:value = 'option'>
            {{ option }}
          </option>
        </select>
      </p>

      <p>
        <!--second first aspiration-->
        <label for = 'secondAspiration'>第二志愿</label>
        <select id = 'secondAspiration' v-model = 'msg.secondAspiration'>
          <option v-for = 'option in filterOptions' v-bind:value = 'option'>
            {{option}}
          </option>
        </select>
      </p>

      <!--self intro-->
      <p>
        <label for = 'intro'>个人简介</label>
        <textarea id = 'intro' v-model = 'msg.intro'></textarea>
      </p>

      <!--career ambition-->
      <p>
        <label for = 'career'>职业规划</label>
        <textarea id = 'career' v-model = 'msg.career'></textarea>
      </p>

      <!--description-->
      <p>
        <label for = 'description'>对所选意向的理解</label>
        <textarea id = 'description' v-model = 'msg.description'></textarea>
      </p>

      <!--submit button-->
      <p>
        <button>提交</button>
      </p>
    <!--</form>-->
    <br><hr>
    <p>即时数据</p>
    <p>name:{{msg.name}}</p>
    <p>phone:{{msg.phone}}</p>
    <p>gender: {{msg.gender}}</p>
    <p>第一志愿：{{msg.firstAspiration}}</p>
    <p>第二志愿：{{msg.secondAspiration}}</p>
    <p>个人简介：{{msg.intro}}</p>
    <p>认知：{{msg.description}}</p>
  </div>


</template>

<script>
  import api from '../api/index'
  export default {
    data() {
      return {
        chosedOption: '',
        options: [
          '产品',
          '安卓',
          '后台',
          'IOS',
          '前端',
          'UI'
        ],
        msg: {
          name: '',
          phone: '',
          gender: '',
          firstAspiration: '',
          secondAspiration: '',
          intro: '',
          career: '',
          description: ''
        }
      }
    },
    methods: {
      //如果一二志愿相同，清空第二志愿
      removeSecondAspiration() {
        if(this.msg['firstAspiration'] === this.msg['secondAspiration']){
          this.msg['secondAspiration'] = ''
        }
      },
      postForm() {
        api.postForm(this.msg).then((response) => {
          console.log(response)
        })
      }
    },
    computed: {
      //在第二志愿栏中去掉第一志愿
      filterOptions: function(){
        let chosedOption = this.msg['firstAspiration']
        return this.options.filter(function(item){
          return item !== chosedOption
        })
      }


    },
    watch: {
      'msg.firstAspiration': function(val) {
        this.removeSecondAspiration()
      },
      'msg.secondAspiration': function(val) {
        this.removeSecondAspiration()
      }
    }
  }
</script>

<style>
  .form{
    width: 600px;
    margin: 0 auto;
  }
</style>
