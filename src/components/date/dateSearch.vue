<template>
  <div class="body">
    <span class="title">旅客客流</span>
    <el-date-picker v-if="type==1" style="width: 130px;" v-model="s.dt" :picker-options="pickerOptions1" :size="size" :clearable="clearable" value-format="yyyy-MM-dd" type="date"  placeholder="自选日期" @change="dateChange"></el-date-picker>
    <el-date-picker v-if="type==2" style="width: 215px;" v-model="s.dr" :picker-options="pickerOptions2" :size="size" :clearable="clearable" value-format="yyyy-MM-dd" type="daterange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="dateChange"></el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "dateSearch",
    props: {
      type:Number,
      date:String,
      daterange:Array,
    },

    data() {
      return {
        pickerOptions1: {
          shortcuts: [
            {
              text: '今天',
              onClick(picker) {
                const start = new Date();
                picker.$emit('pick', start);
              }
            },
            {
            text: '昨天',
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              picker.$emit('pick', start);
            }
          },
            {
            text: '一周前',
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', start);
            }
          },
            {
            text: '一个月前',
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', start);
            }
          },
            {
            text: '三个月前',
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', start);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        clearable:false,
        s:{
          dt:this.date,
          dr:this.daterange,
        },
        size:'small'
      }
    },
    methods:{
      dateChange(){
        this.$emit('sdate', this.s)
      }
    }
  }
</script>

<style lang="less" scoped>
  .body{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .title {
    font-size: 14px;
    //line-height: 32px;
    //text-align: center;
  }
  .datestyle{
    width: 220px;
  }
</style>
