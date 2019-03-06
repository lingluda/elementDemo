<template>
  <el-container>
    <el-header>
      <div style="display: flex">
        <img src="../assets/imgs/timg.png" width="50" height="50" style='vertical-align:middle;'/>
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
        <img src="../assets/imgs/user.png" width="20" height="20" style='vertical-align:middle;'/><span
        style="color: white;vertical-align:middle;"> 您好，管理员</span>
        <img src="../assets/imgs/password.png" width="20" height="20" style='vertical-align:middle;' @click="logout"/>
      </div>
    </el-header>
    <el-container>
      <el-menu :default-active="menuselect" :unique-opened=true class="el-menu-vertical-demo" @open="handleOpen"
               @close="handleClose" :collapse="isCollapse" @select="select"
               background-color="#242a33"
               text-color="#BBBBBB"
               active-text-color="#006EFF">
        <el-submenu v-for="(item,index) in menuList" :index="item.index" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="(i,index) in item.children" :index="i.index" :key="index">
            <template>
              <span style="color:#888;font-size:24px">·&nbsp;&nbsp;</span>
              <span>{{i.name}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <img src="../assets/imgs/tabRight.png" v-if="isCollapse" style="position: absolute;margin: 88vh 14px 0px;background: #4d4d4d;border-radius: 20px" @click="push(false)"></img>
      <img src="../assets/imgs/tabLeft.png" v-if="!isCollapse" style="position: absolute;margin: 88vh 14px 0px;background: #4d4d4d;border-radius: 20px" @click="push(true)"></img>

      <el-main>
        <div class="texts">十二
        </div>
        <div>
        <router-view style="background: #f2f2f2;height: calc(100vh - 105px);overflow-y: scroll;"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {
            name: '总览',
            index: '1',
            icon: 'el-icon-picture-outline',
            children: [
              {
                name: '预警概览',
                index: 'index',
                icon: '',
              },
              {
                name: '预警情况',
                index: 'situation',
                icon: '',
              }
            ]
          },
          {
            name: '要素管理',
            index: '2',
            icon: 'el-icon-date',
            children: [
              {
                name: '厕所管理(省级)',
                index: 'wc-manage-province',
                icon: '',
              },
              {
                name: '厕所管理',
                index: 'wc-manage-scenic',
                icon: '',
              }
            ]
          },
          {
            name: '系统管理',
            index: '3',
            icon: 'el-icon-menu',
            children: [
              {
                name: '用户管理',
                index: 'user',
                icon: '',
              },
              {
                name: '角色管理',
                index: 'role',
                icon: '',
              },
              {
                name: '组织机构管理',
                index: 'org',
                icon: '',
              },
              {
                name: '功能菜单管理',
                index: 'func',
                icon: '',
              },
            ]
          },
        ],
        isCollapse: false,
        activeIndex: '1',
        menuselect: sessionStorage.getItem('menuIndex') || 'index',
      };
    },
    methods: {
      //2.1.1获取所有城市
      get_all_city(){
        let cc =[{"value": undefined, "label": "全省"},{"code":"530100","label":"昆明市","value":"385"},{"code":"530500","label":"保山市","value":"379"},{"code":"532300","label":"楚雄州","value":"380"},{"code":"532900","label":"大理州","value":"381"},{"code":"533100","label":"德宏州","value":"382"},{"code":"533400","label":"迪庆州","value":"383"},{"code":"532500","label":"红河州","value":"384"},{"code":"530700","label":"丽江市","value":"386"},{"code":"530900","label":"临沧市","value":"387"},{"code":"533300","label":"怒江州","value":"388"},{"code":"530800","label":"普洱市","value":"389"},{"code":"530300","label":"曲靖市","value":"390"},{"code":"532600","label":"文山州","value":"391"},{"code":"532800","label":"西双版纳州","value":"392"},{"code":"530400","label":"玉溪市","value":"393"},{"code":"530600","label":"昭通市","value":"394"}]
        this.ps.setCookie('cityData',JSON.stringify(cc),1)
        /* this.ps.post('get_all_city', {}, res => {
           let cc = []
           cc = res.map(item => {return {value: item.id, label: item.name}})
           cc.unshift({ value: undefined, label: '全省' },)
           console.log(cc)
           localStorage.setItem('cityData',JSON.stringify(cc))
         })*/
      },
      logout() {
        this.ps.delCookie('token')
        this.$router.push('login')
      },
      push(val) {
        this.isCollapse = val
        //console.log(this.isCollapse)
      },
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      select(index, indexPath) {
        //console.log(indexPath[0] == '1', 'sssssbb')
        this.$router.push(index)
        sessionStorage.setItem('menuIndex', index, 1)
      }
    },
    mounted(){
      this.get_all_city()
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
    //overflow-y: hidden;
    //overflow-x: hidden;
  }

  .texts {
    margin: 0px 0px 4px -16px;
    background: #fff;
    width: calc(100% - 4px);
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
    background-color: #f2f2f2;
    padding: 0px 0px 20px 17px;
    color: #333;
    min-width: 960px;
    min-height: calc(100vh - 67px);
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
