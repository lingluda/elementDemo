<template>
  <div>
    <div ref="echart" style="height: 100%"></div>
  </div>
</template>

<script>
  import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10} from './wcMap/base64-img.js'
  var geoCoordMap = {
    '苏州': [120.62, 31.32],
    '西宁': [105.35991668701172, 41.09057550119951],
  }
  var data = [
    {name: '苏州', value: 522},
    {name: '西宁', value: 222}
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
  var findIndex = function (name) {
    return Object.keys(geoCoordMap).findIndex((item, index) => {
      return item === name
    })
  }
  export default {
    name: "gxMap",
    mounted() {
      let geoJson = require('./js/china')
      let ig1 = 'image://' + require('../../assets/imgMap/red-small.png')
      let ig2 = require('../../assets/imgMap/red-small.png')
      echarts.registerMap('china', geoJson);
      let dom = this.$refs.echart
      let opt = {
        backgroundColor: '#fff',
        legend: {
          // orient: 'vertical',
          // left: 'left',
          bottom: 0,
          itemWidth: 16,
          itemHeight: 16,
          data: [{name: '散点', icon: ig1}, {name: '旱厕', icon: img4}, {name: '故障厕所', icon: img6}],
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (typeof(params.value)[2] == "undefined") {
              var index = findIndex(params.name)
                var str = ""
                  str = '<div style="line-height:30px">'+data[0].name+'</div>' +
                    '<div><img src="'+ig2+'">'+data[0].value+'</div>'
                  console.log(params.name)
                  console.log(index)
                  return str
          }else {
              for (let i=0;i<data.length;i++){
                var str = ""
                if (params.name==data[i].name) {
                  str = '<div style="line-height:30px">'+data[i].name+'</div>' +
                    '<div><img src="'+ig2+'">'+data[i].value+'</div>'
                  console.log(params.name)
                  return str
                }
              }
            }
          }
        },
        geo: {
          show: true,
          map: 'china',
          label: {
            /* normal: {
               show: false
             },*/
            emphasis: {
              show: false,
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#f2f2f2',
              borderColor: 'white',
              borderWidth: 2,
            },
            emphasis: {
              areaColor: '#f2f2f2',
            }
          }
        },
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            symbol: ig1,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9'
              }
            }
          },
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: 'white'
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#d1e1e8',
                borderColor: '#3B5077',
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: data
          },
        ]
      }
      this.echart(dom, opt)
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
