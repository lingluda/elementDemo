import axios from 'axios'
import qs from 'qs'
import '../utils/dateformat.js'
import router from '../router'

let ps = {}
ps.post = function (url,params,callback) {
  if (sessionStorage.getItem('token') == null && url != 'basicdata/login') {
    router.app.$router.push('/login')
  } else {
  axios.post(url,qs.stringify(params)).then(resp => {
    callback(resp.data.hits)
  })
}
}
axios.defaults.baseURL = 'http://tour.tcloud.mobi/ytbi/func/'
export default ps
