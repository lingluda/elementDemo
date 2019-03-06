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
      if (loading!= null){document.body.removeChild(loading)}
      this.$store.dispatch('init')
    },
    methods: {

    }
  }
</script>

<style lang="less">
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  .el-input__inner{
    border-radius:0 !important;
  }
  .el-menu{
    border: 0 !important;
  }
  .el-header{
    padding: 0px 20px 0 7px !important;
  }
</style>
