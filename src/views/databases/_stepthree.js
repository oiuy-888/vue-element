import { getdatabases, getdatabasesnew } from '@/api/qiniu'
import steps from '@/components/steps'

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      form: {
        ip: '',
        port: '',
        name: '',
        password: '',
        bases: '',
        sql: ''
      },
      stepsObj: {
        active: 2,
        title: '查询表',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      dataform: '',
      options: []
    }
  },
  created() {
    this.options = this.$route.query.options,
    this.form = this.$route.query.form
  },
  methods: {
    getDatabases() {
      this.form.sql = 'show CREATE table ' + this.form.bases + '.' + this.dataform,
      this.getSqlData()
    },
    getSqlData() {
      getdatabasesnew(this.form).then(rsp => {
        this.$router.push({ path: '/databases/stepfour', query: { options: rsp.data }})
      }).catch(e => {
        console.info(e)
      })
    }
  }

}
