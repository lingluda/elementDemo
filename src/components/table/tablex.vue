<!--
  tablex: resolve => require(['../../components/table/tablex.vue'], resolve),

<tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]" style="margin: 20px 0 20px "></tablex>

-->
<template>
  <el-table :data="data" style="width: 100%;border: 1px solid #f2f2f2">
    <el-table-column v-for="(i,index) in column" :key="index"
      :prop="i.key"
      :label="i.name"
      :width="i.width">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "tablex",
    props: {
      data: Array,
      column: Array,
    }
  }
</script>

<style scoped>

</style>
