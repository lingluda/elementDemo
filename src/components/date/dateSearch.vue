<template>
    <div>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "dateSearch",
      data(){
          return{
            date:''
          }
      }
    }
</script>

<style lang="less" scoped>

</style>
