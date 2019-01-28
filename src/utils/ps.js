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
axios.defaults.baseURL = 'http://tour.tcloud.mobi/ytbi/func/'
export default ps
