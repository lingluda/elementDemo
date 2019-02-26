<template>
  <div class="mapContainer">
    <div id="map-canvas" style="width: 100%;height: 400px;" class="heatmap">
      <div class="visualmap">
        <div>
          <span>颜色对应人口密度</span>
          <span style="float:right; margin-right:10px;">人/100平方米</span>
        </div>
        <div class="bargrad"></div>
        <div class="range">
          <span>0-5</span>
          <span>6-11</span>
          <span>12-17</span>
          <span>18-21</span>
          <span>>21</span>
        </div>
      </div>
    </div>
    <div id="main" style="width: 100%; height: 70px; border: 1px solid #ccc;"></div>
    <Spin size="large" fix v-if="testData.length==0"></Spin>
  </div>
</template>

<script>
  var heatmap
  export default {
    name: 'hotMap',
    props: {
      centerx: {
        type: Array,
        default:function () {
          return [102.6618, 24.962]
        }
      },
      timelines: {
        type: Array,
        default: function () {
          return ['05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        }
      },
      testData: {
        type: Array,
        default: function () {
        return [{
            'city': '385',
            'scenic': 'e4fc748a-a60c-4716-687b-01254d621833',
            'points': [{'lng': 102.6618, 'weight': 1, 'lat': 24.962}, {
              'lng': 102.6649,
              'weight': 1,
              'lat': 24.9652
            }, {'lng': 102.6619, 'weight': 1, 'lat': 24.9666}, {
              'lng': 102.6645,
              'weight': 1,
              'lat': 24.9646
            }, {'lng': 102.6568, 'weight': 1, 'lat': 24.9693}, {
              'lng': 102.6546,
              'weight': 1,
              'lat': 24.9658
            }, {'lng': 102.6627, 'weight': 1, 'lat': 24.9688}, {
              'lng': 102.6644,
              'weight': 1,
              'lat': 24.9625
            }, {'lng': 102.6573, 'weight': 1, 'lat': 24.9686}, {
              'lng': 102.6578,
              'weight': 1,
              'lat': 24.9696
            }, {'lng': 102.6554, 'weight': 1, 'lat': 24.9631}, {
              'lng': 102.6614,
              'weight': 1,
              'lat': 24.9645
            }, {'lng': 102.6575, 'weight': 1, 'lat': 24.9695}, {
              'lng': 102.6584,
              'weight': 1,
              'lat': 24.9679
            }, {'lng': 102.6589, 'weight': 1, 'lat': 24.9664}, {
              'lng': 102.6657,
              'weight': 1,
              'lat': 24.9681
            }, {'lng': 102.6641, 'weight': 1, 'lat': 24.9633}, {
              'lng': 102.6638,
              'weight': 1,
              'lat': 24.9669
            }, {'lng': 102.6646, 'weight': 1, 'lat': 24.9681}, {
              'lng': 102.6573,
              'weight': 1,
              'lat': 24.969
            }, {'lng': 102.6572, 'weight': 2, 'lat': 24.9674}, {
              'lng': 102.6639,
              'weight': 1,
              'lat': 24.9636
            }, {'lng': 102.6601, 'weight': 1, 'lat': 24.965}, {
              'lng': 102.6629,
              'weight': 1,
              'lat': 24.9646
            }, {'lng': 102.662, 'weight': 1, 'lat': 24.9639}, {
              'lng': 102.6584,
              'weight': 1,
              'lat': 24.9632
            }, {'lng': 102.6646, 'weight': 1, 'lat': 24.9665}, {
              'lng': 102.6559,
              'weight': 1,
              'lat': 24.9625
            }, {'lng': 102.6587, 'weight': 1, 'lat': 24.9692}, {
              'lng': 102.662,
              'weight': 1,
              'lat': 24.9622
            }, {'lng': 102.6646, 'weight': 1, 'lat': 24.9647}, {
              'lng': 102.6557,
              'weight': 1,
              'lat': 24.963
            }, {'lng': 102.6629, 'weight': 1, 'lat': 24.9689}, {
              'lng': 102.6596,
              'weight': 1,
              'lat': 24.9682
            }, {'lng': 102.6607, 'weight': 1, 'lat': 24.9674}, {
              'lng': 102.6587,
              'weight': 1,
              'lat': 24.9689
            }, {'lng': 102.6659, 'weight': 1, 'lat': 24.9673}, {
              'lng': 102.6646,
              'weight': 1,
              'lat': 24.9642
            }, {'lng': 102.6644, 'weight': 1, 'lat': 24.9655}, {
              'lng': 102.659,
              'weight': 1,
              'lat': 24.9696
            }, {'lng': 102.658, 'weight': 1, 'lat': 24.9658}, {
              'lng': 102.6634,
              'weight': 1,
              'lat': 24.963
            }, {'lng': 102.6564, 'weight': 1, 'lat': 24.9689}, {
              'lng': 102.6569,
              'weight': 1,
              'lat': 24.9694
            }, {'lng': 102.6596, 'weight': 1, 'lat': 24.9665}, {
              'lng': 102.6615,
              'weight': 1,
              'lat': 24.9669
            }, {'lng': 102.6628, 'weight': 1, 'lat': 24.9679}, {
              'lng': 102.6645,
              'weight': 1,
              'lat': 24.9654
            }, {'lng': 102.6591, 'weight': 1, 'lat': 24.963}, {
              'lng': 102.6608,
              'weight': 1,
              'lat': 24.9634
            }, {'lng': 102.6557, 'weight': 1, 'lat': 24.9671}, {
              'lng': 102.6645,
              'weight': 1,
              'lat': 24.9625
            }, {'lng': 102.6584, 'weight': 1, 'lat': 24.9634}, {
              'lng': 102.6653,
              'weight': 1,
              'lat': 24.968
            }, {'lng': 102.6579, 'weight': 1, 'lat': 24.9655}, {
              'lng': 102.6577,
              'weight': 1,
              'lat': 24.9694
            }, {'lng': 102.6644, 'weight': 1, 'lat': 24.967}, {
              'lng': 102.6599,
              'weight': 1,
              'lat': 24.9664
            }, {'lng': 102.6597, 'weight': 1, 'lat': 24.9688}, {
              'lng': 102.6574,
              'weight': 1,
              'lat': 24.9649
            }, {'lng': 102.6628, 'weight': 1, 'lat': 24.9638}, {
              'lng': 102.6577,
              'weight': 1,
              'lat': 24.965
            }, {'lng': 102.6558, 'weight': 1, 'lat': 24.9645}],
            'district': '3066',
            'time': '00:00',
            'timestamp': '2018-11-11T00:00:00.000+0800'


        }
    ]
    }
    }
    },
    data () {
      return {
        city: '381',
        scenic: 'e4fc748a-a60c-4716-687b-01254d621833',
        date: '2018-11-11',
        power: '60',
        //centerx: [],
        //timelines: [],
        //arrIndex: '',
       // testData: []
      }
    },
    mounted () {
      this.initMap()
    },
    methods: {
     /* init () {
        this.timelines = []
        // http.get('bi/get_scenic_tourist_heat_dist',{city_id:this.city,date:this.date,scenic:this.scenic,min:this.power}).then(resp=>{
        this.ps.post('func/get_scenic_tourist_heat_dist', {
          date: '2018-11-11',
          scenic: 'e4fc748a-a60c-4716-687b-01254d621833',
          min: '60'
        }, resp => {
          console.log(resp)
          this.centerx = [resp[0].points[0].lng, resp[0].points[0].lat]
          this.testData = resp
          for (var i = 0; i < resp.length; i++) {
            this.timelines.push(resp[i].time)
          }
          this.initMap()
        })
      },*/
      initMap () {
        var map = new qq.maps.Map(document.getElementById('map-canvas'), {
          zoom: 16,
          mapTypeControlOptions: {
            //设置控件的地图类型ID，ROADMAP显示普通街道地图，SATELLITE显示卫星图像，HYBRID显示卫星图像上的主要街道透明层
            mapTypeIds: [
              qq.maps.MapTypeId.ROADMAP,
              qq.maps.MapTypeId.SATELLITE,
              qq.maps.MapTypeId.HYBRID
            ],
            //设置控件位置相对上方中间位置对齐
            position: qq.maps.ControlPosition.TOP_LEFT
          },
          zoomControl: false, //启用缩放控件
          panControl: false,
          center: new qq.maps.LatLng(this.centerx[1], this.centerx[0])
        })
        //地图异步加载，在idle或者tilesloaded后初始化
        let self1 = this
        const heatValueMax = 20
        qq.maps.event.addListenerOnce(map, 'idle', function () {
          if (QQMapPlugin.isSupportCanvas) {
            heatmap = new QQMapPlugin.HeatmapOverlay(map,
              {
                //点半径，设置为1即可
                'radius': 1,
                //热力图最大透明度
                'maxOpacity': 0.8,
                //是否在每一屏都开启重新计算，如果为true则每一屏都会有一个红点
                'useLocalExtrema': false,
                //设置大小字段
                'valueField': 'count'
              }
            )
            //绘制热力图
            heatmap.setData({max: heatValueMax, data: self1.testData[self1.testData.length - 1].points})
          } else {
            alert('您的浏览器不支持canvas，无法绘制热力图！！')
          }
        })
        let chart = this.$echarts.init(document.getElementById('main'))
        chart.setOption({
          timeline: {   // 时间轴样式
            axisType: 'category',
            data: this.timelines,
            playInterval: 1000,
            bottom: '0',
            symbolSize: 15,
            autoPlay: false,
            currentIndex: this.testData.length - 1,
            loop: true,
            realtime: true,
            width: '95%',
            x: '10px',
            controlPosition: 'right',
            lineStyle: {
              color: '#e5e5e5',
              width: 5,
            },
            label: {
              normal: {
                color: '#adadad',
              },
              fontSize: 12,
              emphasis: {
                color: '#0c70f9',
              },
            },
            checkpointStyle: {
              color: '#0c70f9',
              borderColor: '#0c70f9'
            },
            controlStyle: {
              normal: {color: '#0c70f9'},
              emphasis: {color: '#0c70f9'},
              textStyle: {
                color: '#0c70f9'
              },
            },
          }
        }, true)
        let self = this
        chart.on('timelinechanged', function (timeLineIndex) {
          console.log(parseInt(timeLineIndex.currentIndex))
          // 设置 每个series里的xAxis里的值
          self.arrIndex = parseInt(timeLineIndex.currentIndex)
            if(self.arrIndex%2==0){
              heatmap = new QQMapPlugin.HeatmapOverlay(map,
                {
                  //点半径，设置为1即可
                  "radius": 1,
                  //热力图最大透明度
                  "maxOpacity": 0.8,
                  //是否在每一屏都开启重新计算，如果为true则每一屏都会有一个红点
                  "useLocalExtrema": true,
                  //设置大小字段
                  "valueField": 'count'
                }
              );
              heatmap.setData({max: heatValueMax, data: self.testData[0].points})
            }else {
              heatmap.setData({max: 100, data: []});
              heatmap.destroy();
            }
        })
      },
    },
    watch: {
      testData: 'initMap',
      city: 'init',
      date: 'init',
      power: 'init',
    }
  }
</script>

<style lang="less" scoped>
  .mapContainer {
    position: relative;
  }

  .mapContainer .heatmap {
    width: 100%;
    height: 600px
  }

  .mapContainer .visualmap {
    width: 350px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 1;
  }

  .mapContainer .visualmap div {
    color: #fff;
    margin-top: 10px;
    margin-left: 10px;
  }

  .mapContainer .visualmap .range {
    margin-top: 5px;
  }

  .mapContainer .visualmap .range span {
    margin-left: 15px;
    margin-right: 20px;
  }

  .mapContainer .visualmap .bargrad {
    background: -webkit-linear-gradient(left, red, orange, yellow, green, blue);
    background: -o-linear-gradient(left, red, orange, yellow, green, blue);
    background: -moz-linear-gradient(left, red, orange, yellow, green, blue);
    background: linear-gradient(to left, red, orange, yellow, #4cff2f, #47fff4, blue);
    height: 6px;
    border-radius: 5px;
    position: relative;
    margin: 5px 10px 0px 10px;
    z-index: 2;
    background-color: #fff;
  }
</style>
