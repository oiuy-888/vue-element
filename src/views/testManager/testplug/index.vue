<template>
  <div class="tableDate">
    <el-container style="height: 100%; border: 5px solid #eee;">
      <el-header align="center">插件选型列表</el-header>
      <el-main>
        <el-button style="margin-top: 40px;" @click="next">创建插件</el-button>
      </el-main>
      <el-footer class="footer-font-size">插件类型问题，可查阅cf文档</el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    next() {
      this.$router.push({ path: '/testManager/addplugone' })
    }
  }
}
</script>

<style>
.footer-font-size {
  font-size: 10px;
  line-height:100px;
  text-align: center;
}
</style>
