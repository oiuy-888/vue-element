<template>
  <div>
    <P><el-button type="button" @click="dialogFormVisible = true">增加配置</el-button></P>
    <el-dialog title="consul数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="id" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" placeholder="id标识" />
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="name名称" />
        </el-form-item>
        <el-form-item label="探针方式" :label-width="formLabelWidth">
          <el-select v-model="form.method" placeholder="请选择探针方式">
            <el-option label="TCP" value="tcp" />
            <el-option label="ARGS" value="args" />
          </el-select>
        </el-form-item>
        <el-form-item label="value" :label-width="formLabelWidth">
          <el-input v-model="form.value" autocomplete="off" placeholder="脚本配置" />
        </el-form-item>
        <el-form-item label="interval" :label-width="formLabelWidth">
          <el-input v-model="form.interval" autocomplete="off" placeholder="探针心跳" />
        </el-form-item>
        <el-form-item label="timeout" :label-width="formLabelWidth">
          <el-input v-model="form.timeout" autocomplete="off" placeholder="超时设定" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" @click.prevent="addData()">确 定</el-button>
      </div>
    </el-dialog>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="uid"
        label="id标识"
        width="180"
      />
      <el-table-column
        prop="name"
        label="name名称"
        width="180"
      />
      <el-table-column
        prop="method"
        label="探针方式"
      />
      <el-table-column
        prop="value"
        label="脚本配置"
      />
      <el-table-column
        prop="interval"
        label="探针心跳"
      />
      <el-table-column
        prop="timeout"
        label="超时设定"
      />
    </el-table>

  </div>
</template>

<script>
import { getconsul } from '@/api/qiniu'
import { addconsul } from '@/api/qiniu'
import { delconsul } from '@/api/qiniu'
export default {
  data() {
    return {
      tableData: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        method: '',
        value: '',
        interval: '',
        timeout: ''
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      getconsul().then(rsp => {
        this.tableData = rsp.data
      })
    },
    addData() {
      addconsul(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
      }).catch(e => {
        console.info(e)
      })
    },
    delData(index) {
      this.$confirm('确认删除?', '提示')
        .then(_ => {
          this.dellsmockData(index.id)
        })
        .catch(_ => {
        })
    },
    dellsmockData(id) {
      delconsul(id).then(rsp => {
        this.$message(rsp.message)
        this.getData()
      }).catch(e => {
        console.info(e)
      })
    }
  }
}
</script>

