<template>
  <div>
    <div ref="echart" style="height: 100%"></div>
  </div>
</template>

<script>
  import {img1, img2, img3, img4, img5, img6, img7, img8, img10} from './wcMap/base64-img.js'
  export default {
    name: "gxMap",
    mounted() {
      let geoJson = require('./js/china')
      echarts.registerMap('china', geoJson);
      var geoCoordMap = {
        '苏州': [120.62, 31.32],
        '西宁': [105.35991668701172, 41.09057550119951],
      }
      var data = [
        {name:'苏州',value:522},
        {name:'西宁',value:222}
      ];
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      let dom = this.$refs.echart
      let opt = {
        backgroundColor: '#fff',
        geo: [
          {
            map: "china",
            z: 1,
            aspectScale: 0.75, //地图的长宽比
            zoom: 0.9,
            itemStyle: {
              areaColor: 'transparent',
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,

              },
              label: {
                show: false
              }
            }
          },
          {
            map: "china",
            z: 11,
            aspectScale: 0.75, //地图的长宽比
            zoom: 0.9,
            itemStyle: {
              areaColor: '#f2f2f2',
              // areaColor:'transparent',
              borderColor: '#fff',
              borderWidth: 1
            },
            label: {
              show: false
            },
            emphasis: {
              itemStyle: {
                areaColor: '#f2f2f2',
                borderColor:  'rgba(0, 0, 0, 0.3)',
                borderWidth: 1,
              },
              label: {
                show: false
              }
            }
          }
        ],
        series: [
          {
            type: 'scatter',
            //name: "工业",
            mapType: 'china',
            coordinateSystem: 'geo',
            symbolSize: function(val) {
              return Math.max(val[2] / 20, 8);
            },
            geoIndex: 1,
            z: 18,
            symbol: img6,
            data: convertData(data),
            symbolKeepAspect: true,
            itemStyle: {
              opacity: 1
            }
          },
        ]
      }
      this.echart(dom, opt)
    }
  }
</script>

<style scoped>

</style>
