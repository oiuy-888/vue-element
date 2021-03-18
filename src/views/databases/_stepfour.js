import steps from '@/components/steps'
import { saveformsql } from '@/api/qiniu'

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      sqldata: {
        form: '',
        sql: '',
        version: ''
      },
      stepsObj: {
        active: 3,
        title: '完成',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      options: [],
      dialogFormVisible: false
    }
  },
  created() {
    this.options = this.$route.query.options
    console.log(this.options)
  },
  methods: {
    setFormsql(index, row) {
      this.sqldata.version='',
      this.sqldata.form=row.dataform,
      this.sqldata.sql=row.datasql
    },
    saveFormsql() {
      saveformsql(this.sqldata).then(rsp => {
        this.$message(rsp.message)
      }).catch(e => {
        console.info(e)
      })
    },
    over() {
      this.$router.push({ path: '/databases/index' })
    },
    onCopy (e) {
       this.$message.success("内容已复制到剪切板！")
    },
    onError (e) {
       this.$message.error("抱歉，复制失败！")
    }
  }

}
