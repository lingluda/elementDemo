<template>
    <div class="to-xyyLine" v-loading="false">
        <div class="to-echart" ref="echart"></div>
    </div>
</template>
<script>
export default {
    props : {
        unit : Array
    },
    mounted () {
        let dom = this.$refs.echart
        let opt = {
            yAxis : {
                show : true,
                name : "次"
            },
            grid : {
                top : "15%"
            }
        }
        this.echart(dom, opt, "line")
    }
}
</script>
<style lang="less" scoped>
    .to-xyyLine{
        .to-echart{
            height: 100%;
        }
    }
</style>
