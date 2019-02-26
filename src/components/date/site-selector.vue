<template>
  <div class="site-selector">

    <el-select v-model="params.cityId" @change="cityClick" class="site-selector__item">
      <el-option v-for="(item,index) in cityList" :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="params.countryId" @change="countryClick" class="site-selector__item">
      <el-option v-for="(item,index) in countryList" :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="params.scenicId" @change="scenicClick" class="site-selector__item">
      <el-option v-for="(item,index) in scenicList" :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

  </div>
</template>

<script>
//import { fetchCountry, fetchScenic } from '../../../libs/request/index.js'
export default {
  name: '',
  data () {
    return {
      countryList: [
        { value: undefined, label: '全区' },
      ],
      scenicList: [
        { value: undefined, label: '全部景区' },
        // { value: '22', label: '东莞' },
        // { value: '33', label: '澳门' }
      ],
      params: {
        cityId: undefined,
        countryId: undefined,
        scenicId: undefined
      }
    };
  },
  props: {
    cityList: {
      type: Array,
      default: () => [{ value: undefined, label: '全省' }]
    },
  },
  components: {},

  computed: {},

  methods: {
    cityClick (val) {
      if (val) {
        this.countryList = []
        this.params.countryId = undefined
        this.params.scenicId = undefined
        //fetchCountry({ city: val }).then((data) => {
        //let cc =[{"value": undefined, "label": "全省"},{"code":"530100","label":"昆明市","value":"385"},{"code":"530500","label":"保山市","value":"379"},{"code":"532300","label":"楚雄州","value":"380"},{"code":"532900","label":"大理州","value":"381"},{"code":"533100","label":"德宏州","value":"382"},{"code":"533400","label":"迪庆州","value":"383"},{"code":"532500","label":"红河州","value":"384"},{"code":"530700","label":"丽江市","value":"386"},{"code":"530900","label":"临沧市","value":"387"},{"code":"533300","label":"怒江州","value":"388"},{"code":"530800","label":"普洱市","value":"389"},{"code":"530300","label":"曲靖市","value":"390"},{"code":"532600","label":"文山州","value":"391"},{"code":"532800","label":"西双版纳州","value":"392"},{"code":"530400","label":"玉溪市","value":"393"},{"code":"530600","label":"昭通市","value":"394"}]

        this.countryList =[{"value": undefined, "label": "全区"},{"label":"安宁市","value":"3055"},{"code":"530114","label":"呈贡区","value":"3056"},{"code":"530113","label":"东川区","value":"3057"},{"code":"530124","label":"富民县","value":"3058"},{"code":"530111","label":"官渡区","value":"3059"},{"code":"530122","label":"晋宁区","value":"3060"},{"code":"530128","label":"禄劝县","value":"3061"},{"code":"530103","label":"盘龙区","value":"3062"},{"code":"530126","label":"石林县","value":"3063"},{"label":"嵩明县","value":"3064"},{"label":"五华区","value":"3065"},{"label":"西山区","value":"3066"},{"label":"经开区","value":"80001"},{"label":"阳宗海度假区","value":"80002"},{"label":"滇池度假区","value":"80003"},{"label":"高新区","value":"80004"}]
     /*   this.ps.post('get_county_by_city',{city:val},data=>{
          if (!data) return
          this.countryList = data.map(item => {
            return {
              value: item.id,
              label: item.name
            }
          })
          this.countryList.unshift(
            { value: undefined, label: '全区' },
          )
        })*/
      } else {
        this.params = {
          cityId: undefined,
          countryId: undefined,
          scenicId: undefined
        }
        this.countryList = [{ value: undefined, label: '全区' }]
        this.scenicList = [{ value: undefined, label: '全部景区' }]
      }
      this.params.cityId = val
      this.$emit('selectorClick', this.params)
    },
    countryClick (val) {
      this.params.scenicId = undefined
      //fetchScenic({ county: val }).then((data) => {
      this.scenicList =[{"value": undefined, "label": "全部景区"},{"label":"安宁市","value":"3055"},{"code":"530114","label":"呈贡区","value":"3056"},{"code":"530113","label":"东川区","value":"3057"},{"code":"530124","label":"富民县","value":"3058"},{"code":"530111","label":"官渡区","value":"3059"},{"code":"530122","label":"晋宁区","value":"3060"},{"code":"530128","label":"禄劝县","value":"3061"},{"code":"530103","label":"盘龙区","value":"3062"},{"code":"530126","label":"石林县","value":"3063"},{"label":"嵩明县","value":"3064"},{"label":"五华区","value":"3065"},{"label":"西山区","value":"3066"},{"label":"经开区","value":"80001"},{"label":"阳宗海度假区","value":"80002"},{"label":"滇池度假区","value":"80003"},{"label":"高新区","value":"80004"}]
  /*    this.ps.post('get_scenic_by_county',{county:val},data=>{
        if (!data) return
        this.scenicList = data.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
        this.scenicList.unshift(
          { value: undefined, label: '全部景区' },
        )
      })*/
      this.params.countryId = val
      this.$emit('selectorClick', this.params)
    },
    scenicClick (val) {
      //获取
      this.params.scenicId = val
      this.$emit('selectorClick', this.params)
    },
  },
  mounted () { },
}
</script>
<style  type='text/less' lang='less'>
.site-selector {
  &__item {
    width: 120px;
    height: 30px;
  }
  input::-webkit-input-placeholder {
    font-size: 12px;
    line-height: 30px;
    // color: black;
  }
}
.el-input__inner {
  height: 30px;
  line-height: 30px;
}
.el-input__icon {
  line-height: 30px;
}
</style>
