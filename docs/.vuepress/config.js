const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
// const img = require('./public/logo.png')
// console.log('img',img)
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
    logo: '/logo.png',
    navbar,
    sidebar,
    repo: 'https://github.com/tuchongyang/vue-curd',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  head: [
    ['link', { rel: 'icon', href: '/vue-curd/favicon.ico' }]
  ]
}