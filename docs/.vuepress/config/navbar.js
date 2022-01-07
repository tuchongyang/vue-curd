module.exports = [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "指南",
      link: "/guide/",
    },
    {
      text: "文档",
      children:[
          {
              text: "CurdForm",
              link: "/form/"
          },
          {
              text: "CurdTable",
              link: "/table/"
          }
      ]
    },
    {
      text: "GitHub",
      link: "https://github.com/tuchongyang/vue-curd",
      target: "_blank"
    },
]