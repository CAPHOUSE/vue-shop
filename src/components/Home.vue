<template>
    <el-container class="home-container">
<!--      头部区域-->
          <el-header>
            <div>
                <img src="" alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
          </el-header>
<!--      页面主体区域-->
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
      </el-container>


</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout(){ //退出
      window.sessionStorage.clear();
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #373d41;
  }
  .el-aside{
    background-color: #333744;
  }
  .el-main{
    background-color: #eaedf1;
  }
  .home-container{
    height: 100%;
  }

</style>
