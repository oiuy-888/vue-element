import { getdatabases,savedatabases } from '@/api/qiniu'
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
        active: 1,
        title: '查询库',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      databases: '',
      options: []
    }
  },
  created() {
    this.options = this.$route.query.options,
    this.form = this.$route.query.form
  },
  methods: {
    getDatabases() {
      this.form.bases = this.databases,
      this.form.sql = 'show tables',
      this.saveDatas()
      this.getSqlData()
    },
    getSqlData() {
        getdatabases(this.form).then(rsp => {
        this.$router.push({ path: "/databases/stepthree" ,query:{options:rsp.data,form:this.form}});
      }).catch(e => {
        console.info(e)
      })
    },
    saveDatas() {
            savedatabases(this.form).then(rsp => {
            //nothing
          }).catch(e => {
            console.info(e)
          })
        }
  }

}
