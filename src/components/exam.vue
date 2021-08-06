<template>
  <div class="exam">
    <div class="title">{{ title }}</div>
    <ul class="items-container">
      <li class="items">
        <span>学号：<input v-model="stu_id" /></span>
        <span>姓名：<input v-model="stu_name" /></span>
      </li>
      <li class="items"><span>语文：</span><input v-model="chinese" /></li>
      <li class="items"><span>数学：</span><input v-model="math" /></li>
      <li class="items"><span>英语：</span><input v-model="english" /></li>
      <li class="items"><span>理综：</span><input v-model="lz" /></li>
      <li class="items"><span>文综：</span><input v-model="wz" /></li>
    </ul>
    <div class="submit-container">
      <button class="save" @click="saveScore(type)">保存</button>
      <button class="cancel">取消</button>
    </div>
  </div>
</template>

<script>
import { listObj } from '../server'
export default {
  data() {
    return {
      stu_id: "",
      stu_name: "",
      chinese: "",
      math: "",
      english: "",
      lz: "",
      wz: "",
    };
  },
  props: ["title", "type"],
  methods:{
    saveScore(type){
      let params = {
        stu_id:this.stu_id,
        stu_name:this.stu_name,
        chinese:this.chinese,
        math:this.math,
        english:this.english,
        lizong:this.lz,
        wenzong:this.wz
      }
      if(!this.stu_id){
        this.$message({
          message:'未输入学号',
          type:'warning'
        })
        return
      }
      if(!this.stu_name){
        this.$message({
          message:'未输入姓名',
          type:'warning'
        })
        return
      }
      if(!this.chinese){
        this.$message({
          message:'未输入语文成绩',
          type:'warning'
        })
        return
      }
      if(!this.math){
        this.$message({
          message:'未输入数学成绩',
          type:'warning'
        })
        return
      }
      if(!this.english){
        this.$message({
          message:'未输入英语成绩',
          type:'warning'
        })
        return
      }
      if(!this.lz){
        this.$message({
          message:'未输入理综成绩',
          type:'warning'
        })
        return
      }
      if(!this.wz){
        this.$message({
          message:'未输入文综成绩',
          type:'warning'
        })
        return
      }
      switch(type){
        case 'entry':
          listObj.entryExam(params).then(res=>{
            console.log(res)
          })
          break;
        case 'mid':
          listObj.midExam(params).then(res=>{
            console.log(res)
          })
          break;
        case 'end':
          listObj.endExam(params).then(res=>{
            console.log(res)
          })
          break;
      }
    }
  },
  mounted(){
    // this.saveScore(this.type)
  }
};
</script>

<style lang="less" scoped>
.exam {
  color: #fff;
  padding: 10px;
  border: 2px solid #333;
  height: 100%;
  width: 100%;
}
.title {
  width: 100%;
  font-size: 36px;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}
.items-container {
  width: 100%;
  text-align: center;
  .items {
    margin: 20px;
    font-size: 20px;
    input {
      width: 180px;
      height: 28px;
      line-height: 28px;
      outline: none;
      font-size: 18px;
      background: #f2f2f2;
      border: none;
    }
  }
  .items:nth-of-type(1) span {
    margin: 0 20px;
  }
}
.submit-container {
  width: 100%;
  height: 50px;
  margin-top: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  button {
    width: 100px;
    padding: 5px;
    background: #169bd5;
    color: #fff;
    border: none;
    margin: 0 20px;
    vertical-align: middle;
  }
}
</style>