<template>
  <div class="app-container">
    <iframe id="mobsf" src="https://www.json.cn/" frameborder="0" style="position:absolute;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    /**
         * iframe-???????
         */
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = (Number(deviceWidth) - 220) + 'px' // ???????????
      mobsf.style.height = (Number(deviceHeight) - 80) + 'px' // ??????????
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
  }
}
</script>

