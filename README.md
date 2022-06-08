## VueCurd

#### 基于element-plus封装的上层应用级组件库，包含table、form、table-filter等系列组件

## 安装

在现有项目中使用 Evue 时，可以通过 npm 或 yarn 进行安装：


``` sh
# 安装
npm i @vue-curd/vue-curd -S

# 引入
import VueCurd from "@vue-curd/vue-curd"
app.use(VueCurd)
```

## 使用

### 表格


``` vue
<template>
    <CurdTable :columns="columns" :data="data"></CurdTable>
</template>
<script setup>
const columns = ref([
    {prop: "name", label: "姓名"},
    {prop: "age", label: "年龄"},
])
const data = [
    {name: "张三", age: 10},
    {name: "李四", age: 12}
]
</script>
```

### 表单


``` vue
<template>
    <CurdForm :form-schema="formSchema"></CurdForm>
</template>
<script setup>
import { ref } from "vue"
const formSchema = ref({
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
  ],
  rules: {
      username: [{required: true, message:"请输入用户名",trigger: "blur"}]
  }
})
</script>
```

### 弹窗表单

``` vue
<template>
    <el-button @click="open">弹 出</el-button>
</template>
<script setup>
import { ref,getCurrentInstance } from "vue"

const instance = getCurrentInstance()
const formSchema = ref({
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
  ],
  rules: {
      username: [{required: true, message:"请输入用户名",trigger: "blur"}]
  }
})
const open = ()=>{
    instance.appContext.config.globalProperties.$formDialog.show({
        formSchema: formSchema
    })
}
</script>
```