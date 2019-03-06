<!--
  tablex: resolve => require(['../../components/table/tablex.vue'], resolve),

<tablex :data="[{name:'玉龙雪山'}]" :column="[{key:'name',name:'景区名称'}]"
 :operation="{
           buttonName:'查看更多',
            moreName:'更多',
            selectList:[
              { value: '撤销', label: '撤销' },
            ]
          }"
 style="margin: 20px 0 20px "></tablex>

-->

<template>
  <div class="list-components">
    <el-table :data="data" size="mini" style="width: 100%;border: 1px solid #f2f2f2">
      <el-table-column v-for="(i,index) in column" :key="index" v-if="i.key=='id'" :label="i.name">
        <template slot-scope="scope">
          <div>{{scope.row.id}}</div>
        </template>
      </el-table-column>
      <el-table-column v-for="(i,index) in column" :key="index" v-if="i.key!='id'"
                       :prop="i.key"
                       :label="i.name"
                       :width="i.width">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" style="color: #006eff" size="small">{{operation.buttonName}}</el-button>
          <el-select
            :placeholder="operation.moreName"
            v-model="selectmorevalue"
          >
            <el-option v-for="(item,index) in operation.selectList" :value="item.value" :key="index">{{item.label}}</el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "tablex",
    props: {
      data: Array,
      column: Array,
      operation: Object
    },
    data(){
      return{
        selectmorevalue: "更多",
      }
    },
    methods:{
      handleClick(v){
        console.log(v)
      }
    }
  }
</script>

<style lang="less">
  .main {
      .list {
        .el-select .el-input__inner {
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: #006eff;
          background: transparent;
          border: 0px;
          outline: none;
          width: 55px;
          padding: 0;
        }
        .el-select .el-input .el-select__caret {
          color: #006eff;
          padding: 0;
        }
    }
  }
</style>
