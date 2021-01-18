<template>
  <div>
    <steps v-bind="stepsObj" />

    <div align="center" width="80%">
      <div class="table">
        <el-table
          :data="options"
          :border="true"
          style="width: 80%; margin-bottom: 80px;"
        >
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="50"
          />
          <el-table-column
            label="Form"
            prop="dataform"
            resizable
            :show-tooltip-when-overflow="true"
            min-width="20%"
          />
          <el-table-column
            label="Sql"
            prop="datasql"
            resizable
            :show-tooltip-when-overflow="true"
            min-width="120%"
          />
        </el-table>
      </div>
    </div>

    <div align="center">
      <el-button type="primary" @click="over()">保存</el-button>
    </div>
  </div>
</template>

<script>
import StepFour from './_stepfour.js'

export default {
  ...StepFour
}
</script>
