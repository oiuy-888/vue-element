<template>
  <div class="tableDate">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [],
      active: 2
    }
  },
  created() {
    this.getData()
  },
  methods: {
    next() {
      this.$router.push({path: '/testManager/index'})
      if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>
