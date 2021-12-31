import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-14948c92","/form/",{"title":""},["/form/index.html","/form/README.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-d5d75b4c","/table/",{"title":""},["/table/index.html","/table/README.md"]],
  ["v-1f14d7c4","/form/events/base.html",{"title":""},["/form/events/base","/form/events/base.md"]],
  ["v-f0935800","/form/options/async.html",{"title":""},["/form/options/async","/form/options/async.md"]],
  ["v-1404dc25","/form/options/base.html",{"title":""},["/form/options/base","/form/options/base.md"]],
  ["v-3d59248e","/form/options/cascade-async.html",{"title":""},["/form/options/cascade-async","/form/options/cascade-async.md"]],
  ["v-41e9b608","/form/options/cascade.html",{"title":""},["/form/options/cascade","/form/options/cascade.md"]],
  ["v-15f8d3f7","/form/props/base.html",{"title":""},["/form/props/base","/form/props/base.md"]],
  ["v-4f1dd6be","/form/rules/base.html",{"title":""},["/form/rules/base","/form/rules/base.md"]],
  ["v-8085571e","/form/rules/validator.html",{"title":""},["/form/rules/validator","/form/rules/validator.md"]],
  ["v-3dcc7d37","/table/file/image.html",{"title":""},["/table/file/image","/table/file/image.md"]],
  ["v-11f46678","/table/slots/header.html",{"title":""},["/table/slots/header","/table/slots/header.md"]],
  ["v-131b96b8","/table/slots/menu-left.html",{"title":""},["/table/slots/menu-left","/table/slots/menu-left.md"]],
  ["v-5cddbe00","/table/slots/operation-menu.html",{"title":""},["/table/slots/operation-menu","/table/slots/operation-menu.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
