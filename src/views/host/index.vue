<template>
  <div class="tableDate">
    <div class="button" style="width:13%;float:right;">
      <P><el-button class="el-icon-plus" @click.prevent="addRow()" /></P>
      <p><el-button class="el-icon-minus" @click.prevent="delData()" /></p>
      <p><el-button style="width:70px" align="center" @click.prevent="update()">确定</el-button></p>
    </div>
    <div class="table">
      <el-table
        ref="table"
        :data="tableData"
        tooltip-effect="dark"
        border
        stripe
        style="width: 85%"
        @selection-change="selectRow"
      >
        <el-table-column type="selection" width="45" align="center" />
        <el-table-column label="序号" type="index" width="60" align="center" />
        <el-table-column label="应用" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" />
          </template>
        </el-table-column>
        <el-table-column label="host信息" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.host" />
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.remark" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { gethost } from '@/api/qiniu'
import { addhost } from '@/api/qiniu'

export default {
  data() {
    return {
      tableData: [],
      selectlistRow: [],
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
    // 提交数据
    update() {
      addhost(this.tableData).then( rsp => {
//        this.$message(rsp.code +', '+rsp.data)
        this.$message(rsp.data)
        console.log(rsp)
      }).catch( e =>
        { console.info(e)
        })
    },
    // 获取表格选中时的数据
    selectRow(val) {
      this.selectlistRow = val
    },
    // 增加行
    addRow() {
      var list = {
        name: this.name,
        host: this.host,
        remark: this.remark }
      this.tableData.unshift(list)
    },
    // 删除方法
    // 删除选中行
    delData() {
      for (let i = 0; i < this.selectlistRow.length; i++) {
        const val = this.selectlistRow
        // 获取选中行的索引的方法
        // 遍历表格中tableData数据和选中的val数据，比较它们的id,相等则输出选中行的索引
        // id的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
        val.forEach((val, index) => {
          this.tableData.forEach((v, i) => {
            if (val.id === v.id) {
              // i 为选中的索引
              this.tableData.splice(i, 1)
            }
          })
        })
      }
      // 删除完数据之后清除勾s选框
//      this.$refs.tableData.clearSelection()
    }
  }
}
</script>
