<template>
  <div class="tableData">
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  data() {
    return {
      tableData: [],
      loginForm:{
        username: 'admin',
        password: '123456'
      }
    }
  },
  created() {
    window.location.href = `http://test.ssa.jd.com/sso/login?ReturnUrl=127.0.0.1:9527/dashboard`
    this.$store.dispatch('user/login', this.loginForm)
  },
}
</script>
