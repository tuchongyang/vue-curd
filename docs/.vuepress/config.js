const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
module.exports = {
  base: "/vue-curd/",
  // 站点配置
  lang: 'zh-CN',
  title: 'vue-curd文档！',
  description: '',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  plugins: [],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar,
    sidebar
  },
}