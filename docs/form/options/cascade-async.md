## 级联异步数据


::: tip 提示
curdform实例提供`loadOptions`函数，用来重新调用某个formItem的`asyncOptions`异步函数。要求`asyncOptions`必须配置，否则会出错。
:::

<CurdForm ref="dynamicForm" v-model="formModel" :form-schema="formSchema"></CurdForm>

<script setup>
import { ref } from "vue"
const formModel = ref({})
const dynamicForm = ref()
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
const replicationModeAsync = (formItem, formInstance)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(replicationModeOptions[formInstance.ctx.modelRef.engine] || [])
    },1000)
  })
}
const engineVersionOptionsAsync = (formItem, formInstance)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(engineVersionOptions[formInstance.ctx.modelRef.engine] || [])
    },1000)
  })
}
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
        async change(data){
          const cur = await dynamicForm.value.loadOptions('engineVersion')
          formModel.value["engineVersion"] = cur.options[0].value

          const cur1 = await dynamicForm.value.loadOptions('replicationMode')
          formModel.value["replicationMode"] = cur1.options[0].value

        }
      }
    },
    { 
      type: "radio", 
      label: "数据库版本",
      prop: "engineVersion", 
      span: 24,
      options: [],
      asyncOptions: engineVersionOptionsAsync,
      value: "5.6"
    },
    { 
      type: "radio", 
      label: "同步参数",
      prop: "replicationMode", 
      span: 24,
      asyncOptions:replicationModeAsync,
      value: "async"
    },
  ]
})
</script>

``` vue
<template>
  <CurdForm ref="dynamicForm" v-model="formModel" :form-schema="formSchema"></CurdForm>
</template>
<script setup>
import { ref } from "vue"
const formModel = ref({})
const dynamicForm = ref()
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
const replicationModeAsync = (formItem, formInstance)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(replicationModeOptions[formInstance.ctx.modelRef.engine] || [])
    },1000)
  })
}
const engineVersionOptionsAsync = (formItem, formInstance)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(engineVersionOptions[formInstance.ctx.modelRef.engine] || [])
    },1000)
  })
}
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
        async change(data){
          const cur = await dynamicForm.value.loadOptions('engineVersion')
          formModel.value["engineVersion"] = cur.options[0].value

          const cur1 = await dynamicForm.value.loadOptions('replicationMode')
          formModel.value["replicationMode"] = cur1.options[0].value

        }
      }
    },
    { 
      type: "radio", 
      label: "数据库版本",
      prop: "engineVersion", 
      span: 24,
      options: [],
      asyncOptions: engineVersionOptionsAsync,
      value: "5.6"
    },
    { 
      type: "radio", 
      label: "同步参数",
      prop: "replicationMode", 
      span: 24,
      asyncOptions:replicationModeAsync,
      value: "async"
    },
  ]
})
</script>

```