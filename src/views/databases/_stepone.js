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
      rules: {
        ip: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
        ],
        port: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
        ]
      },
      stepsObj: {
        active: 0,
        title: '数据库连接',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      options: []
    }
  },
  methods: {
    getDatabases() {
    this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.sql = 'show databases',
          this.getSqlData()
        }
      })
    },
    getSqlData() {
          getdatabases(this.form).then(rsp => {
            this.$router.push({ path: "/databases/steptwo" ,query:{options:rsp.data,form:this.form}});
          }).catch(e => {
            console.info(e)
          })
        }
  }

}
