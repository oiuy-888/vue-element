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
        bases: 'test',
        sql: 'show databases'
      }
    }
  },
  methods: {
    getDatabases() {
      getdatabases(this.form).then(rsp => {
        this.tableData = rsp.data
      }).catch(e => {
        console.info(e)
      })
    }
  }

}
