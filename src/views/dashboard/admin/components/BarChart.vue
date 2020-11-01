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
        title: { text: '京东物流' },
        backgroundColor: '#000',
        globe: {
          baseTexture: 'https://echarts.apache.org/examples/data-gl/asset/world.topo.bathy.200401.jpg',
          heightTexture: 'https://echarts.apache.org/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg',
          shading: 'lambert',
          light: {
            ambient: {
              intensity: 0.4
            },
            main: {
              intensity: 0.4
            }
          },
          viewControl: {
            autoRotate: false
          }
        },
        series: {
          type: 'lines3D',
          coordinateSystem: 'globe',
          blendMode: 'lighter',
          lineStyle: {
            width: 1,
            color: 'rgb(50, 50, 150)',
            opacity: 0.1
          },
          data: routes
        }
      })
    }
  }
}
</script>
