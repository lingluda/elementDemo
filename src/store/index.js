import '../utils/dateformat'
import vue from 'vue'
import vuex from 'vuex'
import ps from '../utils/ps'
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
var todays = date.format('yyyy-MM-dd hh:mm:ss')
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
    init: false,
    getCity: null,
    getToday:today,
    getTodays:todays,
    getCurrentMonth:currentMonth,
    getYesterday:yesterday,
    getWeekAgo:weekAgo,
    getMonthAgo:MonthAgo,
    getLastMonth:LastMonth,
    getLastMonthEndDay:LastMonthEndDay,
    getLastMonthFirstDay:LastMonthFirstDay,
    getColor:[
      "#006EFF",
      "#29CC85",
      "#ffbb00",
      "#ff584c",
      "#9741d9",
      "#1fc0cc",
      "#7ff936",
      "#ff9c19",
      "#e63984",
      "#655ce6",
      "#47cc50",
    ],
  },
  getters:{
    getCityList(state) {
      return state.getCity
    },
  },
  mutations: {
    setCityList: (state, cityList) => {
      state.getCity = cityList
    },
  },
  actions: {
    init({state,commit,dispatch}){
      ps.post('get_all_city', {}, res => {
        var cityList = res.map(item => {return {value: item.id, label: item.name}})
        cityList.unshift({ value: undefined, label: '全省' },)
        commit('setCityList', cityList)
      })
  }
  }
})
