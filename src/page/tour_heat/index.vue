<template>
  <div>
    <!--<dateSearch></dateSearch>-->
    <dateSearch :type="1" :date="'2018-11-11'" v-on:sdate="searchd"></dateSearch>
    <dateSearch :type="2" :daterange="['2018-11-11','2018-11-11']" v-on:sdate="searchd"></dateSearch>
    <bary style="height: 400px"></bary>
    <lines style="height: 400px"></lines>
    <pies style="height: 400px"></pies>
    <piex style="height: 400px"></piex>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      bary: resolve => require(['../../components/echarts/bary.vue'], resolve),
      lines: resolve => require(['../../components/echarts/lines.vue'], resolve),
      pies: resolve => require(['../../components/echarts/pies.vue'], resolve),
      piex: resolve => require(['../../components/echarts/piex.vue'], resolve),
      dateSearch: resolve => require(['../../components/date/dateSearch.vue'], resolve),
    },
    data() {
      return {
        indexss: this.$store.state.getToday
      }
    },
    mounted() {
      this.get_total_holiday(null,null,null)
    },
    methods:{
      searchd(v){
        console.log(222222222)
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
