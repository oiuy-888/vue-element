<template>
  <div class="tableDate">
    <div class="pull-height animated" :style="{backgroundImage:'url('+url+')'}" style="background-size: 100% 100%">
      <div class="index">
        <steps v-bind="stepsObj" />
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import steps from '@/components/steps'
import bg from '@/assets/images/bg.jpeg'

export default {
  components: {
    steps
  },
  data() {
    return {
      tableData: [],
      url: bg,
      stepsObj: {
        active: 0,
        title: '创建插件',
        tiptitle: ['选择插件类型', '填写信息', '完成']
      }
    }
  },
  methods: {
    next() {
      this.$router.push({ path: '/testManager/addplug' })
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style>
.index {
    filter:alpha(Opacity=95);
    -moz-opacity:0.95;
    opacity: 0.95;
    }
</style>
