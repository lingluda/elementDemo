<template>
  <el-container>
    <el-header>
      <div style="display: flex">
        <img src="../assets/imgs/timg.png" width="50" height="50" style='vertical-align:middle;' />
        <span style="color: #fff;font-size: 18px;margin-top: 3px;font-weight: bold">游云南综合管理平台</span>
        <el-menu :default-active="activeIndex" style="height: 50px;margin-left: 40px" mode="horizontal"
                 background-color="#025a83"
                 text-color="#BBBBBB"
                 active-text-color="#006EFF">
          <el-menu-item index="1" style="height: 50px;line-height: 50px">处理中心</el-menu-item>
          <el-menu-item index="2" style="height: 50px;line-height: 50px">处理中心</el-menu-item>
          <el-menu-item index="3" style="height: 50px;line-height: 50px">处理中心</el-menu-item>
        </el-menu>
      </div>
      <div>
      <img src="../assets/imgs/user.png" width="20" height="20" style='vertical-align:middle;'/><span style="color: white;vertical-align:middle;"> 您好，管理员</span>
      <img src="../assets/imgs/password.png" width="20" height="20" style='vertical-align:middle;' @click="logout"/>
      </div>
    </el-header>
    <el-container>
      <el-menu :default-active="menuselect" :unique-opened=true class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="select"
               background-color="#242a33"
               text-color="#BBBBBB"
               active-text-color="#006EFF">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="index">选项1</el-menu-item>
            <el-menu-item index="dd">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="4-4">
            <span slot="title">选项4</span>
            <el-menu-item index="4-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

      <el-main>
        <div class="texts">十二
        </div>
        <i class="el-icon-d-arrow-right" v-if="isCollapse" style="position: absolute;margin: -27px 0px 0px -20px;background: white" @click="push(false)"></i>
        <i class="el-icon-d-arrow-left" v-if="!isCollapse" style="position: absolute;margin: -27px 0px 0px -20px;background: white" @click="push(true)"></i>
        <router-view style="background: white;padding: 10px 20px 0 20px;height: calc(100vh - 115px);overflow-y: scroll"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex:'1',
        menuselect: this.ps.getCookie('menuIndex')||'1-4-1',
      };
    },
    methods: {
      logout(){
        this.ps.delCookie('token')
        this.$router.push('login')
      },
      push(val){
        this.isCollapse=val
        console.log(this.isCollapse)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      select(index,indexPath){
        console.log(indexPath[0]=='1','sssssbb')
        this.$router.push(index)
        this.ps.setCookie('menuIndex',index,1)
      }
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0
  }
  .texts{
    margin: 0px 0px 4px -20px;
    background: #fff;
    width: calc(100% + 19px);
    padding: 5px 0 5px 20px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header, .el-footer {
    display: flex;
    justify-content: space-between;
    background-color: #025a83;
    text-align: right;
    line-height: 45px;
    min-width: 1160px;
    height: 50px !important;
  }
  .el-main {
    background-color: #383f48;
    padding: 0px 20px 20px 20px;
    color: #333;
    min-width: 960px;
    min-height: calc(100vh - 50px);

  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
