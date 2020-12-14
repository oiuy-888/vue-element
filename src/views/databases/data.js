import { getdatabases } from '@/api/qiniu'

export default {
  data() {
    return {
      tableData: [],
      form: {
        ip: '127.0.0.1',
        port: '3306',
        name: 'root',
        password: '123456',
        bases: '',
        sql: ''
      },
      databases: '',
      dataform: '',
      options: [],
      dialogFormVisible: false
    }
  },
  methods: {
    getDatabases() {
      this.form.sql = 'show databases',
      this.getSqlData()
    },
    getDataform() {
      this.form.bases = this.databases,
      this.form.sql = 'show tables',
      this.getSqlData()
    },
    getCreateSql() {
      this.form.bases = this.databases,
      this.form.sql = 'show CREATE table ' + this.dataform,
      this.getSqlData()
    },
    getSqlData() {
      getdatabases(this.form).then(rsp => {
        this.options = rsp.data
      }).catch(e => {
        console.info(e)
      })
    }
  }

}
