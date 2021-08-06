<template>
  <div class ="main">
      <div class ="container">
          <div class ="items" v-for="item in stu_list" :key="item._id">
              <div class="pic-container">
                <img :src="item.stu_head_img"/>
              </div>
              <div class="stu-info">
                  <p class="stu_id">学号:{{ item.stu_id }}</p>
                  <p class="stu_name">姓名:{{ item.stu_name }}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { listObj } from '../server'
export default {
    data(){
        return{
            stu_list:[]
        }
    },
    methods:{
        getStuList(){
            listObj.stuInfo().then(res=>{
                this.stu_list = res;
                console.log(res);
            })
        }
    },
    mounted(){
        this.getStuList()
    }
}
</script>

<style lang="less" scoped>
.main{
    width:100%;
    height:100%;
}
.container{
    width:100%;
    height:100%;
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    .items{
        width:150px;
        height:200px;
        border:solid 2px;
        margin:0 30px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        padding:10px;
        .pic-container{
            width:65%;
            height:60%;
            background:yellow;
            margin-bottom:10px;
        }
        .stu-info{
            .stu_id{
                margin:5px 0;
            }
        }
    }
}

</style>