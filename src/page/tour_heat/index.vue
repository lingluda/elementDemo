<template>
  <div>{{indexss}}
    <hny></hny>
    <siteSearch style="margin-bottom: 10px" @selectorClick="siteClick" :cityList="cityList"></siteSearch>
    <!--<dateSearch></dateSearch>-->
    <dateSearch @selectorClick="timeClick" style="margin-right:20px"></dateSearch>
    <bary style="height: 400px"></bary>
    <lines style="height: 400px"></lines>
    <pies style="height: 400px"></pies>
    <piex style="height: 400px"></piex>
    <barys style="height: 400px"></barys>
    <tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]" style="margin: 20px 0 20px "></tablex>
    <!-- 分页控件 -->
    <!--<pagination :total="total" :pageSize.sync="pageSize" :currentPage.sync="currentPage"></pagination>-->
    <wcMap style="height: 500px;"></wcMap>
   <!--中国地图-->
    <gxMap style="height: 500px;"></gxMap>
    <!--腾讯热力图-->
    <TXhotMap style="height: 500px;"></TXhotMap>
    <!--厕所地图-->
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
      dateSearch: resolve => require(['../../components/date/time-selector.vue'], resolve),
      siteSearch: resolve => require(['../../components/date/site-selector.vue'], resolve),
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
        cityList:[],
        indexss: this.$store.state.getTodays
      }
    },
    mounted() {
      this.get_all_city()
    },
    methods:{
      //2.1.1获取所有城市
      get_all_city(){
        this.cityList =[{"value": undefined, "label": "全省"},{"code":"530100","label":"昆明市","value":"385"},{"code":"530500","label":"保山市","value":"379"},{"code":"532300","label":"楚雄州","value":"380"},{"code":"532900","label":"大理州","value":"381"},{"code":"533100","label":"德宏州","value":"382"},{"code":"533400","label":"迪庆州","value":"383"},{"code":"532500","label":"红河州","value":"384"},{"code":"530700","label":"丽江市","value":"386"},{"code":"530900","label":"临沧市","value":"387"},{"code":"533300","label":"怒江州","value":"388"},{"code":"530800","label":"普洱市","value":"389"},{"code":"530300","label":"曲靖市","value":"390"},{"code":"532600","label":"文山州","value":"391"},{"code":"532800","label":"西双版纳州","value":"392"},{"code":"530400","label":"玉溪市","value":"393"},{"code":"530600","label":"昭通市","value":"394"}]
        let cc =[{"value": undefined, "label": "全省"},{"code":"530100","label":"昆明市","value":"385"},{"code":"530500","label":"保山市","value":"379"},{"code":"532300","label":"楚雄州","value":"380"},{"code":"532900","label":"大理州","value":"381"},{"code":"533100","label":"德宏州","value":"382"},{"code":"533400","label":"迪庆州","value":"383"},{"code":"532500","label":"红河州","value":"384"},{"code":"530700","label":"丽江市","value":"386"},{"code":"530900","label":"临沧市","value":"387"},{"code":"533300","label":"怒江州","value":"388"},{"code":"530800","label":"普洱市","value":"389"},{"code":"530300","label":"曲靖市","value":"390"},{"code":"532600","label":"文山州","value":"391"},{"code":"532800","label":"西双版纳州","value":"392"},{"code":"530400","label":"玉溪市","value":"393"},{"code":"530600","label":"昭通市","value":"394"}]
        console.log(cc)
        localStorage.setItem('cityData',JSON.stringify(cc))
        /* this.ps.post('get_all_city', {}, res => {
           let cc = []
           cc = res.map(item => {return {value: item.id, label: item.name}})
           cc.unshift({ value: undefined, label: '全省' },)
           console.log(cc)
           localStorage.setItem('cityData',JSON.stringify(cc))
         })*/
      },
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
