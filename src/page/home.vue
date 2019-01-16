<template>
  <el-container>
    <el-header>
      <img src="../assets/imgs/user.png" width="20" height="20" style='vertical-align:middle;'/><span style="color: white;vertical-align:middle;"> 您好，管理员</span>
      <img src="../assets/imgs/password.png" width="20" height="20" style='vertical-align:middle;' @click="logout"/>
      <!--<i class="el-icon-question"></i>-->
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
        <div class="texts">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{FB}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{SB}}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="TB.length">{{TB}}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <i class="el-icon-d-arrow-right" v-if="isCollapse" style="position: absolute;margin-left: -20px;background: white" @click="push(false)"></i>
        <i class="el-icon-d-arrow-left" v-if="!isCollapse" style="position: absolute;margin-left: -20px;background: white" @click="push(true)"></i>
        <router-view style="background: white;padding: 10px 20px 0 20px;height: calc(100vh - 110px);overflow-y: scroll"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        menuselect: sessionStorage.getItem('menuIndex')||'1-4-1',
        FB:sessionStorage.getItem('FB')||'导航一',
        SB:sessionStorage.getItem('SB')||'选项一',
        TB:sessionStorage.getItem('TB')||'',
      };
    },
    methods: {
      logout(){
        sessionStorage.clear()
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
        sessionStorage.setItem('menuIndex',index)
         if (indexPath[0]=='1'){
           this.FB = '导航一'
           sessionStorage.setItem('FB','导航一')
         }
         if (indexPath[1]=='index') {
           this.SB = '选项一'
           sessionStorage.setItem('SB','选项一')
         }
         if (indexPath[1]=='dd') {
           this.SB = '选项二'
           sessionStorage.setItem('SB','选项二')
         }
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
    width: calc(100% + 34.4px);
    padding: 5px 0 5px 5px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header, .el-footer {
    background-color: #025a83;
    //color: #333;
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

    //text-align: center;
    //line-height: 160px;
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
