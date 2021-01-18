<template>
  <div>
    <steps v-bind="stepsObj" />

    <div class="myFormBox">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" align="center">
        <el-form-item label="IP" prop="ip">
          <el-input v-model="form.ip" placeholder="地址" />
        </el-form-item>
        <el-form-item label="PORT" prop="port">
          <el-input v-model="form.port" placeholder="端口" />
        </el-form-item>
        <el-form-item label="ACCOUNT" prop="name">
          <el-input v-model="form.name" placeholder="账户" />
        </el-form-item>
        <el-form-item label="POSSWORD" prop="password">
          <el-input v-model="form.password" placeholder="密码" />
        </el-form-item>
        <div align="center">
          <el-button type="primary" @click="getDatabases()">下一步</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import StepOne from './_stepone.js'

export default {
  ...StepOne
}
</script>

<style>
.myFormBox{
  width: 50%;
  margin: 0 auto;
}
</style>
