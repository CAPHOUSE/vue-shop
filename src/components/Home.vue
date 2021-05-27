<template>
    <el-container class="home-container">
<!--      头部区域-->
          <el-header>
            <div>
                <img src="../assets/logo2.png" alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
          </el-header>
<!--      页面主体区域-->
          <el-container>
<!--            侧面-->
            <el-aside width="200px">

              <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>

                  <el-menu-item index="1-4-1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-aside>

            <el-main>Main</el-main>
          </el-container>
      </el-container>


</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      menuList: []
    }
  },
  methods: {
    logout(){ //退出
      window.sessionStorage.clear();
      this.$router.push("/login")
    },
    async getMenuList(){ //获取所有的菜单
      let result = await this.$http.get("/menu");
      if (result.data.code !== 200){
        this.$message.error(result.data.message)
      }
      this.menuList = result.data.data;
    }
  },
  created () {
    this.getMenuList();
  }
}
</script>

<style scoped>
  .el-header{
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    background-color: #373d41;
    color: #fff;
    font-size: 20px;
  }
  .el-header div{
    display: flex;
    align-items: center;
  }
  .el-header div span{
    margin-left: 15px;
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
