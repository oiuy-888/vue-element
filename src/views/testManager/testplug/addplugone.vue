<template>
  <div class="tableDate">
    <steps v-bind="stepsObj" />
    <div class="text-desc">
      选择插件类型并自定义名称
    </div>
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" style="width:30%;" placeholder="审批人" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
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

}
</style>
