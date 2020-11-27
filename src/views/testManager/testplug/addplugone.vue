<template>
  <div class="tableDate">
    <steps v-bind="stepsObj" />
    <div class="text-desc">
      选择插件类型并自定义名称
    </div>
    <el-form :model="formInline" label-width="500px" class="plug-form">
      <el-form-item label="插件名称">
        <el-input v-model="formInline.user" style="width:30%;" placeholder="" />
      </el-form-item>
      <el-form-item label="插件类型">
        <el-select v-model="formInline.region" placeholder="">
          <el-option label="发送请求" value="shanghai" />
          <el-option label="提取字段" value="beijing" />
          <el-option label="结果断言" value="beijing" />
          <el-option label="自定义参数" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import steps from '@/components/steps'

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      stepsObj: {
        active: 0,
        title: '创建插件',
        tiptitle: ['选择插件类型', '填写信息', '完成']
      },
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    next() {
      this.$router.push({ path: '/testManager/addplugtwo' })
    }
  }
}
</script>

<style>
.text-desc {
  text-align: center;
  font-size: 20px;
}
.plug-form {
  margin-top: 40px;
}
</style>
