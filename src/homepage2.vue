<template>
  <div class ="stu-search">
      <header class ="title">
          <div class ="img-box">
              <img src="./assets/logo.png" alt="">
          </div>
          <div class ="title-content">
              学生信息管理系统
          </div>
      </header>
      <div class ="content">
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.stu-search{
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
    background:#02A7F0;
    padding:10px;
}
</style>