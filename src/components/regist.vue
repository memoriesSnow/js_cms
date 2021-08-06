<template>
  <div class="login">
    <div class="header">
      <div class="logo-container">
          <img src="../assets/logo.png" alt="">
      </div>
      <div class="title">学生信息管理系统</div>
    </div>
    <div class="input-container">
      <div class="input">
        <p class="username">
          <span class="tag">用户名</span>：
          <!-- <el-input class ="el_input" v-model="username" placeholder="请输入内容" size="mini" clearable></el-input> -->
          <input v-model="username" type="text" class="user-input o-input" />
        </p>
        <p class="password">
          <span class="tag">密码</span>：
          <!-- <el-input class ="el_input" v-model="username" placeholder="请输入内容" size="mini" clearable></el-input> -->
          <input v-model="password" type="password" class="pass-input o-input" />
        </p>
      </div>
      <div class="button">
        <button class="but" @click="regist">注册</button>
      </div>
    </div>
    <div class="tip">
      如果您已有账号，请进入登录页面!!<router-link to="login"><button>登录</button></router-link>
    </div>
  </div>
</template>

<script>
import { listObj } from '../server'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods:{
    regist(){
      let params = {
        user_name:this.username,
        password:this.password
      }
      listObj.registAccount(params).then(res=>{
        console.log(res);
        if(res == '注册成功！！'){
          this.$message('注册成功！！')
          this.$router.push('/login');
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  background: #02a7f0;
  width: 500px;
  height: 370px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  button:hover{
      cursor:pointer;
  }
  .header {
    height: 80px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 50px;
    .logo-container {
      width: 80px;
      height: 80px;
      padding: 20px;
      margin-left: 30px;
      margin-right: 50px;
      img{
        width:80px;
      }
    }
    .title {
      font-size: 30px;
      color: #fff;
      flex: 1;
    }
  }
  .input-container {
    margin: 0 auto;
    background: #fff;
    text-align: center;
    width: 60%;
    border-radius: 50%;
    border: solid 5px #027db4;
    padding: 40px 10px 10px;
    .input {
      .username {
        margin-bottom: 5px;
      }
      .tag {
        width: 50px;
        text-align: justify;
        display: inline-block;
      }
      .o-input {
        width: 120px;
        height: 20px;
        outline: none;
        border: none;
        background: #f2f2f2;
      }
    }
    .button {
      margin-top: 20px;
      .but {
        background: #02a7f0;
        color: #fff;
        border-radius: 5px;
        border: none;
        padding: 3px 20px;
      }
    }
  }
  .tip {
    width: 100%;
    height: 50px;
    text-align: right;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 14px;
    button {
      padding: 5px 10px;
      background: #027db4;
      color:#fff;
      border: none;
      outline: none;
      border-radius: 3px;
      font-size: 22px;
      margin-left: 10px;
    }
  }
}
</style>