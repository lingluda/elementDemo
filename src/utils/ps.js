import axios from 'axios'
import qs from 'qs'
import '../utils/dateformat.js'
//import router from '../router'

let ps = {}
ps.post = function (url,params,callback) {
  axios.post(url,qs.stringify(params)).then(resp => {
    callback(resp.data.hits)
  })
}
ps.newLine = function(str){
  const strlen = str.toString()
  console.log(strlen.length)
  if (strlen.length > 5) {
    return strlen.replace(/\S{5}/g, match => match + '\n')
  }else {
    return strlen
  }
}
axios.defaults.baseURL = 'http://tour.tcloud.mobi/ytbi/func/'
export default ps
