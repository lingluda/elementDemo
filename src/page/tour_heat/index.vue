<template>
  <div>{{indexss}}
    <hny></hny>
    <!--<dateSearch></dateSearch>-->
    <dateSearch :type="1" :date="'2018-11-11'" v-on:sdate="searchd"></dateSearch>
    <dateSearch :type="2" :daterange="['2018-11-11','2018-11-11']" v-on:sdate="searchd"></dateSearch>
    <bary style="height: 400px"></bary>
    <lines style="height: 400px"></lines>
    <pies style="height: 400px"></pies>
    <piex style="height: 400px"></piex>
    <barys style="height: 400px"></barys>
    <ynMap style="height: 400px"></ynMap>
    <tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]" style="margin: 20px 0 20px "></tablex>
    <wcMap style="height: 500px;"></wcMap>
    <gxMap style="height: 500px;"></gxMap>
    <TXhotMap style="height: 500px;"></TXhotMap>
    <pwcMap style="height: 500px;margin: 20px 0  60px 0"></pwcMap>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      hny: resolve => require(['../../components/echarts/HappyYearOfThePig.vue'], resolve),
      bary: resolve => require(['../../components/echarts/bary.vue'], resolve),
      lines: resolve => require(['../../components/echarts/lines.vue'], resolve),
      pies: resolve => require(['../../components/echarts/pies.vue'], resolve),
      piex: resolve => require(['../../components/echarts/piex.vue'], resolve),
      dateSearch: resolve => require(['../../components/date/dateSearch.vue'], resolve),
      barys: resolve => require(['../../components/echarts/barys.vue'], resolve),
      ynMap: resolve => require(['../../components/map/ynMap.vue'], resolve),
      gxMap: resolve => require(['../../components/map/gxMap.vue'], resolve),
      TXhotMap: resolve => require(['../../components/map/TXhotMap.vue'], resolve),
      pwcMap: resolve => require(['../../components/map/wcMap.vue'], resolve),
      wcMap: resolve => require(['../../components/map/wcMap/map.vue'], resolve),
      tablex: resolve => require(['../../components/table/tablex.vue'], resolve),
    },
    data() {
      return {
        indexss: this.$store.state.getCurrentMonth
      }
    },
    mounted() {
      this.get_total_holiday(null,null,'2018-11-11')
    },
    methods:{
      searchd(v){
        this.get_total_holiday(null,null,v.date)
        console.log(v)
      },
      //5.8节假日游客数量
      get_total_holiday (a, s, d) {
        this.bxdata = []
        this.bydata = []
        this.ps.post('tourist/get_total_holiday', {area: a, scenic: s, date: d}, data => {
         console.log(data)
        })
      },
    }
  }
</script>

<style scoped>

</style>
