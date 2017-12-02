import { API_ROOT } from './config'
var apiSkyworth = {
  banner: '/changePictureAction',
  article: '/article',
  form: '/form'
}
export const Article = API_ROOT.concat(apiSkyworth.article)
export const Banner = API_ROOT.concat(apiSkyworth.banner)
export const Form = API_ROOT.concat(apiSkyworth.form)
