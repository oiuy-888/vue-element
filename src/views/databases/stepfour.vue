<template>
  <div>
    <steps v-bind="stepsObj" />

    <div align="center" width="80%">
      <div class="table">
        <el-table
          :data="options"
          :border="true"
          style="width: 80%; margin-bottom: 80px;"
        >
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="50"
          />
          <el-table-column
            label="Form"
            prop="dataform"
            resizable
            :show-tooltip-when-overflow="true"
            min-width="5%"
          />
          <el-table-column
            label="Sql"
            prop="datasql"
            resizable
            :show-tooltip-when-overflow="true"
            min-width="80%"
          />
          <el-table-column
            label="操作"
            align="center"
            min-width="15%"
          >
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-clipboard:copy="scope.row.datasql"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >复制</el-button>
            <el-button
              size="mini"
              @click="dialogFormVisible = true"
              @click.prevent="setFormsql(scope.$index, scope.row)"
            >保存</el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div align="center">
      <el-button type="primary" @click="over()">完成</el-button>
    </div>

    <el-dialog title="版本号" :visible.sync="dialogFormVisible">
      <el-form :model="sqldata">
        <el-form-item label="version" :label-width="formLabelWidth">
          <el-input v-model="sqldata.version" autocomplete="off" placeholder="版本号" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" @click.prevent="saveFormsql()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import StepFour from './_stepfour.js'

export default {
  ...StepFour
}
</script>
