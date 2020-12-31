<template>
  <div class="options">
    <steps v-bind="stepsObj" />

    <div class="table">
      <el-table
        :data="options"
        :border="true"
        style="width: 100%"
      >
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="50"
      />
      <el-table-column
        label="SQL"
        prop=""
        resizable
        :show-tooltip-when-overflow="true"
        min-width="120%"
      />
      </el-table>
    </div>

    <div align="center">
      <el-button type="primary" @click="getDatabases()">下一步</el-button>
    </div>
  </div>
</template>

<script>
import StepFour from './_stepfour.js'

export default {
  ...StepFour
}
</script>
