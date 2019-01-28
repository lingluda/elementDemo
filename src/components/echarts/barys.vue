<template>
  <!-- 消费统计 > 景区收入统计 -->
  <div class="to-scenicIncome">
    <div class="to-echart" ref="echart"></div>
  </div>
</template>

<script>
  export default {
    props:{
      data:Array,
    },
    mounted() {
      let dom = this.$refs.echart
      let opt = {
        legend: {
          show : true,
          data : ["云顶","天门山","百漈沟","青云山"],
        },
        color:['#006EFF', '#0FC05E', '#FADA66','#CCCCCC'],
        grid : {
          bottom : "15%"
        },
        yAxis : {
          splitLine : {
            lineStyle : {
              type : "dashed"
            }
          }
        },
        xAxis : {
          data : ["景点购票","交通支出","酒店住宿","餐饮消费"]
        },
        series : [
          {
            type : "bar",
            stack : "总量",
            name : "云顶",
            data : [1000,2000,1500,3000]
          },
          {
            type : "bar",
            stack : "总量",
            name : "天门山",
            data : [1500,3600,1800,800]
          },
          {
            type : "bar",
            stack : "总量",
            name : "百漈沟",
            data : [4000,1500,2000,2500]
          },
          {
            type : "bar",
            stack : "总量",
            name : "青云山",
            data : [4000,1500,2000,2500]
          }
        ]
      }
      this.echart(dom, opt, "barx")
    }
  }
</script>


<style lang="less" scoped>
  .to-scenicIncome {
    .to-echart {
      height: 100%;
    }
  }
</style>
