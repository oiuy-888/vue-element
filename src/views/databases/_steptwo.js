import { getdatabases } from '@/api/qiniu'
import steps from '@/components/steps'

export default {
  components: {
    steps
  },
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
      stepsObj: {
        active: 1,
        title: '查询数据表信息',
        tiptitle: ['查询数据库信息', '查询数据表信息', '查询表结构']
      },
      databases: '',
      options: []
    }
  },
  created() {
    this.options = this.$route.query.options;
    console.log(this.options)
  },
  methods: {
    getDatabases() {
      this.form.bases = this.databases,
      this.form.sql = 'show tables',
      this.getSqlData()
    },
    getSqlData() {
      getdatabases(this.form).then(rsp => {
        this.options = rsp.data
        this.$router.push({ path: "/databases/stepthree" ,query:{options:rsp.data}});
      }).catch(e => {
        console.info(e)
      })
    }
  }

}
