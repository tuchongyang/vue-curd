# `@vue-curd/curd-form`


## Usage

```

```vue
<template>
  <CurdForm v-model="formModel" :form-schema="formSchema">
    <template v-slot:custom="scope">
      <el-table
        :data="[
          { id: 1, spec: '高级', size: '大' },
          { id: 2, spec: '高级', size: '大' },
          { id: 3, spec: '高级', size: '大' },
        ]"
      >
        <el-table-column label="">
          <template v-slot:default>
            <el-radio>{{ "" }}</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="规格" prop="spec"></el-table-column>
        <el-table-column label="大小" prop="size"></el-table-column>
      </el-table>
    </template>
    <template v-slot:operate-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </template>
  </CurdForm>
</template>

<script setup>
import { ref } from "vue"
const formModel = ref({})
const asyncOptions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "全部", value: "" },
        { label: "伙伴", value: "伙伴" },
        { label: "直客", value: "直客" },
      ])
    }, 1000)
  })
}
const formSchema = ref({
  formItem: [
    { prop: "name", label: "客户名称", tooltip: "这里是客户名称提示" },
    { prop: "no", label: "客户编号" },
    {
      prop: "type",
      label: "客户类型",
      type: "select",
      options: [
        { label: "伙伴", value: "伙伴" },
        { label: "直客", value: "直客" },
      ],
      value: "伙伴",
    },
    {
      prop: "cert",
      label: "伙伴资质",
      type: "select",
      asyncOptions,
    },
    {
      prop: "productType11",
      label: "商品类型",
      type: "radio",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      value: "直售",
    },
    {
      prop: "productType",
      label: "商品类型",
      type: "radio",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      props: {
        showType: "single",
      },
      value: "直售",
    },
    {
      prop: "productType1",
      label: "商品类型",
      type: "radio",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      props: {
        componentName: "radio",
      },
      value: "直售",
    },
    {
      prop: "proType1",
      label: "类型多选",
      type: "checkbox",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      value: ["直售"],
    },
    {
      prop: "proType2",
      label: "类型多选",
      type: "checkbox",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      props: {
        showType: "single",
      },
      value: ["直售"],
    },
    {
      prop: "proType",
      label: "类型",
      type: "checkbox",
      options: [
        { label: "直售", value: "直售" },
        { label: "寄售", value: "寄售" },
        { label: "转售", value: "转售" },
      ],
      props: {
        componentName: "checkbox",
      },
      value: ["直售"],
    },
    {
      prop: "table",
      label: "自定义表单项",
      type: "custom",
    },
  ],
  labelWidth: "110px",
  rules: {
    name: [{ required: true, message: "请输入客户名称", trigger: "blur" }],
  },
})
const submit = () => {
  console.log(formModel.value)
}
</script>
```
```
