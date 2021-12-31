## 组件事件

<CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>

<script setup>
import { ref, getCurrentInstance } from "vue"
const instance = getCurrentInstance()
const formSchema = {
  formItem: [
    { 
      type: "input", 
      label: "姓名",
      prop: "name", 
      span: 24,
      eventObject:{
        change:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "change事件触发了",
          })
        },
        blur:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "blur事件触发了",
          })
        },
        focus:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "focus事件触发了",
          })
        },
        click:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "click事件触发了",
          })
        }
      } 
    },
  ]
}
</script>

``` vue
## 组件事件
<template>
  <CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue"
const instance = getCurrentInstance()
const formSchema = {
  formItem: [
    { 
      type: "input", 
      label: "姓名",
      prop: "name", 
      span: 24,
      eventObject:{
        change:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "change事件触发了",
          })
        },
        blur:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "blur事件触发了",
          })
        },
        focus:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "focus事件触发了",
          })
        },
        click:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "click事件触发了",
          })
        }
      } 
    },
  ]
}
</script>


```