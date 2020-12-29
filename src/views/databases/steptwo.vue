<template>
  <div class="tableDate">
    <steps v-bind="stepsObj" />

    <div style="text-align: center; padding: 40px">
        <div style="text-align: center; margin-bottom: 30px">
          请选择数据库
        </div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-select v-model="databases" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-form>
    </div>
    <div align="center">
      <el-button type="primary" @click="getDatabases()">下一步</el-button>
    </div>
  </div>
</template>

<script>
import StepTwo from './_steptwo.js'

export default {
  ...StepTwo
}
</script>
