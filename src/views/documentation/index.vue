<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="http://jira.jd.com/">JIRA系统</a>
    <a class="document-btn" target="_blank" href="https://cf.jd.com/pages/viewpage.action?pageId=248074199">CF知识管理平台</a>
    <a class="document-btn" target="_blank" href="http://easytest.jd.com/HomeController/goHome">Easytest平台</a>
    <a class="document-btn" target="_blank" href="http://itat.jd.com/">玲珑自动化</a>
    <a class="document-btn" target="_blank" href="http://bossgzf.jd.com/#/web/personal/my">BigBoss工作台</a>
    <a class="document-btn" target="_blank" href="https://joyspace.jd.com/">JoySpace平台</a>
    <a class="document-btn" target="_blank" href="http://jagile.jd.com">行云</a>
    <a class="document-btn" target="_blank" href="http://erp.jd.com">京东企业门户</a>
    <dropdown-menu class="document-btn" :items="codingList" title="代码管理" />
    <dropdown-menu class="document-btn" :items="articleList" title="JSF服务平台" />

  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '测试环境', href: 'http://test.jsf.jd.com/' },
        { title: '生产环境', href: 'http://jsf.jd.com/' }
      ],
      codingList: [
        { title: 'GitLab', href: 'https://git.jd.com/' },
        { title: 'Coding', href: 'http://coding.jd.com/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: #ffffff;
    color: black;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
