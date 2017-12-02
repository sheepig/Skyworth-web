import axios from 'axios'

axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';


import  {
  Banner,
  Article,
  Form
} from './resource'
export default {
  getArticle() {
    return axios.get(Article)
  },
  getBanner() {
    return axios.get(Banner)
  },
  postForm(params){
    return axios.post(Form,params)
  }
}
