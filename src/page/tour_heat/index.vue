<template>
  <div class="main">{{indexss}}
    <div class="main__top">
      <div class="main__top-data">
        <div v-for="(item,index) in topData" :key="index" class="main__top-data-item">
          <div>{{item.name}}</div>
          <div>{{item.value||0}}<span style="font-size: 12px;margin-left: 10px">个</span></div>
        </div>
      </div>
    </div>
    <hny style="margin: 20px 0 20px;height: 600px;background: white"></hny>
    <siteSelector style="margin-bottom: 10px" @selectorClick="siteClick" :cityList="cityList"></siteSelector>
    <!--<dateSearch></dateSearch>-->
    <timeSelector @selectorClick="timeClick" style="margin-right:20px" :more="false"></timeSelector>
    <bary style="height: 400px"></bary>
    <lines style="height: 400px"></lines>
    <pies style="height: 400px"></pies>
    <piex style="height: 400px"></piex>
    <barys style="height: 400px"></barys>
    <div class="list">
      <tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]"
              :operation="{
              buttonName:'处理',
              moreName:'更多',
              selectList:[
               { value: '撤销', label: '撤销' },
              ]}"
              style="margin: 20px 0 20px ">
      </tablex>
    </div>
    <!-- 分页控件 -->
    <!--<pagination :total="total" :pageSize.sync="pageSize" :currentPage.sync="currentPage"></pagination>-->
    <wcMap style="height: 500px;"></wcMap>
   <!--中国地图-->
    <gxMap style="height: 500px;"></gxMap>
    <!--腾讯热力图-->
    <!--<TXhotMap style="height: 500px;"></TXhotMap>-->
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
        topData: [
          { name: '景区停车场数量', value: undefined },//travelToilet
          { name: '景区周边停车场数量', value: undefined },//smartToilet
          // { name: '停车场厕所', value: undefined },//normaToilet
          { name: '临时停车场', value: undefined },//notAGradeToilet
          { name: '智慧停车场', value: undefined },//waterRushToilet
          { name: '停车位总数', value: undefined },//droughtToilet
          { name: '剩余停车位', value: undefined },//doToilet
          { name: '出入口拥堵', value: undefined },//palnDoToilet
          { name: '异常停车场', value: undefined }
        ],
        cityList:JSON.parse(this.ps.getCookie('cityData')),
        indexss: this.$store.state.getCity
      }
    },
    mounted() {
      console.log(this.ps.getRouter())
      console.log(this.ps.getAllParams('name'))
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

<style lang="less" scoped>
 .main{
   &__top{
     &-data {
       overflow: hidden;
       display: flex;
       // justify-content: space-between;
       margin-top: 10px;
       margin-bottom: 12px;
       background-color: white;
       padding: 0 20px;
       &-item {
         flex: 1;
         box-sizing: border-box;
         margin: 27px 0 30px;
         padding-left: 20px;
         padding-right: 20px;
         // min-width: 146px;
         color: black;
         border-left: 1px solid #dcdcdc;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         &:first-child {
           border-left-width: 0;
           padding-left: 0;
         }
         &:last-child {
           padding-right: 0;
         }
         > div:first-child {
           font-size: 14px;
           font-weight: 800;
         }
         > div:nth-child(2) {
           font-size: 32px;
           font-weight: bold;
           // &::after {
           //   display: inline-block;
           //   content: '个';
           //   margin-left: 5px;
           //   font-size: 14px;
           //   font-weight: bold;
           // }
         }
       }
     }
   }
 }
</style>
