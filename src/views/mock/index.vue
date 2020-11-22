<template>
  <div class="tableDate">
    <div class="table">
      <el-table
        :data="tableData"
        :border="true"
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="50"
        />
        <el-table-column
          label="请求方法"
          prop="method"
        />
        <el-table-column
          label="响应延时"
          prop="time"
        />
        <el-table-column
          label="url路径"
          prop="url"
        />
        <el-table-column
          label="参数关键字"
          prop="keyword"
        />
        <el-table-column
          label="响应"
          prop="respond"
          :show-tooltip-when-overflow="true"
        />
        <el-table-column
          label="数据使用方式"
          prop="method,url,respond"
          :show-tooltip-when-overflow="true">
          <template slot-scope="scope">
            使用{{scope.row.method}}方式，携带包含关键字{{scope.row.keyword}}的参数，请求{HOST:PORT}/mock{{scope.row.url}}会收到响应内容{{scope.row.respond}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="155"
        >
          <template slot="header" slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogFormVisible = true"
              @click.prevent="clearData()"
            >新建</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogFormVisible = true"
              @click.prevent="seleData(scope.$index, scope.row)"
            >Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="delData(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="mock数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="url路径" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" placeholder="需要以/mock根路径起始" />
        </el-form-item>
        <el-form-item label="请求方式" :label-width="formLabelWidth">
          <el-select v-model="form.method" placeholder="请选择请求方式">
            <el-option label="GET" value="GET" />
            <el-option label="POST" value="POST" />
          </el-select>
        </el-form-item>
        <el-form-item label="响应延迟" :label-width="formLabelWidth">
          <el-input v-model="form.time" autocomplete="off" placeholder="延迟响应时间单位秒" />
        </el-form-item>
        <el-form-item label="参数关键字" :label-width="formLabelWidth">
          <el-input v-model="form.keyword" autocomplete="off" placeholder="参数包含该关键字即响应预置结果" />
        </el-form-item>
        <el-form-item label="响应内容" :label-width="formLabelWidth">
          <el-input v-model="form.respond" autocomplete="off" placeholder="请输入相应内容" />
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
import MockComponent from './mock.js'

export default {
  ...MockComponent
}

</script>

