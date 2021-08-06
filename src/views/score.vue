<template>
  <div class="score">
    <div class="title">学生成绩表</div>
    <div class="find">
      <div class="items"><span>学号：</span><input v-model="stu_id" /></div>
      <div class="items"><span>姓名：</span><input v-model="stu_name" /></div>
    </div>
    <div class="tab">
      <button @click="getSingleScore('entry')">入学考试</button>
      <button @click="getSingleScore('mid')">期中考试</button>
      <button @click="getSingleScore('end')">期末考试</button>
      <button @click="getAllScore">全部成绩</button>
    </div>
    <div class="score-content">
      <div class="scores">
        <div class="entry-score item" v-show="entry_flag">
          入学考试：
          <div>
            <el-table
              class="tablea"
              :data="entryData"
              border
              style="width: 561px"
            >
              <el-table-column
                :resizable="false"
                prop="chinese"
                label="语文"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="math"
                label="数学"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="english"
                label="英语"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="wenzong"
                label="文综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="lizong"
                label="理综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="avg"
                label="平均分"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="total"
                label="总分"
                width="80"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="mid-score item" v-show="mid_flag">
          期中考试：
          <div>
            <el-table
              class="tablea"
              :data="midData"
              border
              style="width: 561px"
            >
              <el-table-column
                :resizable="false"
                prop="chinese"
                label="语文"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="math"
                label="数学"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="english"
                label="英语"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="wz"
                label="文综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="lz"
                label="理综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="avg"
                label="平均分"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="total"
                label="总分"
                width="80"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="end-score item" v-show="end_flag">
          期末考试：
          <div>
            <el-table
              class="tablea"
              :data="endData"
              border
              style="width: 561px"
            >
              <el-table-column
                :resizable="false"
                prop="chinese"
                label="语文"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="math"
                label="数学"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="english"
                label="英语"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="wz"
                label="文综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="lz"
                label="理综"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="avg"
                label="平均分"
                width="80"
              >
              </el-table-column>
              <el-table-column
                :resizable="false"
                prop="total"
                label="总分"
                width="80"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="evaluation">
        <p>评价</p>
        <p><input type="text" disabled="disabled" :value="name" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import { listObj } from "../server";
export default {
  data() {
    return {
      name: "zimo",
      stu_id: "",
      stu_name: "",
      entryData: [],
      midData: [],
      endData: [],
      entry_flag: false,
      mid_flag: false,
      end_flag: false,
    };
  },
  methods: {
    getEntryData() {
      listObj.searchEntry(this.stu_id).then((res) => {
        console.log(res);
        if(res.length == 0) return
        this.entryData = res;
        this.calcScore(res[0],this.entryData[0]);
      });
    },
    getMidData() {
      listObj.searchMid(this.stu_id).then((res) => {
        console.log(res);
        if(res.length == 0) return
        this.midData = res;
        this.calcScore(res[0],this.midData[0]);
      });
    },
    getEndData() {
      listObj.searchEnd(this.stu_id).then((res) => {
        console.log(res);
        if(res.length == 0) return
        this.endData = res;
        this.calcScore(res[0],this.endData[0]);
      });
    },
    getSingleScore(a) {
      this.closeAllFlag();
      switch (a) {
        case "entry":
          this.getEntryData();
          this.entry_flag = true;
          break;
        case "mid":
          this.getMidData();
          this.mid_flag = true;
          break;
        case "end":
          this.getEndData();
          this.end_flag = true;
      }
    },
    calcScore(obj,obj1) {
      let total = 0;
      total += obj.chinese + obj.math + obj.english + obj.wenzong + obj.lizong;
      console.log(total);
      let avg = total / 5;
      obj1.total = total;
      obj1.avg = avg;
      console.log(avg)
      if(avg>90) {
        this.name = '优'
        return;
      }
      if(avg>80) {
        this.name = '良'
        return;
      }
      if(avg>60) {
        this.name = '及格'
        return;
      }
      if(avg<60) {
        this.name = '不及格'
        return;
      }
    },
    getAllScore() {
      this.entry_flag = true;
      this.mid_flag = true;
      this.end_flag = true;
    },
    closeAllFlag() {
      this.entry_flag = false;
      this.mid_flag = false;
      this.end_flag = false;
    },
  },
};
</script>

<style lang="less" scoped>
.score {
  padding: 20px 50px;
}
.title {
  font-size: 30px;
  color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: 600;
}
.find {
  height: 60px;
  display: flex;
  .items {
    margin: 0 20px;
    color: #fff;
    font-size: 20px;
    input {
      width: 150px;
      height: 30px;
      border: none;
      outline: none;
      background: #f2f2f2;
    }
  }
}
.tab {
  height: 50px;
  button {
    background: #159ad4;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 10px 30px;
    margin-right: 20px;
  }
}
.score-content {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .scores {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      div {
        margin-top: 15px;
      }
    }
  }
  .evaluation {
    width: 20%;
    height: 100%;
    p {
      margin-bottom: 20px;
      color: #fff;
      font-size: 20px;
    }
    input {
      user-select: none;
      width: 80%;
      height: 180px;
      text-align: center;
    }
  }
}
/deep/ .tablea {
  overflow: hidden;
  th {
    padding: 0 !important;
    height: 30px;
  }
  td {
    padding: 0 !important;
    height: 30px;
  }
}
/deep/ .el-table__empty-text{
  line-height:30px;
}
/deep/ .el-table__empty-block{
  min-height:30px;
}
</style>