<template>
  <div id="chartColumn" style="width: 100%; height: 400px;" />
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      chartColumn: null
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.chartColumn = echarts.init(document.getElementById('chartColumn'))

      this.chartColumn.setOption({
        title: {
            text: '京东物流',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['Host', 'Mock', 'Consul']
        },
        series: [
            {
                name: '平台数据',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 3, name: 'Host'},
                    {value: 5, name: 'Mock'},
                    {value: 12, name: 'Consul'}
                ]
            }
        ]
      })
    }
  }
}
</script>
