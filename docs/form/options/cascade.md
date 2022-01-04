## 普通用法

::: tip 提示
通过配置`eventObject`的自定义事件的`change`可实现级联控制，注意初始值以及判空问题。
:::


``` vue
<template>
  <CurdForm ref="dynamicForm" v-model="formModel" :form-schema="formSchema"></CurdForm>
</template>
<script setup>
import { ref } from "vue"
const formModel = ref({})
const replicationModeOptions =  {
  MySQL: [
      { label: "异步", value: "async" },
      { label: "同步", value: "semisync" },
  ],
  PostgreSQL: [
      { label: "异步", value: "async" },
      { label: "同步", value: "sync" },
  ],
  SQLServer: [{ label: "同步", value: "sync" }],
};
const engineVersionOptions = {
  MySQL: [
    { label: "5.6", value: "5.6" },
    { label: "5.7", value: "5.7" },
    { label: "8.0", value: "8.0" },
  ],
  SQLServer: [
    { label: "2017_EE", value: "2017_EE" },
    { label: "2017_WEB", value: "2017_WEB" },
    { label: "2014_EE", value: "2014_EE" },
    { label: "2014_WEB", value: "2014_WEB" },
    { label: "2016_EE", value: "2016_EE" },
    { label: "2016_WEB", value: "2016_WEB" },
    { label: "2012_EE", value: "2012_EE" },
    { label: "2012_WEB", value: "2012_WEB" },
    { label: "2008_EE", value: "2008_EE" },
    { label: "2008_WEB", value: "2008_WEB" },
  ],
  PostgreSQL: [
    { label: "9.5", value: "9.5" },
    { label: "9.6", value: "9.6" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
  ],
};
const formSchema = ref({
  formItem: [
    { 
      type: "radio", 
      label: "数据库引擎",
      prop: "engine", 
      span: 24,
      options:[
          {value: "MySQL",label: "MySQL"},
          {value: "PostgreSQL",label: "PostgreSQL"},
          {value: "SQLServer",label: "SQLServer"},
      ],
      value: "MySQL",
      eventObject:{
        change(data){
          const cur = formSchema.value.formItem.find(a=>a.prop=='engineVersion')
          cur.options = engineVersionOptions[data]
          formModel.value["engineVersion"] = cur.options[0].value

          const cur1 = formSchema.value.formItem.find(a=>a.prop=='replicationMode')
          cur1.options = engineVersionOptions[data]
          formModel.value["replicationMode"] = cur1.options[0].value

        }
      }
    },
    { 
      type: "radio", 
      label: "数据库版本",
      prop: "engineVersion", 
      span: 24,
      options: engineVersionOptions["MySQL"],
      value: "5.6"
    },
    { 
      type: "radio", 
      label: "同步参数",
      prop: "replicationMode", 
      span: 24,
      options:replicationModeOptions["MySQL"],
      value: "async"
    },
  ]
})
</script>

```