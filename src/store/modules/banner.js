import api from '../../api/index'
import * as types from '../mutation-types'

// initial state
const state = {
  slides: []
}

// getters
const getters = {
  allSlides: state => state.slides // 所有图片清单
}

// actions
const actions = {
  getAllSlides({ commit }){
    api.getBanner().then(res => {
      console.log(res)
      commit(types.GET_BANNER, JSON.parse(res.data))
    })
  }
}

//mutations
const mutations = {
  [types.GET_BANNER](state, data){
    state.slides = data // GET_BANNER函数改变slides的值
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
