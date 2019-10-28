<template>
<div>
    <br>
    <el-form :inline="true">
        <el-form-item label="活动名称">
                <el-input v-model="searchMap.name" placeholder="活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动日期">
                <el-date-picker
                    v-model="searchMap.starttime_1"
                    type="date"
                    placeholder="开始日期">
                </el-date-picker>
                   <el-date-picker
                    v-model="searchMap.starttime_2"
                    type="date"
                    placeholder="结束日期">
                </el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="fetchData()">查询</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </el-form>
    <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="活动名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="summary"
      label="活动概要">
    </el-table-column>
     <el-table-column
      prop="detail"
      label="活动详情"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sponsor"
      label="sponsor"
      width="180">
    </el-table-column>
    <el-table-column
      prop="image"
      label="活动照片">
    </el-table-column>
        <el-table-column
      prop="starttime"
      label="开始时间">
    </el-table-column>
     <el-table-column
      prop="endtime"
      label="结束时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="活动地址"
      width="180">
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="fetchData"
      @current-change="fetchData"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
<el-dialog titl="编辑"  :visible.sync="dialogFormVisible">
    <el-form label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="pojo.name" placeholder="活动名称"></el-input>
        </el-form-item>
        <el-form-item label="基本地址">
            <el-input v-model="pojo.address" placeholder="基本地址"></el-input>
        </el-form-item>
        <el-form-item label="开始日期">
           <el-date-picker
                    v-model="pojo.starttime"
                    type="date"
                    placeholder="开始日期">
             </el-date-picker>
        </el-form-item>
        <el-form-item label="截止日期">
           <el-date-picker
                    v-model="pojo.endtime"
                    type="date"
                    placeholder="截止日期">
             </el-date-picker>        
        </el-form-item>
        <el-form-item label="报名截止">
            <el-date-picker
                        v-model="pojo.enrolltime"
                        type="date"
                        placeholder="报名截止">
            </el-date-picker>            
        </el-form-item>
        <el-form-item label="活动详情">
            <el-input type="textarea" :rows=2 v-model="pojo.detail" placeholder="活动详情"></el-input>
        </el-form-item>
        <el-form-item label="活动城市">
            <el-select v-model="pojo.city" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.name"
                :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否可见">
            <el-switch
                v-model="pojo.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="1"
                inactive-value="0">
            </el-switch>
        </el-form-item>
        <el-form-item>
              <el-button >保存</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
        </el-form-item>
    </el-form>
</el-dialog>    
</div>
</template>

<script>
import gatheringApi from '@/api/gathering'
import cityApi from '@/api/city'
export default {
    data(){
        return {
            list:[],
            total:0,
            currentPage:1,
            size:10,
            searchMap:{},
            dialogFormVisible:false,//编辑窗口是否可见
            pojo:{},//活动对应的实体类型
            cityList:{},
        }
    },
    created(){
        this.fetchData()
        cityApi.getList().then((response) => {
            this.cityList = response.data; 
        })
    },
    methods:{
        fetchData(){
            // gatheringApi.getList().then(response => {
            //     this.list = response.data
            // })
            gatheringApi.search(this.currentPage,this.size,this.searchMap).then(response => {
                this.list = response.data.rows;
                this.total = response.data.total;
            })
      },
       
    }
}
</script>

<style scoped>

</style>