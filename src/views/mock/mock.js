import { getlsmock } from '@/api/qiniu'
import { addlsmock } from '@/api/qiniu'
import { dellsmock } from '@/api/qiniu'
import { selelsmock } from '@/api/qiniu'
import { updatelsmock } from '@/api/qiniu'

export default {
  data() {
    return {
      tableData: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      isEdit: false,
      form: {
        url: '',
        method: '',
        time: '',
        keyword: '',
        respond: ''
      }
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
    addData() {
      if (this.isEdit) {
        this.updateDate()
      } else {
        this.insertDate()
      }
    },
    insertDate() {
      addlsmock(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
        this.clearData() // 清空编辑后残留的数据
      }).catch(e => {
        console.info(e)
      })
    },
    updateDate() {
      updatelsmock(this.form).then(rsp => {
        this.$message(rsp.message)
        this.getData() // 数据重加载
        this.clearData() // 清空编辑后残留的数据
      }).catch(e => {
        console.info(e)
      })
    },
    seleData(index, row) {
      this.isEdit = true
      selelsmock(row.id).then(rsp => {
        this.form = rsp.data
      }).catch(e => {
        console.info(e)
      })
    },
    delData(index, row) {
      this.$confirm('确认删除?', '提示')
        .then(_ => {
          this.dellsmockData(row.id)
        })
        .catch(_ => {
        })
    },
    dellsmockData(id) {
      dellsmock(id).then(rsp => {
        this.$message(rsp.message)
        this.getData()
      }).catch(e => {
        console.info(e)
      })
    },
    clearData() {
      this.isEdit = false
      this.form = {
        url: '',
        method: '',
        time: '',
        keyword: '',
        respond: ''
      }
    }
  }
}
