<template>
  <div class="dashboard-editor-container">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <bar-chart />
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'

export default {
  name: 'DashboardAdmin',
  components: {
    BarChart
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

</style>
