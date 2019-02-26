<template>
  <div ref="chart" style="height:95%"></div>
</template>

<script>
  import {img1, img2, img3, img4, img5, img6, img7, img8, img9} from './base64-img.js'
  import {geoCoordMap, geoCoordMap1, geoCoordMap2, dataList} from './mock.js'

  export default {
    name: '',
    data() {
      return {};
    },

    components: {},

    computed: {},

    methods: {
      init(geoJson) {
        var convertData = function (data, geoCoordMap) {
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
        }
        echarts.registerMap('ls', geoJson)
        let dom = this.$refs.chart
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              var str = ""
              // console.log(params)
              var img2 = `<img src="${img7}"></img>`
              var img1 = `<img src="${img8}"></img>`
              var img3 = `<img src="${img9}"></img>`
              var index = params.dataIndex
              str = `${params.name}<br/>
            ${img1} 智慧厕所：${dataList[index].value}<br/>
            ${img2} 旱厕：${dataList[index].value}<br/>
            ${img3} 故障厕所：${dataList[index].value}`
              return str
            },
            textStyle: {
              fontSize: 12,
              // lineHeight:80
            }
            // backgroundColor: 'white',
            // borderColor: '#9EC8FF',
          },
          geo: {
            map: 'ls',
            // show: true,
            // roam: false,
            label: {
              emphasis: {
                show: false
              }
            },
            zoom: 1.1,
            aspectScale: 1,
            itemStyle: {
              normal: {
                areaColor: '#f2f2f2',
                borderColor: 'white',
                borderWidth: 2,
                // shadowColor: '#031525',
                // shadowBlur: 20
              },
              emphasis: {
                areaColor: '#f2f2f2',
                // shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(0, 0, 0, 0.3)',
                // shadowBlur: 5,
                // shadowOffsetX: 0,
                // shadowOffsetY: 10,
              }
            },
            // zoom: 1,
          },
          legend: {
            // orient: 'vertical',
            // left: 'left',
            bottom: 0,
            itemWidth :16,
            itemHeight :16,
            data: [{name: '智慧厕所', icon: img5}, {name: '旱厕', icon: img4}, {name: '故障厕所', icon: img6}],
          },
          series: [
            {
              type: 'map',
              map: 'ls',
              geoIndex: 0,
              // aspectScale: 1.1, //长宽比
              showLegendSymbol: true, // 存在legend时显示
              // zoom: 1.2,
              roam: false,
              data: dataList
              // data:convertData(data)
              // itemStyle: {
              //   normal: {
              //     areaColor: '#f2f2f2',
              //     borderColor: 'white',
              //     borderWidth: 2
              //   },
              //   emphasis: {
              //     areaColor: '#f2f2f2',
              //     // shadowColor: 'rgba(0, 0, 0, 0.3)',
              //     borderColor: 'rgba(0, 0, 0, 0.3)',
              //     // shadowBlur: 5,
              //     // shadowOffsetX: 0,
              //     // shadowOffsetY: 10,
              //   }
              // },
              // label: {
              //   emphasis: {
              //     show: false
              //   }
              // }
            },
            {
              name: '智慧厕所',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(dataList, geoCoordMap),
              symbolSize: function (val) {
                return val[2] / 30;
              },
              symbol: img2,
              // tooltip: {},
              // showEffectOn: 'render',
              // rippleEffect: {
              //   brushType: 'stroke'
              // },
              // hoverAnimation: true,
              // label: {
              //   normal: {
              //     show: false,
              //   },
              //   emphasis: {
              //     formatter: function (value) {
              //       return value.name + ':' + value.value[2]
              //     },
              //     position: 'right',
              //     show: true,
              //   }
              // },
              // itemStyle: {
              //   normal: {
              //     color: '#05C3F9',
              //     shadowBlur: 10,
              //     shadowColor: '#05C3F9'
              //   }
              // },
              // zlevel: 1,
              // label: {
              //   show: false
              // }
            },
            {
              name: '旱厕',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(dataList, geoCoordMap1),
              symbolSize: function (val) {
                return val[2] / 20;
              },
              symbol: img1
              // showEffectOn: 'render',
              // rippleEffect: {
              //   brushType: 'stroke'
              // },
              // hoverAnimation: true,
              // label: {
              //   normal: {
              //     show: false,
              //   },
              //   emphasis: {
              //     formatter: function (value) {
              //       return value.name + ':' + value.value[2]
              //     },
              //     position: 'right',
              //     show: true,
              //   }
              // },
              // itemStyle: {
              //   normal: {
              //     color: '#05C3F9',
              //     shadowBlur: 10,
              //     shadowColor: '#05C3F9'
              //   }
              // },
              // zlevel: 1
            },
            {
              name: '故障厕所',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(dataList, geoCoordMap2),
              symbolSize: function (val) {
                return val[2] / 20;
              },
              symbol: img3,
              // tooltip: {
              //   trigger: 'item',
              //   formatter: '{b}<br/>{c} (p / km2)'
              // },
              //   showEffectOn: 'render',
              //   rippleEffect: {
              //     brushType: 'stroke'
              //   },
              //   hoverAnimation: true,
              //   label: {
              //     normal: {
              //       show: false,
              //     },
              //     emphasis: {
              //       formatter: function (value) {
              //         return value.name + ':' + value.value[2]
              //       },
              //       position: 'right',
              //       show: true,
              //     }
              //   },
              //   itemStyle: {
              //     normal: {
              //       color: '#05C3F9',
              //       shadowBlur: 10,
              //       shadowColor: '#05C3F9'
              //     }
              //   },
              //   zlevel: 1
            }
          ]
        }
        this.echart(dom, opt)
      }
    },
    mounted() {
      var json = require('./yunnan.json')
      this.init(json)
    }
  }
</script>
<style type='text/less' lang='less' scoped>
</style>
