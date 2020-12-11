<template>
  <div class="tableDate">
    <div align="center">
      <el-button @click="getDatabases()">查库</el-button>
    </div>
      <el-cascader :options="tableDate" clearable></el-cascader>
  </div>
</template>

<script>
import DataComponent from './data.js'

export default {
  ...DataComponent
}
</script>
