<template>
    <div class="to-xyyPie" v-loading="true">
        <div class="to-echart" ref="echart"></div>
    </div>
</template>
<script>
export default {
  props:{
   // data:Array,
    unit : Array
  },
    data(){
        return{
            data : [
                { value: 335, name: "小礼品"},
                { value: 310, name: "代金券" },
                { value: 234, name: "酒店住宿" },
                { value: 135, name: "景区门票" },
                { value: 548, name: "玻璃栈道" },
                { value: 220, name: "漂流" }
            ]
        }
    },
    mounted () {
       this.init()
      },
    methods:{
      init(){
        // 组装半圆数据
        let data = [];
        this.data.forEach(item => {
          data.push({
            value : item.value,
            name : item.name,
            label: {
              normal: {
                show: true,
              }
            },
            labelLine: {
              normal: {
                show: true,
              }
            },
          })
        });

        // 组装空数据
        this.data.forEach(item => {
          data.push({
            value : 0,
            name : "",
            label: {
              normal: {
                show: false,
              }
            },
            labelLine: {
              normal: {
                show: false,
              }
            },
          })
        });

        let dom = this.$refs.echart
        let opt = {
          legend : {
            data : ["小礼品","代金券","酒店住宿","景区门票","玻璃栈道","漂流"]
          },
          tooltip : {
            formatter : "{b} : {c}" + '次'
          },
          series : [{
            radius: ['15%', '100%'],
            center: ["50%", "10%"],
            label : {
              formatter : "{c}" + '次'
            },
            roseType: "area",
            avoidLabelOverlap: false,
            startAngle: 0,
            data: data
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
    .to-xyyPie{
        .to-echart{
            height: 100%;
        }
    }
</style>
