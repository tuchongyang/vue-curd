export const siteData = {
  "base": "/vue-curd/",
  "lang": "zh-CN",
  "title": "vue-curd文档！",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/vue-curd/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
