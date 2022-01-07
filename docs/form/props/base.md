
## Form属性

<!-- <CurdTable :data="data" :columns="columns" :option="option"></CurdTable> -->
<table>
    <thead>
        <tr>
            <td v-for="column in columns" :key="column.prop">{{column.label}}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,i) in data" :key="item.prop">
            <td v-for="column in columns" :key="column.prop">{{item[column.prop]}}</td>
        </tr>
    </tbody>
</table>

## FormItem 属性

<!-- <CurdTable :data="data1" :columns="columns" :option="option"></CurdTable> -->
<table>
    <thead>
        <tr>
            <td v-for="column in columns" :key="column.prop">{{column.label}}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,i) in data1" :key="item.prop">
            <td v-for="column in columns" :key="column.prop">{{item[column.prop]}}</td>
        </tr>
    </tbody>
</table>

## type为file的FormItem 属性

<!-- <CurdTable :data="data2" :columns="columns" :option="option"></CurdTable> -->
<table>
    <thead>
        <tr>
            <td v-for="column in columns" :key="column.prop">{{column.label}}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,i) in data2" :key="item.prop">
            <td v-for="column in columns" :key="column.prop">{{item[column.prop]}}</td>
        </tr>
    </tbody>
</table>


<script setup>
import { ref } from "vue"
const columns = ref([
  {prop: "prop",label:"属性"},
  {prop: "desc",label:"说明"},
  {prop: "type",label:"类型"},
  {prop: "opValue",label:"可选值"},
  {prop: "deValue",label:"默认值"},
])
const option = {
    hideMenu: true, // 是否隐藏右侧工具菜单
    hideOperation: true, // 是否隐藏操作列
    hideBtnAdd: true, // 是否隐藏添加按钮
    pageHide: true, // 是否隐藏分页器
}
const data = ref([
    {prop: "model", desc:"表单数据对象",type: "object",opValue: "--",deValue: "--"},
    {prop: "inline", desc:"行内表单模式",type: "boolean",opValue: "--",deValue: "false"}
])

// FormItem属性
const data1 = ref([
    {prop: "prop", desc:"表单域model字段",type: "string",opValue: "--",deValue: "--"},
    {prop: "label", desc:"标签",type: "string",opValue: "--",deValue: "--"},
    {prop: "label-width", desc:"标签的宽度",type: "string|number",opValue: "--",deValue: "--"},
    {prop: "label", desc:"标签",type: "string",opValue: "--",deValue: "--"},
    {prop: "type", desc:"表单类型",type: "string",opValue: "input, select, radio, checkbox, input-number, input-range, switch, file, input-password, date-picker, color-picker, value",deValue: "--"},
    {prop: "span", desc:"排版中占一行的比例",type: "number",opValue: "1-24",deValue: "24"},
    {prop: "value", desc:"初始值",type: "string|number|array",opValue: "--",deValue: "--"},
    {prop: "options", desc:"选项数组",type: "array",opValue: "--",deValue: "--"},
    {prop: "asyncOptions", desc:"异步获取选项的函数，需返回promise",type: "function",opValue: "--",deValue: "--"},
    {prop: "props", desc:"绑定在输入组件上的属性",type: "object",opValue: "--",deValue: "--"},
    {prop: "eventObject", desc:"绑定在组件上的事件",type: "object",opValue: "blur,click,change,focus",deValue: "--"},
])
// FormItem属性，type为file的额外属性
const data2 = ref([
    {prop: "action", desc:"上传地址",type: "string",opValue: "--",deValue: "--"},
    {prop: "url", desc:"初始url",type: "string",opValue: "--",deValue: "--"},
    {prop: "getUrl", desc:"初始url回调，参数为form，返回值为图片url",type: "(form: FormModel)=> string",opValue: "--",deValue: "--"},
    {prop: "headers", desc:"上传请求头",type: "object",opValue: "--",deValue: "--"},
    {prop: "maxsize", desc:"文件大小最大值",type: "number",opValue: "--",deValue: "--"},
    {prop: "fileType", desc:"上传的文件类型",type: "string",opValue: "image/video",deValue: "image"},
    {prop: "success", desc:"上传成功的回调",type: "(res: AxiosResponse,file: File,model:FormModel)=>{}",opValue: "--",deValue: "--"}
])
</script>