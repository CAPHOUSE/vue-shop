<template>
    <div class="login_container">
        <div class="login_box">

            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
          <!--登录表单-->
          <el-form ref="loginFormRef" v-bind:model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">

            <el-form-item prop="username">
              <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input v-model="loginForm.password" type="password"
                        prefix-icon="el-icon-lock"></el-input>
            </el-form-item>

            <el-form-item class="btns">
              <el-button type="primary" @click="login">登录</el-button>
              <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      loginForm: {
          username: "",
          password: ""
      },
      loginFormRules: {
          username: [
            {required: true,message: "请输入登录名称",trigger:"blur"},
            {min: 3,max: 10, message: "长度在3到10个字符之间",trigger: "blur"}
          ],
          password: [
            {required: true,message: "请输入登录密码",trigger:"blur"},
            {min: 6,max: 15, message: "长度在6到15个字符之间",trigger: "blur"}
          ],
      }
    };
  },
  methods: {
    resetLoginForm(){ //重置
      this.$refs.loginFormRef.resetFields();
    },
    login: function () {//登录
      this.$refs.loginFormRef.validate(async valid => {
          if (!valid){ //验证失败，返回
            return;
          }
          let result = await this.$http.post('/login',this.loginForm);
          if (result.data.code !== 200){
              this.$message.error("登录失败!" + result.data.message);
          }else {
              this.$message.success("登录成功!");
              window.sessionStorage.setItem("token",result.data.data.token);
              await this.$router.push("/home");
          }
      });
    }
  },
}
</script>

<style scoped>
    .login_container{
      background-color: #b2b4b6;
      height: 100%;
    }
    .login_box{
      width: 450px;
      height: 300px;
      background-color: white;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .avatar_box{
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
    }
    .avatar_box img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
    .btns{
      display: flex;
      justify-content: flex-end;
    }
    .login_form{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
</style>
