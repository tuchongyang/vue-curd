## 基础表单

  <curd-form class="center-form" ref="dynamicForm" :fields="fields" :form-schema="formSchema">
    <template v-slot:operate-button>
      <div style="text-align: center">
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button type="default" @click="clear">清 空</el-button>
      </div>
    </template>
  </curd-form>

  <div>dd</div>

<script setup>
import { ref, getCurrentInstance } from "vue"
const formSchema = ref({
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
    { type: "input-password", label: "密码", prop: "password", span: 24 },
    {
      type: "select",
      label: "角色",
      prop: "role",
      options: [
        { label: "超级管理员", value: 1 },
        { label: "普通管理员", value: 2 },
      ],
      span: 24,
    },
    {
      type: "radio",
      label: "性别",
      prop: "sex",
      options: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ],
      span: 24,
      value: 1,
    },
    {
      type: "input-number",
      label: "年龄",
      prop: "age",
      value: 1,
      props: {
        controlsPosition: "right",
      },
      span: 12,
    },
  ],
  rules:{
    username:[
      { required: true, message:"用户名不能为空", trigger: "blur" }
    ]
  },
  labelWidth: 110
})
const fields = {}
const dynamicForm = ref()
const instance = getCurrentInstance()
const submit = () => {
  dynamicForm.value.validate((valid) => {
    if (valid) {
      instance.appContext.config.globalProperties.$message({
        type: "success",
        message: "提交成功",
      })
    }
  })
}
const clear = () => {
  dynamicForm.value.schemaFormRef.resetFields()
}

</script>



```vue
<template>
  <curd-form class="center-form" ref="dynamicForm" :fields="fields" :form-schema="formSchema">
    <template v-slot:operate-button>
      <div style="text-align: center">
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button type="default" @click="clear">清 空</el-button>
      </div>
    </template>
  </curd-form>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"
import PageHeader from "@/components/Layout/PageHeader"
const formSchema = {
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
    { type: "input-password", label: "密码", prop: "password", span: 24 },
    {
      type: "select",
      label: "角色",
      prop: "role",
      options: [
        { label: "超级管理员", value: 1 },
        { label: "普通管理员", value: 2 },
      ],
      span: 24,
    },
    {
      type: "radio",
      label: "性别",
      prop: "sex",
      options: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ],
      span: 24,
      value: 1,
    },
    {
      type: "input-number",
      label: "年龄",
      prop: "age",
      value: 1,
      props: {
        controlsPosition: "right",
      },
      span: 12,
    },
  ],
  rules:{
    username:[
      { required: true, message:"用户名不能为空", trigger: "blur" }
    ]
  },
  labelWidth: 110
}
const fields = {}
const dynamicForm = ref()
const instance = getCurrentInstance()
const submit = () => {
  dynamicForm.value.validate((valid) => {
    if (valid) {
      instance.appContext.config.globalProperties.$message({
        type: "success",
        message: "提交成功",
      })
    }
  })
}
const clear = () => {
  dynamicForm.value.schemaFormRef.resetFields()
}

</script>

<style></style>

```
