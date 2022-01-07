module.exports = {
    '/guide/': [
      {
        text: '指南',
        children: [
            {
                text: "快速上手",
                link: "/guide/README.md"
            }
        ],
      },
    ],
    '/form/': [
      {
        text: '基础',
        link: "/form/"
      },
      {
        text: "数据验证",
        children:[
            {
                text: "基础验证",
                link: "/form/rules/base.html"
            },
            {
                text: "自定义验证",
                link: "/form/rules/validator.html"
            }
        ]
      },
      {
        text: "数据字典",
        children:[
            {
                text: "普通用法",
                link: "/form/options/base.html"
            },
            {
                text: "异步数据",
                link: "/form/options/async.html"
            },
            {
                text: "级联",
                link: "/form/options/cascade.html"
            },
            {
                text: "级联查询",
                link: "/form/options/cascade-async.html"
            },
        ]
      },
      {
        text: "组件事件",
        children:[
            {
                text: "普通用法",
                link: "/form/events/base.html"
            },
        ]
      },
      {
        text: '配置',
        link: "/form/props/base.html",
      },
    ],
    "/table/":[
      {
        text: "基础用法",
        link: "/table/"
      },
      {
        text: "插槽自定义",
        children:[
          {
            text: "自定义单元格",
            link: "/table/slots/column.html"
          },
          {
            text: "自定义头部",
            link: "/table/slots/header.html"
          },
          {
            text: "自定义操作菜单",
            link: "/table/slots/operation-menu.html"
          },
          {
            text: "自定义左侧按钮",
            link: "/table/slots/menu-left.html"
          },
        ]
      },
      
      {
        text: "文件",
        children:[
          {
            text: "图片显示与上传",
            link: "/table/file/image.html"
          }
        ]
      },
      {
        text: "配置",
        children:[
          {
            text: "option配置",
            link: "/table/props/option.html"
          }
        ]
      },
    ]
  }