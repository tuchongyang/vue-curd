export const themeData = {
  "logo": "/logo.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "文档",
      "children": [
        {
          "text": "CurdForm",
          "link": "/form/"
        },
        {
          "text": "CurdTable",
          "link": "/table/"
        }
      ]
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "指南",
        "children": [
          {
            "text": "快速上手",
            "link": "/guide/"
          }
        ]
      }
    ],
    "/form/": [
      {
        "text": "基础",
        "link": "/form/"
      },
      {
        "text": "数据验证",
        "children": [
          {
            "text": "基础验证",
            "link": "/form/rules/base.html"
          },
          {
            "text": "自定义验证",
            "link": "/form/rules/validator.html"
          }
        ]
      },
      {
        "text": "数据字典",
        "children": [
          {
            "text": "普通用法",
            "link": "/form/options/base.html"
          },
          {
            "text": "异步数据",
            "link": "/form/options/async.html"
          },
          {
            "text": "级联",
            "link": "/form/options/cascade.html"
          },
          {
            "text": "级联查询",
            "link": "/form/options/cascade-async.html"
          }
        ]
      },
      {
        "text": "组件事件",
        "children": [
          {
            "text": "普通用法",
            "link": "/form/events/base.html"
          }
        ]
      },
      {
        "text": "配置",
        "link": "/form/props/base.html"
      }
    ],
    "/table/": [
      {
        "text": "基础用法",
        "link": "/table/"
      },
      {
        "text": "插槽自定义",
        "children": [
          {
            "text": "自定义单元格",
            "link": "/table/slots/column.html"
          },
          {
            "text": "自定义头部",
            "link": "/table/slots/header.html"
          },
          {
            "text": "自定义操作菜单",
            "link": "/table/slots/operation-menu.html"
          },
          {
            "text": "自定义左侧按钮",
            "link": "/table/slots/menu-left.html"
          }
        ]
      },
      {
        "text": "文件",
        "children": [
          {
            "text": "图片显示与上传",
            "link": "/table/file/image.html"
          }
        ]
      },
      {
        "text": "配置",
        "children": [
          {
            "text": "option配置",
            "link": "/table/props/option.html"
          }
        ]
      }
    ]
  },
  "repo": "https://github.com/tuchongyang/vue-curd",
  "editLinks": true,
  "editLinkText": "帮助我们改善此页面！",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
