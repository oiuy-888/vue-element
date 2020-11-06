module.exports = {
  title: '测试辅助工具平台',

  /**
   * @type {boolean} true | false
   * @description 右侧面板设置功能
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description 上方导航栏
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
