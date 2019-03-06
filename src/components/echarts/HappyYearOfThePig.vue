<template>
    <div>
      <div ref="echart" style="height: 100%;width: 100%"></div>
    </div>
</template>

<script>
  var r = function(max) {
    var m = max || 10;
    return Math.floor(Math.random() * m);
  };

  var moonAndStars = {
    type: 'graph',
    data: (function() {
      var moonPosition = {
        x: 190,
        y: 0.5
      }
      var moon = [{
        symbolSize: 70,
        x: moonPosition.x,
        y: moonPosition.y
      }, {
        symbolSize: 60,
        x: moonPosition.x - 1.5,
        y: moonPosition.y - 1.5,
        itemStyle: {
          normal: {
            color: 'rgb(51, 51, 51)'
          }
        }
      }, {
        symbolSize: 0,
        x: 0,
        y: 0
      }, {
        symbolSize: 0,
        x: 200,
        y: 100
      }];
      var num = 100;
      var stars = [];
      for (var i = 0; i < num; i++) {
        stars.push({
          symbolSize: r(3),
          x: r(200),
          y: r(50)
        })
      }
      return moon.concat(stars);
    })(),
    itemStyle: {
      normal: {
        color: '#ccc'
      }
    },
    silent: true,
    z: -1
  };

  var roofs = [
    /*三角形*/
    [1, 2, 3, 4, 5, 4, 3, 2, 1],
    /*凸*/
    [2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 4, 20, 4, 2, 2, 2],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [6, 6, 6, 6, 6, 5, 4, 3, 2, 1],
    [0.3, 1, 1.6, 2.5, 3, 3.5, 3.6, 3.7, 3.7, 3.6, 3.5, 3, 2.5, 1.6, 1, 0.3],
    [6, 6, 6, 6, 6, 2, 2, 2],
    [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5],
    [1, 1, 1, 1, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    [1, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 2, 2, 2, 4, 4, 4]

  ];
  var build = function(height) {
    var arr = [100];
    var l = 14;
    var h = height || 50;
    var addFloor = function(arr, l) {
      var a = [];
      for (var i = 0; i < arr.length; i++) {
        a.push(arr[i] + l);
      }
      return a;
    };
    for (var i = 0; i < l; i++) {
      var newRoof = addFloor(roofs[r(11)], r(h));
      if (Math.random() < .5) {
        newRoof.reverse()
      }
      arr = arr.concat(newRoof);
      if (Math.random() < .5) {
        arr.push(0)
      }
    }
    return arr;
  };
  var building = build();
  var building2 = (function() {
    var b = build(100);
    for (var i = 0; i < b.length; i++) {
      if (b[i] > building[i]) {
        b[i] = b[i] - building[i];
      }

    }
    return b;
  })()
    export default {
        name: "HappyYearOfThePig",
      mounted(){
        let dom = this.$refs.echart
        let opt = {
          title: {
            text: '  龘爷在此祝厚哥\n本命🐖年顺利嫁出去!',
            top: 20,
            left: 'center',
            textStyle: {
              fontSize: 35,
              // fontStyle:'italic',
              fontWeight: 'bold',
              color: '#ffd285'

            }
          },
          stack: true,
          grid: {
            bottom: 20,
            top: 300
          },
          xAxis: {
            data: [],
            silent: true,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            silent: true,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          series: [{
            type: 'bar',
            data: building,
            itemStyle: {
              normal: {
                color: 'rgb(38, 41, 57)'
              }
            },
            animationDelay: function(idx) {
              return idx * 10;
            }
          }, {
            type: 'bar',
            data: building2,
            itemStyle: {
              normal: {
                color: 'rgb(28, 31, 47)'
              }
            },
            animationDelay: function(idx) {
              return idx * 10 + 300;
            }
          }, {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            zlevel: 2,
            symbolSize: 3,
            effect: {
              show: true,
              period: 1,
              trailLength: 0.01,
              symbolSize: 5,
              symbol: 'pin',
              loop: true
            },
            lineStyle: {
              normal: {
                color: '#BF3EFF',
                opacity: 0.005,
                //curveness: -0.05,
                width: 0.01,
                //opacity: 0.6,
                curveness: 0.1
              }
            },
            data: [{
              coords: [ // 竖直向上
                [40, 166],
                [40, 210]
              ]
            }, { // 水平向右
              coords: [
                [41, 165],
                [65, 165]

              ]
            }, { // 水平向左
              coords: [
                [39, 165],
                [15, 165]
              ]
            }, { // 垂直向下
              coords: [
                [40, 164],
                [40, 115]
              ]
            }, { //第一象限
              coords: [
                [40, 164],
                [55, 192]
              ]
            }, { //第一象限
              coords: [
                [40, 164],
                [56, 175]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第一象限
              coords: [
                [40, 164],
                [46, 197]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第一象限
              coords: [
                [41, 190],
                [47, 215]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第一象限
              coords: [
                [48, 190],
                [57, 205]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第一象限
              coords: [
                [52, 180],
                [62, 185]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第一象限
              coords: [
                [55, 170],
                [68, 171]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第二象限
              coords: [
                [39, 166],
                [24, 190]
              ]
            }, { //第二象限
              coords: [
                [40, 164],
                [24, 175]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第二象限
              coords: [
                [40, 164],
                [31, 195]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第二象限
              coords: [
                [25, 168],
                [13, 176]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第二象限
              coords: [
                [29, 175],
                [18, 195]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第二象限
              coords: [
                [33, 179],
                [24, 210]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第二象限
              coords: [
                [36, 185],
                [35, 210]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第三象限
              coords: [
                [40, 164],
                [26, 137]
              ]
            }, { //第三象限
              coords: [
                [40, 164],
                [34, 135]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第三象限
              coords: [
                [40, 164],
                [25, 153]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第三象限
              coords: [
                [39, 144],
                [36, 120]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第三象限
              coords: [
                [34, 144],
                [22, 123]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第三象限
              coords: [
                [30, 151],
                [21, 143]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第三象限
              coords: [
                [30, 159],
                [18, 157]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { // 第四象限
              coords: [
                [40, 164],
                [55, 135]
              ]
            }, { // 第四象限
              coords: [
                [40, 164],
                [55, 152]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { // 第四象限
              coords: [
                [40, 164],
                [46, 135]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFFFF'
                }
              }
            }, { //第四象限
              coords: [
                [52, 160],
                [65, 153]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第四象限
              coords: [
                [52, 150],
                [62, 133]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第四象限
              coords: [
                [47, 144],
                [53, 123]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, { //第四象限
              coords: [
                [43, 134],
                [45, 113]
              ],
              lineStyle: {
                normal: {
                  color: '#00FF33'
                }
              }
            }, ],
            animationDelay: 1100
          }, {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            zlevel: -2,
            effect: {
              show: true,
              period: 1,
              trailLength: 0.01,
              symbolSize: 12,
              symbol: 'circle',
              loop: true
            },
            lineStyle: {
              normal: {
                color: '#ccc',
                opacity: 0,
                curveness: 0
              }
            },
            data: [{
              coords: [
                [40, 25],
                [40, 165]
              ]
            }],
            animationDelay: 1100
          }, {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            zlevel: -2,
            effect: {
              show: true,
              period: 1,
              trailLength: 0.01,
              symbolSize: 12,
              symbol: 'circle',
              loop: true
            },
            lineStyle: {
              normal: {
                color: '#ccc',
                opacity: 0,
                curveness: 0
              }
            },
            data: [{
              coords: [
                [110, 25],
                [110, 165]
              ]
            }],
            animationDelay: 1100
          }, {
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            zlevel: 2,
            symbolSize: 3,
            effect: {
              show: true,
              period: 1,
              trailLength: 0.01,
              symbolSize: 5,
              symbol: 'pin',
              loop: true
            },
            lineStyle: {
              normal: {
                color: '#ccc',
                opacity: 0.02,
                //curveness: -0.05,
                width: 0.01,
                //opacity: 0.6,
                curveness: 0.1
              }
            },
            data: [{
              coords: [ // 竖直向上
                [110, 166],
                [110, 210]
              ]
            }, { // 水平向右
              coords: [
                [111, 165],
                [135, 165]

              ]
            }, { // 水平向左
              coords: [
                [109, 165],
                [85, 165]
              ]
            }, { // 垂直向下
              coords: [
                [110, 164],
                [110, 115]
              ]
            }, { //第一象限
              coords: [
                [110, 164],
                [125, 192]
              ]
            }, { //第一象限
              coords: [
                [110, 164],
                [126, 175]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第一象限
              coords: [
                [110, 164],
                [116, 197]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第一象限
              coords: [
                [111, 190],
                [117, 215]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第一象限
              coords: [
                [118, 190],
                [127, 205]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第一象限
              coords: [
                [122, 180],
                [132, 185]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第一象限
              coords: [
                [125, 170],
                [138, 171]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第二象限
              coords: [
                [109, 166],
                [94, 190]
              ]
            }, { //第二象限
              coords: [
                [110, 164],
                [94, 175]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第二象限
              coords: [
                [110, 164],
                [101, 195]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第二象限
              coords: [
                [95, 168],
                [83, 176]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第二象限
              coords: [
                [99, 175],
                [88, 195]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第二象限
              coords: [
                [103, 179],
                [94, 210]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第二象限
              coords: [
                [106, 185],
                [105, 210]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第三象限
              coords: [
                [110, 164],
                [96, 137]
              ]
            }, { //第三象限
              coords: [
                [110, 164],
                [104, 135]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第三象限
              coords: [
                [110, 164],
                [95, 153]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第三象限
              coords: [
                [109, 144],
                [106, 120]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第三象限
              coords: [
                [104, 144],
                [92, 123]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第三象限
              coords: [
                [100, 151],
                [91, 143]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第三象限
              coords: [
                [100, 159],
                [88, 157]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { // 第四象限
              coords: [
                [110, 164],
                [125, 135]
              ]
            }, { // 第四象限
              coords: [
                [110, 164],
                [125, 152]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { // 第四象限
              coords: [
                [110, 164], // 红色象限位置错乱 由 [555, 164] 改为[110, 164]
                [116, 135]
              ],
              lineStyle: {
                normal: {
                  color: '#DD2222'
                }
              }
            }, { //第四象限
              coords: [
                [122, 160],
                [135, 153]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第四象限
              coords: [
                [122, 150],
                [132, 133]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第四象限
              coords: [
                [117, 144],
                [123, 123]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, { //第四象限
              coords: [
                [113, 134],
                [115, 113]
              ],
              lineStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, ],
            animationDelay: 1100
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function(idx) {
            return idx * 5;
          }
        }
        this.echart(dom,opt)
      }
    }
</script>

<style scoped>

</style>
