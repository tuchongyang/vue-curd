## 表格


```vue
<template>
  <CurdTable :columns="columns" :data="data"></CurdTable>
</template>

<script setup>
import { ref } from "vue"

const columns = ref([
  { prop: "name", label: "客户名称", filter: {}, form: {} },
  { prop: "no", label: "客户编号", filter: {}, form: {} },
  {
    prop: "type",
    label: "客户类型",
    filter: {
      inner: true,
      type: "select",
      options: [
        { label: "全部", value: "" },
        { label: "伙伴", value: "伙伴" },
        { label: "直客", value: "直客" },
      ],
    },
    form: {},
  },
  {
    prop: "cert",
    label: "伙伴资质",
    filter: {
      type: "select",
      options: [
        { label: "全部", value: "" },
        { label: "伙伴", value: "伙伴" },
        { label: "直客", value: "直客" },
      ],
    },
  },
  { prop: "productType", label: "商品类型" },
])
const data = ref([
  { name: "张三", no: "PDE342344", type: "伙伴", cert: "代理", productType: "公有云" },
  { name: "张三", no: "PDE342344", type: "伙伴", cert: "代理", productType: "公有云" },
  { name: "张三", no: "PDE342344", type: "伙伴", cert: "代理", productType: "公有云" },
  { name: "张三", no: "PDE342344", type: "伙伴", cert: "转售", productType: "公有云" },
  { name: "张三", no: "PDE342344", type: "直客", cert: "", productType: "公有云" },
])
</script>
```