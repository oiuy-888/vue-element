<template>
  <div>
    <P><el-button type="button" @click="dialogFormVisible  = true">新增mock配置</el-button></P>
    <el-table
      ref="table"
      :data="tableData"
      tooltip-effect="dark"
      border
      stripe
      style="width: 85%"
    >
      <el-table-column label="id" type="index" width="60" align="center" />
      <el-table-column label="请求方法" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.method" />
        </template>
      </el-table-column>
      <el-table-column label="响应延时" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.time" />
        </template>
      </el-table-column>
      <el-table-column label="url路径" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.url" />
        </template>
      </el-table-column>
      <el-table-column label="参数关键字" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.keyword" />
        </template>
      </el-table-column>
      <el-table-column label="响应" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.respond" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="30%">
        <template slot-scope="scope">
          <el-button type="text" @click="delData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="mock数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="url路径" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" placeholder="需要以/mock根路径起始"></el-input>
        </el-form-item>
        <el-form-item label="请求方式" :label-width="formLabelWidth">
          <el-select v-model="form.method" placeholder="请选择活请求方式">
            <el-option label="GET" value="GET"></el-option>
            <el-option label="POST" value="POST"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="响应延迟" :label-width="formLabelWidth">
          <el-input v-model="form.time" autocomplete="off" placeholder="延迟响应时间单位秒"></el-input>
        </el-form-item>
        <el-form-item label="参数关键字" :label-width="formLabelWidth">
        <el-input v-model="form.keyword" autocomplete="off" placeholder="参数包含该关键字即响应预置结果"></el-input>
        </el-form-item>
        <el-form-item label="响应内容" :label-width="formLabelWidth">
        <el-input v-model="form.respond" autocomplete="off" placeholder="请输入相应内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" @click.prevent="addData()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import { getlsmock } from '@/api/qiniu'
  import { addlsmock } from '@/api/qiniu'
  import { dellsmock } from '@/api/qiniu'
  export default {
    data() {
      return {
        tableData: [],
        formLabelWidth: '120px',
        dialogFormVisible: false,
        form: {
          url: '',
          method: '',
          time: '',
          keyword: '',
          respond: ''
        },
      }
    },
    created() {
      this.getData()
    },
    methods: {
      // 获取数据
      getData() {
        getlsmock().then(rsp => {
          this.tableData = rsp.data
        })
      },
      addData(){
        addlsmock(this.form).then(rsp =>{
          this.$message(rsp.data),
          this.getData()   //数据重加载
        }).catch( e =>
        { console.info(e)
        })
      },
      delData(index){
        this.$confirm('确认删除?','提示')
          .then(_ => {
            this.dellsmockData(index.id)
          })
          .catch(_ => {
          })
      },
      dellsmockData(id) {
        dellsmock(id).then(rsp => {
          this.$message(rsp.data),
          this.getData()
        }).catch(e => {
          console.info(e)
        })
      }
    }
  }
</script>

