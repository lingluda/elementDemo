<template>
  <div>{{cityList}}
    <hny></hny>
    <siteSelector style="margin-bottom: 10px" @selectorClick="siteClick" :cityList="cityList"></siteSelector>
    <!--<dateSearch></dateSearch>-->
    <timeSelector @selectorClick="timeClick" style="margin-right:20px" :more="false"></timeSelector>
    <bary style="height: 400px"></bary>
    <lines style="height: 400px"></lines>
    <pies style="height: 400px"></pies>
    <piex style="height: 400px"></piex>
    <barys style="height: 400px"></barys>
    <tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]" style="margin: 20px 0 20px "></tablex>
    <!-- 分页控件 -->
    <!--<pagination :total="total" :pageSize.sync="pageSize" :currentPage.sync="currentPage"></pagination>-->
    <!--<wcMap style="height: 500px;"></wcMap>-->
   <!--中国地图-->
    <!--<gxMap style="height: 500px;"></gxMap>-->
    <!--腾讯热力图-->
    <!--<TXhotMap style="height: 500px;"></TXhotMap>-->
    <!--厕所地图-->
    <!--<pwcMap style="height: 500px;margin: 20px 0  60px 0"></pwcMap>-->
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
      timeSelector: resolve => require(['../../components/date/time-selector.vue'], resolve),
      siteSelector: resolve => require(['../../components/date/site-selector.vue'], resolve),
      barys: resolve => require(['../../components/echarts/barys.vue'], resolve),
      gxMap: resolve => require(['../../components/map/gxMap.vue'], resolve),
      TXhotMap: resolve => require(['../../components/map/TXhotMap.vue'], resolve),
      pwcMap: resolve => require(['../../components/map/wcMap.vue'], resolve),
      wcMap: resolve => require(['../../components/map/wcMap/map.vue'], resolve),
      tablex: resolve => require(['../../components/table/tablex.vue'], resolve),
      pagination: resolve => require(['../../components/table/pagination.vue'], resolve),
    },
    data() {
      return {
        cityList:JSON.parse(this.ps.getCookie('cityData')),
        //indexss: this.$store.state.getters.getCityList
      }
    },
    mounted() {
    },
    methods:{
      siteClick(params){
        console.log(params)
      },
      searchd(v){
        //this.get_total_holiday(null,null,v.date)
        console.log(v)
      },
      //5.8节假日游客数量
      timeClick (endTime, startTime) {
         console.log(endTime,startTime)
      },
    }
  }
</script>

<style scoped>

</style>
