import axios from 'axios'
import qs from 'qs'
import '../utils/dateformat.js'
import ElementUI from 'element-ui'
//import router from '../router'

let ps = {}
ps.post = function (url,params,callback) {
  axios.post(url,qs.stringify(params)).then(resp => {
    callback(resp.data.hits)
  })
}
ps.posts = function (url,params,callback) {
  if (Object.keys(params).length == 0) {
    params = { 1: 1 }
  }
  axios.post(url + '?' + encodeUrl(params)).then(resp => {
    if (resp.data.errcode==0){
      callback(resp.data.hits)
    }else {
      ElementUI.Message.error(resp.data.errmsg);
    }
  })
}
//换行
ps.newLine = function(str){
  const strlen = str.toString()
  console.log(strlen.length)
  if (strlen.length > 5) {
    return strlen.replace(/\S{5}/g, match => match + '\n')
  }else {
    return strlen
  }
}
//Cookie操作-存
ps.setCookie = function (name, value, days){
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
//Cookie操作-取
ps.getCookie = function(name){
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
//Cookie-删除
ps.delCookie = function(name){
  var d = new Date;
  d.setTime(d.getTime() - 1);
  window.document.cookie = name + "=" + '' + ";path=/;expires=" + d.toGMTString();
}
axios.defaults.baseURL = 'https://tglpt.ybsjyyn.com/zhgl/im/'
export default ps
function encodeUrl (obj) {
  let url = ''
  ;(function (obj) {
    let kvArr = Object.entries(obj)
    kvArr.forEach(v => {
      if (Object.prototype.toString.call(v[1]) == '[object Object]') {
        // noinspection JSAnnotator
        arguments.callee(v[1])
      } else {
        url += v.join('=') + '&'
      }
    })
  })(obj)
  return url.substring(0, url.length - 1)
}
