import steps from '@/components/steps'

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      stepsObj: {
        active: 3,
        title: '完成',
        tiptitle: ['数据库连接', '查询库', '查询表', '完成']
      },
      options: []
    }
  },
  created() {
    this.options = this.$route.query.options
    console.log(this.options)
  },
  methods: {
    over() {
      this.$router.push({ path: '/databases/index' })
    }
  }

}
