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
        ip: '',
        port: '',
        name: '',
        password: '',
        bases: '',
        sql: ''
      },
      stepsObj: {
        active: 3,
        title: '完成',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      dataform:'',
      options: []
    }
  },
  created() {
    this.options = this.$route.query.options;
    console.log(this.options)
  },
  methods: {
    getDatabases() {
      this.form.sql = 'show databases',
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
