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
        title: '查询数据库信息',
        tiptitle: ['查询数据库信息', '查询数据表信息', '查询表结构']
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
            this.options = rsp.data
            this.$router.push({ path: "/databases/steptwo" ,query:{options:rsp.data}});
          }).catch(e => {
            console.info(e)
          })
        }
  }

}
