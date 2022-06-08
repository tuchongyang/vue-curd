import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs"

// import VueCurd from "@vue-curd/vue-curd"
import VueCurd from "../../src/index"
import "./style.css"


export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus, { locale: zhCn, size: "mini" })
    app.use(VueCurd)

})