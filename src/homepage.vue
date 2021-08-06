<template>
  <div class ="homepage">
      <header class ="title">
          <div class ="img-box">
              <img src="./assets/logo.png" alt="">
          </div>
          <div class ="title-content">
              学生信息管理系统
          </div>
      </header>
      <div class ="content">
          <div class ="nav-bar">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                    <span>学生信息</span>
                    </template>
                    <router-link to="stuInfoInput"><el-menu-item index="1-1">学生信息录入表</el-menu-item></router-link>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                    <span>学生成绩</span>
                    </template>
                    <router-link to="entry_exam"><el-menu-item index="2-1">入学成绩输入表</el-menu-item></router-link>
                    <router-link to="mid_exam"><el-menu-item index="2-2">期中成绩输入表</el-menu-item></router-link>
                    <router-link to="end_exam"><el-menu-item index="2-3">期末成绩输入表</el-menu-item></router-link>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                    <span>学生查询</span>
                    </template>
                    <router-link to="main"><el-menu-item index="3-1">学生列表</el-menu-item></router-link>
                    <router-link to="info"><el-menu-item index="3-2">学生信息列表</el-menu-item></router-link>
                    <router-link to="score"><el-menu-item index="3-3">学生成绩查询</el-menu-item></router-link>
                </el-submenu>
            </el-menu>
          </div>
          <div class ="content-box">
              <p v-if="flag" class ="welcome">欢迎进入学生信息管理系统</p>
              <router-view/>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            flag:true
        }
    },
    mounted(){
        console.log(this.$route.path);
        if(this.$route.path != '/') this.flag = false;
    },
    watch:{
        '$route.path':function(val){
            // console.log(val,'====',val1);
            if(val) this.flag = false;
        }
    }
}
</script>

<style lang="less" scoped>
.homepage{
    padding:10px;
    background:#027DB4;
}
.title{
    width:100%;
    height:120px;
    background:#02A7F0;
    display:flex;
    padding:10px;
    align-items: flex-end;
    .img-box{
        height:100%;
        width:200px;
        padding:5px;
        // margin-right:0px;
        text-align: center;
        img{
            width:50%;
            height:100%;
        }
    }
    .title-content{
        font-size:70px;
        color:#fff;
        padding:10px;
    }
}
.content{
    width:100%;
    height:506px;
    margin-top:10px;
    display: flex;
    align-items:center;
    justify-content: center;
    .nav-bar{
        width:200px;
        height:100%;
        background: #02A7F0;
        margin-right:20px;
    }
    .content-box{
        width:calc(100% - 220px);
        height:100%;
        background:#02A7F0
    }
}
.welcome{
    font-size:30px;
    color:#fff;
    font-weight:400;
    text-align: center;
    margin-top:150px;
    font-style: italic;
}
</style>