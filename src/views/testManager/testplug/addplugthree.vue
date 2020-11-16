<template>
  <div class="tableDate">
    <steps v-bind="stepsObj" />
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
        active: 2,
        title: '创建插件',
        tiptitle: ['选择插件类型', '填写信息', '完成']
      }
    }
  },
  methods: {
    next() {
      this.$router.push({ path: '/testManager/testplug/index' })
    }
  }
}
</script>
