## 普通用法


``` vue
<template>
  <CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>
</template>
<script setup>
const formSchema = {
  formItem: [
    { 
      type: "radio", 
      label: "性别",
      prop: "sex", 
      span: 24,
      options: [
        { label: "男", value: 1},
        { label: "女", value: 2},
      ],
      value: 1
    },
    { 
      type: "select", 
      label: "身份",
      prop: "role", 
      span: 24,
      options: [
        { label: "超级管理员", value: 1},
        { label: "普通管理员", value: 2},
      ],
      value: 1
    },
  ]
}
</script>


```