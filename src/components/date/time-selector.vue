<template>
  <div class="time-selector">
    <el-radio-group v-model="timeRange" @change="radioSelect" class="time-selector__radio">
      <el-radio-button :label="item.name" :value="item.value" v-for="(item,index) in radioList" :key="index" class="time-selector__radio-item"></el-radio-button>
    </el-radio-group>
    <el-date-picker v-model="timeStamp" type="date" placeholder="选择日期" @change="timeSelect" class="time-selector__picker" :class="{'time-selector__picker-focus':timeFocus}"></el-date-picker>
  </div>
</template>

<script>
function formater (time) {
  // console.log(time.getFullYear(), time.getMonth(), time.getDate())
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
}
export default {
  name: '',
  data () {
    return {
      timeRange: '今日',
      timeStamp: undefined,
      timeFocus: false
    }
  },
  props: {
    more: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    radioList () {
      if (!this.more) {
        return [{ name: '今日', val: 1 }]
      }
      return [
        { name: '今日', val: 1 },
        { name: '近7天', val: 2 },
        { name: '近30日', val: 3 },
      ]
    }
  },
  watch: {
    timeRange () {
      if (this.timeRange) {
        this.timeStamp = undefined
      }
    },
    timeStamp () {
      if (this.timeStamp) {
        this.timeRange = undefined
      }
    }
  },


  components: {},

  methods: {
    radioSelect (val) {
      this.timeFocus = false
      if (val === '今日') {
        this.$emit('selectorClick', formater(new Date()), formater(new Date()))
      } else if (val === '近7天') {
        this.$emit('selectorClick', formater(new Date()), formater(new Date(new Date() - 1000 * 60 * 60 * 24 * 7)))
      } else if (val === '近30日') {
        this.$emit('selectorClick', formater(new Date()), formater(new Date(new Date() - 1000 * 60 * 60 * 24 * 30)))
      }
    },
    timeSelect (val) {
      // this.$refs.timeSelectorPicker.focus()
      this.timeFocus = true
      this.$emit('selectorClick', formater(val), formater(val))
    }
  },
  mounted () {
    console.log(this.more)
  },
}
</script>
<style  type='text/less' lang='less'>
.time-selector {
  display: flex;
  align-items: center;
  &__radio {
    &-item {
      height: 30px;
      width: 60px;
      .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background-color: white;
        color: #409eff;
      }
    }

    .el-radio-button {
      .el-radio-button__inner {
        padding: 0;
        height: 30px;
        width: 60px;
        line-height: 30px;
        text-align: center;
        border-radius: 0;
        font-size: 12px;
      }
    }
  }
  &__picker {
    box-sizing: border-box;
    height: 30px;
    width: 136px;
    font-size: 12px;
    &-focus {
      .el-input__inner {
        color: #409eff;
        border-color: #409eff;
      }
    }
  }
  .el-input__inner {
    padding: 0;
    width: 136px;
    height: 30px;
    text-align: center;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 136px;
  }
  .el-popover,
  .el-radio-button:first-child:last-child .el-radio-button__inner {
    border-radius: 0;
  }
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
}
</style>