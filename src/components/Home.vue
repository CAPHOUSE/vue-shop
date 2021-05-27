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
            <el-aside :width="isCollapse ? '64px':'200px'">
            <div class="toggle-button" @click="toggle">
                |||
            </div>
            <!--侧边栏-->
              <el-menu background-color="#333744" text-color="#fff" :collapse-transition='false'
                       active-text-color="#409eff" unique-opened :collapse="isCollapse" router
                       :default-active="activePath">

                <el-submenu :index="item.id + ''" v-for="(item,index) in menuList" :key="item.id">
                  <template slot="title">
                    <i v-bind:class="iconsObj[item.id]"></i>
                    <span>{{item.authName}}</span>
                  </template>

                  <el-menu-item :index="subItem.path +''" v-for="(subItem,index) in item.children"
                  :key="subItem.id" @click="saveNavState('/' + subItem.path)">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>{{subItem.authName}}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-aside>

            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
      </el-container>


</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      menuList: [],
      iconsObj: {
        '1': 'el-icon-user-solid',
        '2': 'el-icon-s-data',
        '3': 'el-icon-s-goods',
        '4': 'el-icon-s-order',
        '5': 'el-icon-s-platform'
      },
      isCollapse: false,
      activePath: ''
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
    },
    //点击按钮切换菜单的折叠
    toggle(){
        this.isCollapse = !this.isCollapse;
    },
    saveNavState(activePath){
      window.sessionStorage.setItem("activePath",activePath);
      this.activePath = activePath;
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem("activePath")
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
  .el-aside .el-menu{
      border-right: none;
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
  .toggle-button{
    background-color: #4a5064;
    font-size: 10px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

</style>
