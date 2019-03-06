<template>
  <div>
    <iframe name="refreshAlarm" frameborder="0" scrolling="auto" style="width: 100%;height: 90%"></iframe>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      document.getElementsByName("refreshAlarm")[0].src="//www.baidu.com/";
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
