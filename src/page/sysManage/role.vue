<template>
  <div>
    <usertree style="height: 200px"></usertree>
    <el-row>
      <el-col :span="12">
        <!--对话框开始-->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="角色代码" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否隐藏不用" :label-width="formLabelWidth">
              <el-switch
                v-model="form.islock"
                active-text="启用"
                inactive-text="禁用"
                active-value="0"
                inactive-value="1"
              >
              </el-switch>
            </el-form-item>
            <el-form-item label="备注描述" :label-width="formLabelWidth">
              <el-input v-model="form.remark" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="confire">确 定</el-button>
          </div>
        </el-dialog>
        <!--头部搜索框-->
        <div style="float: right;margin-bottom: 10px">
          <el-input v-model="searchname" size="small" style="width: 120px"></el-input>
          <el-button size="small">查找</el-button>
          <el-button size="small" @click="addrole">添加</el-button>
        </div>
        <!--表格开始-->
        <el-table :data="tableData" style="width: 100%" border @row-click="openFunc">
          <el-table-column prop="code" label="角色代码" width=""></el-table-column>
          <el-table-column prop="name" label="角色名称" width=""></el-table-column>
          <el-table-column prop="islock" label="是否隐藏" width=""></el-table-column>
          <el-table-column prop="remark" label="备注描述" width=""></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" @click="delrole(scope.row)" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!--树形菜单-->
      <el-col :span="12">
        <div style="margin-left: 40%">

          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2,4,8]"
            :default-checked-keys="selectTree"
            :props="defaultProps">
          </el-tree>
          <el-button>确定</el-button>
          <el-button>重置</el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
    export default {
      components:{
        usertree: resolve => require(['./userTree'],resolve),
      },
      data(){
        return{
          selectTree:[],
          data2:[],
          tableData:[],
          dialogFormVisible:false,
          total:'',
          pageSize:'',
          currentPage:1,
          form:{
            code:'',
            name:'',
            islock:'0',
            remark:'',
          },
          searchname:'',
          formLabelWidth: '120px'
        }
      },
      mounted(){
        //角色初始化
        this.initRole()
        //菜单初始化
        this.initFunc()

      },
      methods:{
        //删除角色
        delrole(v){
          this.ps.post('user/dele',{name:v.name},res=>{
            this.initRole()
          })
        },
        addrole(){
          this.dialogFormVisible=true
        },
        confire(){
          this.form.key='role'
          console.log(this.form)
          this.ps.post('user/add',this.form,res=>{
            this.initRole()
            this.form={}
          })
          this.dialogFormVisible = false
        },
        //角色初始化
        initRole(){
          this.ps.post('user/findRole',{},res=>{
            console.log(res)
            this.tableData=res
          })
        },
        //菜单初始化
        initFunc(){
          this.ps.post('user/find',{"key":'menuList'},res=>{
            console.log(res[0].menuList)
            this.data2 = res[0].menuList
          })
        },
        //选中列表
        openFunc(val){
          console.log(val.code)
          this.ps.post('user/find',{"key":val.code},res=>{
            this.selectTree=[5,6]
          })
        }
      }
    }
</script>

<style scoped>

</style>
