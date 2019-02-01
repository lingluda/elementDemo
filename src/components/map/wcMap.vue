
 <template>
  <div class="tmap-container">
    <!-- 腾讯地图-要素管理-厕所管理-景区-景区管理概况 -->
    <!--说明：
     地图组件：  <XXXX :centerpoint="mappoint" @showToiletDetail="showToiletDetail"></XXXX>
     输入数据：mappoint：{
        lat: "24.815763", //中心点坐标
        lng: "103.325472", //中心点坐标
        mapdata: [ //厕所的坐标和类型
        {
          id: "", //id
          title: "", //标题
          type: "", //类型(1等级厕所、2水冲、3旱厕、4正在建设、5规划建设、6拥堵厕所等)
          lat: "", //纬度
          lng: "" //经度
        }
     }
     回调方法： 父组件中的方法：showToiletDetail
    -->
    <div id="t-map">
      <!-- 腾讯地图 -->
    </div>
    <div class="maplegend">
      <!-- 图例浮层 -->
      <div class="toilet-level">等级厕所(A/2A/3A)</div>
      <div class="toilet-water">水冲</div>
      <div class="toilet-drought">旱厕</div>
      <div class="toilet-build">正在建设</div>
      <div class="toilet-plan">规划建设</div>
      <div class="toilet-jam">拥堵厕所</div>
    </div>
  </div>
</template>

<script>
//import { TMap } from "../../../libs/tmap/tmap"; //引入腾讯地图js
import datainfo from "./js/tmap-data.js"; //数据源--测试模拟

export default {
  props: ["centerpoint"], //传进来的数据
  data() {
    return {
      lat: "24.815763", //中心点坐标
      lng: "103.325472", //中心点坐标
      mapdata: [ //厕所的坐标和类型
        {
          id: "", //id
          title: "", //标题
          type: "", //类型(1等级厕所、2水冲等)
          lat: "", //纬度
          lng: "" //经度
        }
      ],
      markid: "" //查看明细时显示的id
    };
  },
  methods: {
    initMap() {
      //初始化地图
      this.clearOverlays(); //清理标记

      //获取输入的中心点坐标，要显示的坐标点
      if (this.centerpoint != "" && this.centerpoint != undefined) {
        this.lat = this.centerpoint.lat;
        this.lng = this.centerpoint.lng;
        this.mapdata = this.centerpoint.mapdata;
      } else {
        //模拟数据
        if (datainfo != "" && datainfo != undefined) {
          this.lat = datainfo.lat;
          this.lng = datainfo.lng;
          this.mapdata = datainfo.mapdata;
        }
      }

        var map = new qq.maps.Map(document.getElementById("t-map"), {
          center: new qq.maps.LatLng(this.lat, this.lng), // 地图的中心地理坐标。
          zoom: 18,
          zoomControl: true, //显示、隐藏-地图缩放控件
          zoomControlOptions: {
            //设置控件位置相对右下角对齐
            position: qq.maps.ControlPosition.BOTTOM_RIGHT,
            //设置缩放控件样式为仅包含放大缩小两个按钮
            style: qq.maps.ZoomControlStyle.SMALL
          },
          panControl: false, //显示、隐藏-平移控件

          //设置控件的地图类型和位置
          mapTypeControlOptions: {
            //设置控件的地图类型ID
            mapTypeIds: [qq.maps.MapTypeId.ROADMAP] //ROADMAP显示普通街道地图
          },
          mapTypeControl: false //地图类型控件，若为false则停用状态地图类型控件
        });

        //添加提示窗
        var infoWin = new qq.maps.InfoWindow({
          map: map
        });

        //标记的图标
        var icon1 = require("../../assets/tmapicon/level.png"); //等级厕所
        var icon11 = require("../../assets/tmapicon/level-click.png");
        var icon2 = require("../../assets/tmapicon/water.png"); //水冲
        var icon22 = require("../../assets/tmapicon/water-click.png");
        var icon3 = require("../../assets/tmapicon/drought.png"); //旱厕
        var icon33 = require("../../assets/tmapicon/drought-click.png");
        var icon4 = require("../../assets/tmapicon/build.png"); //正在建设
        var icon44 = require("../../assets/tmapicon/build-click.png");
        var icon5 = require("../../assets/tmapicon/plan.png"); //规划建设
        var icon55 = require("../../assets/tmapicon/plan-click.png");
        var icon6 = require("../../assets/tmapicon/jam.png"); //拥堵厕所
        var icon66 = require("../../assets/tmapicon/jam-click.png");

        let data = this.mapdata;
        //添加标记
        for (let i = 0; i < data.length; i++) {
          let markiconUrl = ""; //显示图标
          let markiconUrlclick = ""; //显示图标(点击、选中时)
          switch (data[i].type) {
            case "2":
              markiconUrl = icon2;
              markiconUrlclick = icon22;
              break;
            case "3":
              markiconUrl = icon3;
              markiconUrlclick = icon33;
              break;
            case "4":
              markiconUrl = icon4;
              markiconUrlclick = icon44;
              break;
            case "5":
              markiconUrl = icon5;
              markiconUrlclick = icon55;
              break;
            case "6":
              markiconUrl = icon6;
              markiconUrlclick = icon66;
              break;
            default:
              markiconUrl = icon1;
              markiconUrlclick = icon11;
              break;
          }

          //给定位的位置添加图片标注
          let marker = new qq.maps.Marker({
            position: new qq.maps.LatLng(data[i].lat, data[i].lng),
            icon: new qq.maps.MarkerImage(markiconUrl),
            map: map
          });
          //给定位的位置添加文本标注
          //   var marker = new qq.maps.Label({
          //     position: new qq.maps.LatLng(data[i].lat, data[i].lng),
          //     map: map,
          //     content: data[i].title
          //   });

          var tmpmarkids = []; //临时存储坐标的id，用于选中/取消选中

          qq.maps.event.addListener(marker, "click", () => {
            //添加监听事件--点击事件,图标变成选中状态

            //判断是否选中
            if (tmpmarkids.indexOf(data[i].id) > -1) {
              tmpmarkids.splice(tmpmarkids.indexOf(data[i].id), 1); //移除-图标

              //图标变成未选中状态
              marker.setPosition(
                new qq.maps.LatLng(parseFloat(data[i].lat), data[i].lng)
              );
              marker.setIcon(new qq.maps.MarkerImage(markiconUrl));
            } else {
              tmpmarkids.push(data[i].id); //添加-图标

              this.callback(data[i].id); //联动父组件方法

              //图标变成选中状态
              marker.setPosition(
                new qq.maps.LatLng(
                  parseFloat(data[i].lat) - 0.00007,
                  data[i].lng
                )
              );
              marker.setIcon(new qq.maps.MarkerImage(markiconUrlclick));

            //   //提示窗位置
            //   infoWin.open();
            //   infoWin.setContent(
            //     '<div style="text-align:center;white-space:nowrap;margin:10px;"> ' +
            //       data[i].title +
            //       " </div>"
            //   );
            //   infoWin.setPosition(
            //     new qq.maps.LatLng(
            //       parseFloat(data[i].lat) + 0.00004,
            //       data[i].lng
            //     )
            //   );
            }
          });
        }
    },
    clearOverlays() {
      // 清除已有的地图标记
      if (this.markersArray) {
        this.markersArray.map(item => {
          item.setMap(null);
        });
      }
    },
    callback(val) {
      //调用父组件中的方法
      this.$emit("showToiletDetail", val);
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style lang="less" scoped>
.tmap-container {
  width: 100%;
  height: 100%;

  #t-map {
    width: 100%;
    height: 100%;
  }

  .maplegend {
    width: 180px;
    height: 190px;
    border: 0px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
    position: relative;
    top: -210px;
    margin-left: 6px;
    padding: 5px;

    .toilet-level {
      background: url("../../assets/tmapicon/level.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
    .toilet-water {
      background: url("../../assets/tmapicon/water.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
    .toilet-drought {
      background: url("../../assets/tmapicon/drought.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
    .toilet-build {
      background: url("../../assets/tmapicon/build.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
    .toilet-plan {
      background: url("../../assets/tmapicon/plan.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
    .toilet-jam {
      background: url("../../assets/tmapicon/jam.png") no-repeat;
      height: 32px;
      line-height: 32px;
      padding-left: 30px;
    }
  }
}
</style>




