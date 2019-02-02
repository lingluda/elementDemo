import '../utils/dateformat'
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

var date = new Date()
var month = date.getMonth()
var year = date.getUTCFullYear()
if (month==0){
  month=12;
  year=year-1;
}
if (month < 10) {
  month = "0" + month;
}
//上月最大天数
var myDate = new Date(year, month, 0);
var fullDate = myDate.getDate()
//今天
var today = date.format('yyyy-MM-dd')
var currentMonth = date.format('yyyy-MM')
//昨天
date.setDate(date.getDate()-1)
var yesterday = date.format('yyyy-MM-dd')
//七天前
date.setDate(date.getDate()-6)
var weekAgo = date.format('yyyy-MM-dd')
//30天前
date.setDate(date.getDate()-23)
var MonthAgo = date.format('yyyy-MM-dd')
//上个月
var LastMonth = year + "-" + month
//上个月最后一天
var LastMonthEndDay = year + "-" + month+"-"+fullDate
//上个月第一天
var LastMonthFirstDay = year + "-" + month+"-01"
export default new vuex.Store({
  state:{
    getToday:today,
    getCurrentMonth:currentMonth,
    getYesterday:yesterday,
    getWeekAgo:weekAgo,
    getMonthAgo:MonthAgo,
    getLastMonth:LastMonth,
    getLastMonthEndDay:LastMonthEndDay,
    getLastMonthFirstDay:LastMonthFirstDay,
  }
})
