import { createApp } from "vue"
import App from "./App.vue"
import "element-plus/dist/index.css"
import "../lib/index.css"
// import NanditVue from "~/index"; // 这里 ~ 就是在 tsconfig.json 以及 vue.config.js 配置的 packages 路径
// import NanditVue from "aaa-ui"
// import "aaa-ui/lib/theme-chalk/index.css"
// import CurdTable from "@vue-curd/curd-table";
// import CurdTable from "~/curd-table"

// import TableFilter from "~/table-filter"
// import CurdForm from "~/curd-form"
import VueCurd from "~/vue-curd"

const app = createApp(App)

// app.use(NanditVue)
// app.component("TableFilter", TableFilter);
app.use(VueCurd)
// app.use(TableFilter)
// app.use(CurdTable)
// app.use(FormDialog)
app.mount("#app")
