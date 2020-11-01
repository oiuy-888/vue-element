<template>
  <div class="tableDate">
    <div class="table">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        border="true"
        style="width: 100%"
      >
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
        />
        <el-table-column
          label="备注"
          prop="remark"
          show-tooltip-when-overflow="true"
          min-width="30%"
        />
        <el-table-column
          align="right"
          min-width="35%"
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
              @click="delDate(scope.$index, scope.row)"
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
import { gethost } from '@/api/qiniu'
import { addhost } from '@/api/qiniu'
import { delhost } from '@/api/qiniu'
import { updatehost } from '@/api/qiniu'
import { selehost } from '@/api/qiniu'

export default {
  data() {
    return {
      tableData: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      isEdit: false,
      form: {
        host: '',
        name: '',
        remark: '',
        createruser: ''
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      gethost().then(rsp => {
        this.tableData = rsp.data
      })
    },
    addData() {
      if (this.isEdit) {
        this.updateDate()
      } else {
        this.insertDate()
      }
    },
    insertDate() {
      addhost(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
        this.clearData() // 清空编辑后残留的数据
      }).catch(e => {
        console.info(e)
      })
    },
    seleData(index, row) {
      this.isEdit = true
      selehost(row.id).then(rsp => {
        this.form = rsp.data
      }).catch(e => {
        console.info(e)
      })
    },
    updateDate() {
      updatehost(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
        this.clearData() // 清空编辑后残留的数据，也可以不处理
      }).catch(e => {
        console.info(e)
      })
    },
    delDate(index, row) {
      this.$confirm('确认删除?', '提示')
        .then(_ => {
          this.deletehost(row.id)
        })
        .catch(_ => {
        })
    },
    deletehost(id) {
      delhost(id).then(rsp => {
        this.$message(rsp.message)
        this.getData()
      }).catch(e => {
        console.info(e)
      })
    },
    clearData() {
      this.isEdit = false
      this.form = {
        host: '',
        name: '',
        remark: '',
        createruser: ''
      }
    }
  }
}
</script>
