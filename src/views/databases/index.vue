<template>
  <div>


    <div align="center">
      <el-button style="margin-top: 12px;" @click="next">新建记录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({ path: '/databases/stepone' })
    }
  }
}
</script>
