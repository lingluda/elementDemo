<template>
    <el-scrollbar>
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        show-checkbox
        :scroll="true"
        @check-change="handleNodeClick">
      </el-tree>
    </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
              id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }, {
              id: 14,
              label: '三级 3-2-3'
            }, {
              id: 15,
              label: '三级 3-2-3'
            }, {
              id: 16,
              label: '三级 3-2-3'
            }, {
              id: 17,
              label: '三级 3-2-3'
            }, {
              id: 18,
              label: '三级 3-2-3'
            }, {
              id: 19,
              label: '三级 3-2-3'
            }, {
              id: 20,
              label: '三级 3-2-3'
            }, {
              id: 21,
              label: '三级 3-2-3'
            }, {
              id: 22,
              label: '三级 3-2-3'
            }
            ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data, checked) {
        if (data.indexOf('children')){
          console.log(data, checked);
        }
      }
    }
  };
</script>

<style scoped>
  .tree{
    overflow-y: scroll;
    overflow-x: scroll;
    width:80px;
    height: 450px;
  }
  .el-tree {
    min-width: 100%;
    display:inline-block !important;
  }
</style>
