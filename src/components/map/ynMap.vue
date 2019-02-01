<template>
  <div style="background: #fff">
    <div ref="map" style="height: 100%;width: 100%"></div>
  </div>
</template>

<script>
  import "echarts/map/js/province/yunnan.js";
    export default {
      name: "yunnanMap",
      mounted(){
        this.initMap()
      },
      methods:{
        initMap(){
          let dom = this.$refs.map
          //let map = this.$echarts.init(document.getElementById('map'))
          let opt = {
           /*   visualMap: {
                min: 0,
                max: 2000,
                text:['High','Low'],
                realtime: false,
                calculable: true,
                inRange: {
                  color: ['#e0ffff', '#006edd']
                }
              },*/
       /*     grid: {
              left: "2%",
              right: "2%",
              top: "5%",
              bottom: "40%",
              //containLabel: true
            },*/
             legend: {
                  //show: true,
               //bottom: 5,
               x:'70%',
               y:'50%',
               icon: 'circle',
                   //orient: 'horizontal',
               data:['浏览量'],
                   textStyle: {
                       color: "#000000"
                   }
               },
              series : [
                {
                  name: '浏览量',
                  type: 'map',
                  zoom: 1.2,
                  //center:['10%','90%'],
                  //roam: true,
                  //coordinateSystem: 'geo',
                  //geoIndex: 0,
                  map: '云南',
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: 'rgba(0,0,0,0.4)'
                      },
                      formatter: '{b}\n{c}',
                      borderWidth:0
                    }
                  },
                  itemStyle: {
                    normal:{
                      borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                      areaColor: null,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  data:[
                    /*  {name: '昆明市', value: 12},
                     {name: '保山市', value: 232},
                     {name: '昆明市', value: randomValue()},
                     {name: '保山市', value: randomValue()},
                     {name: '昭通市', value: randomValue()},
                     {name: '玉溪市', value: randomValue()},
                     {name: '丽江市', value: randomValue()},
                     {name: '普洱市', value: randomValue()},
                     {name: '临沧市', value: randomValue()},
                     {name: '曲靖市', value: randomValue()},
                     {name: '大理白族自治州', value: randomValue()},
                     {name: '迪庆藏族自治州', value: randomValue()},
                     {name: '怒江傈僳族自治州', value: randomValue()},
                     {name: '楚雄彝族自治州', value: randomValue()},
                     {name: '德宏傣族景颇族自治州', value: randomValue()},
                     {name: '西双版纳傣族自治州', value: randomValue()},
                     {name: '红河哈尼族彝族自治州', value: randomValue()},
                     {name: '文山壮族苗族自治州', value: randomValue()}*/
                  ]
                }
              ]
          };
          this.echart(dom, opt)
        }
      }
    }
</script>

<style scoped>

</style>
