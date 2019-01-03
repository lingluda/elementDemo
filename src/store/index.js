import '../utils/dateformat'
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

var date = new Date()
//今天
var today = date.format('yyyy-MM-dd')
var currentMonth = date.format('yyyy-MM')
//昨天
date.setDate(date.getDate()-1)
var yesterday = date.format('yyyy-MM-dd')
//七天前
date.setDate(date.getDate()-7)
var weekAgo = date.format('yyyy-MM-dd')
//30天前
date.setDate(date.getDate()-30)
var MonthAgo = date.format('yyyy-MM-dd')

export default new vuex.Store({
  state:{
    getToday:today,
    getYesterday:yesterday,
    getWeekAgo:weekAgo,
    getMonthAgo:MonthAgo
  }
})
