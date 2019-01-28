<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    mounted(){
      let loading = document.getElementById('Loading')
      if (loading!= null){
        document.body.removeChild(loading)
      }
    },
    methods: {

    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0
  }
  .el-input__inner{
    border-radius:unset !important;
  }
  .el-menu{
    border: unset !important;
  }
  .el-header{
    padding: 0px 20px 0 10px;
  }
</style>
