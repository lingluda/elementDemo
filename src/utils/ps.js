import axios from 'axios'
import qs from 'qs'
import '../utils/dateformat.js'
import ElementUI from 'element-ui'
//import router from '../router'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['token_x'] = localStorage.getItem('token')||'1111';        //配置请求头
// axios.defaults.baseURL = '';   //配置接口地址
// axios.defaults.baseURL = 'https://tglpt.ybsjyyn.com/zhgl/im/'
axios.defaults.baseURL = 'http://localhost/'

let ps = {}
ps.post = function (url,params,callback) {
  axios.post(url,qs.stringify(params)).then(resp => {
    if (resp.data.code==0){
    callback(resp.data)
    }else {
      ElementUI.Message.error(resp.data.msg);
    }
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
//获取url？全部参数
ps.getAllParams = function(prm){
  var args = getUrlAllParams();
  //如果要查找参数key:
  if (args[prm] != undefined) {
    //如果要查找参数key:
    return args[prm];
  } else {
    return "";
  }
}
//获取URL的路由
ps.getRouter = function(){
   return window.location.href.split("#/")[1];
}


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
function getUrlAllParams() {
  var args = new Object();
  var query = window.location.href; //获取查询串
  console.log(window.location.href)
  console.log(window.location.search)
  query=query.substring(query.lastIndexOf('?')+1)
  var pairs = query.split("&"); //在逗号处断开
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('='); //查找name=value
    if (pos == -1) continue; //如果没有找到就跳过
    var argname = pairs[i].substring(0, pos); //提取name
    var value = pairs[i].substring(pos + 1); //提取value
    args[argname] = unescape(value); //存为属性
  }
  return args;
}
