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
          label="Host"
          prop="host"
          resizable
          :show-tooltip-when-overflow="true"
          min-width="120%"
        />
        <el-table-column
          label="Name"
          prop="name"
          min-width="30%"
        />
        <el-table-column
          label="备注"
          prop="remark"
          :show-tooltip-when-overflow="true"
          min-width="30%"
        />
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

    <el-dialog title="HOST配置" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="host" :label-width="formLabelWidth">
          <el-input v-model="form.host" autocomplete="off" placeholder="配置信息" />
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="系统名称" />
        </el-form-item>
        <el-form-item label="createruser" :label-width="formLabelWidth">
          <el-input v-model="form.createruser" autocomplete="off" placeholder="创建人" />
        </el-form-item>
        <el-form-item label="remark" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off" placeholder="备注" />
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
import HostComponent from './host.js'

export default {
  ...HostComponent
}
</script>
