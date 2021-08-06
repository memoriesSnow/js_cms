<template>
  <div class="stu-info">
    <div class="title">学生信息录入表</div>
    <div class="content">
      <ul class="info">
        <li class="items"><span>学号：</span><input v-model="stu_id" /></li>
        <li class="items"><span>姓名：</span><input v-model="stu_name" /></li>
        <li class="items"><span>性别：</span><input v-model="stu_sex" /></li>
        <li class="items"><span>籍贯：</span><input v-model="stu_jg" /></li>
        <li class="items">
          <span>出生日期：</span><input class="a" v-model="stu_date" />
        </li>
        <li class="items">
          <span>异性朋友：</span><input class="a" v-model="stu_gbf" />
        </li>
        <li class="items">
          <p>评价 爱好:</p>
          <textarea
            v-model="stu_hobby"
            class="textarea"
            placeholder="我喜欢的东西……"
            cols="30"
            rows="10"
          ></textarea>
        </li>
      </ul>
      <div class="pic">
        <div class="pic-container">
          {{ fileName }}
          <img :src="image"/>
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
        </div>
        <div class="pic-submit">
          <input
            type="file"
            style="display: none"
            ref="submit"
            accept="image/*"
            @change="commit"
          />
          <button @click="upload">上传图片</button>
          <p>(上传图片小于180kb)</p>
        </div>
      </div>
    </div>
    <div class="submit-container">
      <button class="save" @click="injectInfo()">保存</button>
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
      stu_sex: "",
      stu_jg: "",
      stu_date: "",
      stu_gbf: "",
      stu_hobby: "",
      base64: "",
      image: "",
      fileName: "",
      imageUrl: ''
    };
  },
  methods: {
    upload() {
      this.$refs.submit.click();
    },
    async commit(e) {
      let file = e.target.files[0];
      if (!file) return;
      if (file.size > 180 * 1024) {
        alert("太大了");
        return;
      }
      this.base64 = await this.fileReader(file);
      console.log(this.base64);
      this.image = file.url;
      this.fileName = file.name;
    },
    /* commit(e){
      new Promise(resolve =>{
        let file = e.target.files[0];
        console.log(file);
        resolve(this.fileReader(file));
      }).then(res=>{
        console.log(res)
      })
    }, */
    fileReader(file) {
      return new Promise((resolve) => {
        let reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(file);
        reader.onload = (ev) => {
          resolve(ev.target.result);
          console.log(ev);
        };
      });
    },
    injectInfo(){
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
      if(!this.stu_sex){
        this.$message({
          message:'未输入性别',
          type:'warning'
        })
        return
      }
      if(!this.stu_jg){
        this.$message({
          message:'未输入籍贯',
          type:'warning'
        })
        return
      }
      if(!this.stu_date){
        this.$message({
          message:'未输入出生日期',
          type:'warning'
        })
        return
      }
      if(!this.stu_gbf){
        this.$message({
          message:'未输入伴侣',
          type:'warning'
        })
        return
      }
      if(!this.stu_hobby){
        this.$message({
          message:'未输入爱好',
          type:'warning'
        })
        return
      }
      if(!this.base64){
        this.$message({
          message:'未检测到照片',
          type:'warning'
        })
        return
      }
      let params = {
        stu_id:this.stu_id,
        stu_name:this.stu_name,
        stu_sex:this.sex,
        stu_jg:this.jg,
        stu_date:this.date,
        stu_gbf:this.stu_gbf,
        stu_hobby:this.stu_hobby,
        stu_head_img:this.base64
      }
      listObj.injectStuInfo(params).then(res=>{
        console.log(res);
        this.$message('录入成功')
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){

  }
};
</script>

<style lang="less" scoped>
.stu-info {
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
.content {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  .info {
    // width: 75%;
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 10px;
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
      .a {
        width: 140px;
      }
    }
  }
  .pic {
    flex: 1;
    background: blue;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    .pic-container {
      width: 200px;
      height: 240px;
      background: #ccc;
      border: solid 1px;
      text-align:center;
      font-size:20px;
    }
    .pic-submit {
      text-align: center;
      button {
        width: 100px;
        padding: 8px 20px;
        background: #169bd5;
        color: #fff;
        border: none;
        margin: 0 20px;
        border-radius: 3px;
        margin: 10px 0;
      }
    }
  }
}
textarea {
  width: 504px;
  height: 120px;
  outline: none;
  border: none;
  font-size: 20px;
  resize: none;
  margin-top: 10px;
}
textarea::placeholder {
  color: #aaa;
}
.submit-container {
  width: 100%;
  height: 50px;
  margin-top: 10px;
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
    border-radius: 3px;
  }
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>