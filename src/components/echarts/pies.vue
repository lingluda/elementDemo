<template>
    <!-- 消费统计 > 消费类别对比 -->
    <div class="to-cashType" v-loading="true">
        <div class="to-echart" ref="echart"></div>
    </div>
</template>

<script>
export default {
  props:{
    //data:Array,
  },
    mounted() {
    this.init()
    },
  methods:{
    init(){
      let dom = this.$refs.echart
      let opt = {
        legend : {
          data : ['1月','2月','3月'],
          width : "300px",
          itemGap : 20
        },
        series : [{
          data: [{name:'1月',value:'1'},{name:'2月',value:'2'},{name:'3月',value:'2'}],
          radius: ['0', '65%'],
          center: ["50%", "40%"],
          itemStyle : {
            borderColor : "#fff"
          }
        }]
      }
      this.echart(dom, opt, "pie")
    }
  },
  watch:{
    data:'init'
  }
}
</script>


<style lang="less" scoped>
.to-cashType {
    .to-echart {
        height: 100%;
    }
}
</style>
