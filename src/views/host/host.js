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
        this.updateData()
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
    updateData() {
      updatehost(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
        this.clearData() // 清空编辑后残留的数据，也可以不处理
      }).catch(e => {
        console.info(e)
      })
    },
    delData(index, row) {
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
