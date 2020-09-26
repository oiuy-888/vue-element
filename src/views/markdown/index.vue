<template>
  <div class="mavonEditor">
    <div>
      <mavon-editor style="height:600px" v-model="doc"> </mavon-editor>
    </div>
  </div>
</template>

<script>
  import {mavonEditor} from "mavon-editor"
  import "mavon-editor/dist/css/index.css"

  export default {
    name: "Create",
    components: {mavonEditor},
    data(){
      return {
        doc: '暂无法编辑图片预览'
      }
    }
  }
</script>

<style scoped>
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
</style>
