import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: '关联系统', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/host',
    component: Layout,
    redirect: '/host/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/host/index'),
        name: 'HOST配置',
        meta: { title: 'HOST配置', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/mock',
    component: Layout,
    redirect: '/mock/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/mock/index'),
        name: '在线MOCK',
        meta: { title: '在线MOCK', icon: 'drag' }
      }
    ]
  },
  {
    path: '/jsonlink',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/jsonlink/index'),
        name: 'JSON在线解析',
        meta: { title: 'JSON在线解析', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/markdown',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/markdown/index'),
        name: 'Markdown预览',
        meta: { title: 'Markdown预览', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/consul',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'Consul', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/consul/index'),
        name: '健康检查',
        meta: { title: '健康检查', icon: 'eye-open' }
      },
      {
        path: 'add_task',
        hidden: true,
        component: () => import('@/views/consul/add_task'),
        name: '添加配置',
        meta: { title: '添加配置', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/databases',
    component: Layout,
    redirect: '/databases/index',
    meta: { title: '数据库管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/databases/index'),
        name: '数据库比对',
        meta: { title: '数据库比对', icon: 'star' }
      },
      {
        path: 'stepone',
        hidden: true,
        component: () => import('@/views/databases/stepone'),
        name: '数据库引导一',
        meta: { title: '数据库管理', icon: 'star' }
      },
      {
        path: 'steptwo',
        hidden: true,
        component: () => import('@/views/databases/steptwo'),
        name: '数据库引导二',
        meta: { title: '数据库管理', icon: 'star' }
      },
      {
        path: 'stepthree',
        hidden: true,
        component: () => import('@/views/databases/stepthree'),
        name: '数据库引导三',
        meta: { title: '数据库管理', icon: 'star' }
      },
      {
        path: 'stepfour',
        hidden: true,
        component: () => import('@/views/databases/stepfour'),
        name: '数据库引导四',
        meta: { title: '数据库管理', icon: 'star' }
      }
    ]
  },
  {
    path: '/testManager',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    meta: { title: '测试用例', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'testsuit/index',
        component: () => import('@/views/testManager/testsuit/index'),
        name: '测试用例集',
        meta: { title: '测试用例集', icon: 'clipboard' }
      },
      {
        path: 'testcase/index',
        component: () => import('@/views/testManager/testcase/index'),
        name: '测试脚本集',
        meta: { title: '测试脚本集', icon: 'clipboard' }
      },
      {
        path: 'testplug/index',
        component: () => import('@/views/testManager/testplug/index'),
        name: '测试插件集',
        meta: { title: '测试插件集', icon: 'clipboard' }
      },
      {
        path: 'addplugone',
        hidden: true,
        component: () => import('@/views/testManager/testplug/addplugone'),
        name: '添加插件',
        meta: { title: '添加插件', icon: 'clipboard' }
      },
      {
        path: 'addplugtwo',
        hidden: true,
        component: () => import('@/views/testManager/testplug/addplugtwo'),
        name: '添加插件',
        meta: { title: '添加插件', icon: 'clipboard' }
      },
      {
        path: 'addplugthree',
        hidden: true,
        component: () => import('@/views/testManager/testplug/addplugthree'),
        name: '添加插件',
        meta: { title: '添加插件', icon: 'clipboard' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
