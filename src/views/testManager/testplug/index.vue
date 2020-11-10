<template>
  <div class="tableDate">
    <el-container style="height: 100%; border: 5px solid #eee;">
      <el-header align="center">插件选型</el-header>
      <el-main>
        <el-button style="margin-top: 40px;" @click="next">下一步</el-button>
      </el-main>
      <el-footer align="center">插件类型问题，可查阅cf文档</el-footer>
    </el-container>
  </div>
</template>

<script>
import steps from "@/components/steps";

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      stepsObj:{
        active: 0,
        title:'创建插件',
        tiptitle:['选择插件类型','填写信息','完成']
      },
    }
  },
  methods: {
    next() {
      this.$router.push({path: '/testManager/addplugone'})
    }
  }
}
</script>
