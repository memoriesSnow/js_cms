<template>
  <div class="info">
    <div class="title">学生信息表</div>
    <div class="table">
      <el-table :data="tableData" border style="width: 88%" height="333">
        <el-table-column prop="stu_id" label="学号" width="100">
        </el-table-column>
        <el-table-column prop="stu_name" label="姓名" width="140">
        </el-table-column>
        <!-- <el-table-column prop="province" label="性别" width="120">
        </el-table-column>
        <el-table-column prop="city" label="籍贯" width="120">
        </el-table-column> -->
        <el-table-column prop="stu_gbf" label="男/女朋友" width="140">
        </el-table-column>
        <el-table-column prop="stu_hobby" label="爱好" width="200"> </el-table-column>
      </el-table>
    </div>
    <button class="toExcel">导出到Excel</button>
  </div>
</template>

<script>
import { listObj } from '../server'
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods:{
    getStuInfo(){
      listObj.stuInfoNot().then(res=>{
        console.log(res)
        this.tableData = res;
      })
    }
  },
  mounted(){
    this.getStuInfo()
  }
};
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.title {
  height:40px;
  font-weight: 500;
  font-size: 32px;
  color: #fff;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 20px;
}
.table {
  width: 666px;
  margin: 20px auto;
}
.toExcel{
    position:absolute;
    bottom:30px;
    right:100px;
    padding:5px 10px;
    color:#fff;
    background:#169BD5;
    border:none;
    border-radius:3px;
}
</style>