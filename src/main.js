// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from '../src/store/index.js'
import ps from './utils/ps'
//适配ie
require("babel-polyfill"); //es5
//import "babel-polyfill"; //es6

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.ps = ps
// 封装echarts
import myEcharts from "./libs/echarts/index.js"
Vue.prototype.echart = myEcharts;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
