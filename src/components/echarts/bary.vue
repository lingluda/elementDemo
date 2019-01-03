<template>
  <!-- 消费统计 > TOP5住宿率 -->
  <div class="to-hotelTop">
    <div class="to-echart" ref="echart"></div>
  </div>
</template>

<script>
  export default {
    props:{
      x:Array
    },
    mounted() {
      let dom = this.$refs.echart
      let opt = {
        title: {
          text: "TOP5住宿率 (%)"
        },
        grid: {
          top: "10%"
        },
        xAxis : {
          data : ["云山假日酒店","御温泉酒店","天宇酒店","冠景温泉酒店","香米拉酒店"]
        },
        series : [{
          data : [54,88,60,35,60]
        }]
      }
      this.echart(dom, opt, "barx")
    }
  }
</script>


<style lang="less" scoped>
  .to-hotelTop {
    .to-echart {
      height: 400px;
    }
  }
</style>
