## 异步数据

::: tip 提示
配置`asyncOptions`可实现异步获取数据，注意返回值类型是label、value格式
:::

``` vue
<template>
  <CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>
</template>

<script setup>
import { ref } from "vue"
  const asyncOptions = function(){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve([
          { label: "服装", value: 1},
          { label: "数码", value: 2},
          { label: "母婴", value: 3},
        ])
      },1000)
    })
  }
  
const formSchema = ref({
  formItem: [
    { 
      type: "select", 
      label: "分类",
      prop: "sex", 
      span: 24,
      asyncOptions: asyncOptions,
    },
    { 
      type: "radio", 
      label: "分类",
      prop: "type", 
      span: 24,
      options:[],
      asyncOptions: asyncOptions,
    },
    { 
      type: "checkbox", 
      label: "标签",
      prop: "tags", 
      span: 24,
      options:[],
      asyncOptions: asyncOptions,
    },
  ]
})
</script>


```