<template>
  <div class="app-container">
    <iframe id="mobsf" src="http://10.170.222.64:8500/ui/dc1/services" frameborder="0" style="position:absolute;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = (Number(deviceWidth) - 250) + 'px'
      mobsf.style.height = (Number(deviceHeight) - 100) + 'px'
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
  }
}
</script>

