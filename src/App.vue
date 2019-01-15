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
      setTimeout(() => {
        sessionStorage.clear()
      },1*60*60*1000)
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
  .el-submenu .el-menu{
    background: #000;
  }
  .el-menu{
    border: unset;
    background: #000;
  }
</style>
