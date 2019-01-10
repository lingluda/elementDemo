<template>
  <div class="loginForm">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
      <el-form-item prop="name">
        <!--<i class="el-icon-edit" slot="prefix"></i>-->
        <!--<el-input prefix-icon="el-icon-info" v-model="loginForm.name"></el-input>-->
        <el-input v-model="loginForm.name">
          <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
          <img slot="prefix" src="../assets/imgs/user.png" width="22" height="22" style="margin-top: 10px"></img>
          <!--<i slot="suffix" class="el-input__icon el-icon-search"></i>-->
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input :type="inpuType" v-model="loginForm.password">
          <img slot="prefix" src="../assets/imgs/password.png" width="22" height="22" style="margin-top: 10px"></img>
          <i slot="suffix" class="el-input__icon el-icon-view" @click="showPW"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-input v-model="loginForm.code" @keyup.enter.native="submitForm('loginForm')">
            </el-input>
          </el-col>
          <el-col :span="12">
            <input type="button" @click="createCode" class="verification" v-model="checkCode"></input>
          </el-col>
        </el-row>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        inpuType:'password',
        code:'',
        checkCode:'',
        picLyanzhengma:'',
        loginForm:{
          name:'',
          password:'',
          code:''
        },
        rules: {
          name: [{ required: true, message: '请输入用户名', trigger: 'blur' },],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' },],
          code: [{ required: true, message: '请输入验证码', trigger: 'blur' },],
        }
      }
    },
    mounted() {
      this.createCode()
    },
    methods: {
      showPW(){
        this.inpuType='text'
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && this.loginForm.code==this.code) {
            this.$router.push('index')
          } else {
            this.$message.error('验证码错误');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 图片验证码
      createCode() {
        //先清空验证码的输入
        this.code = "";
        this.checkCode = "";
        this.picLyanzhengma = "";
        //验证码的长度
        var codeLength = 4;
        //随机数
        //var random = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        var random = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (var i = 0; i < codeLength; i++) {
          //取得随机数的索引（0~35）
          //var index = Math.floor(Math.random() * 53);
          var index = Math.floor(Math.random() * 30);
          //根据索引取得随机数加到code上
          this.code += random[index];
        }
        //把code值赋给验证码
        this.checkCode = this.code;
      }
    }
  }
</script>

<style lang="less" scoped>
  .loginForm{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .demo-ruleForm{
    width: 300px;
    background: yellow;
    padding: 10px;
  }
  .verification{
    border: 0px solid #409EFF;
    //border-radius: 3px;
    background: #fff;
    width:100%;
    letter-spacing:14px;
    font-weight: 600;
    font-size: 22px;
    color: rgba(0, 110, 255, 1);
    height: 40px;
  }
</style>
