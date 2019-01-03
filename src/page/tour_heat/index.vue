<template>
  <div>
    <bary></bary>
    <lines></lines>
    <pies></pies>
    <piex></piex>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      bary: resolve => require(['@/components/echarts/bary.vue'], resolve),
      lines: resolve => require(['@/components/echarts/lines.vue'], resolve),
      pies: resolve => require(['@/components/echarts/pies.vue'], resolve),
      piex: resolve => require(['@/components/echarts/piex.vue'], resolve),
    }
  }
</script>

<style scoped>

</style>
