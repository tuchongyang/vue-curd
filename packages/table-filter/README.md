# `@vue-curd/table-filter`

> TODO: description

## Usage

```

```vue
<template>
  <TableFilter :select-params="params" :list-query="listQuery"></TableFilter>
</template>
<script setup>
import { ElMessage } from "element-plus"
import { ref } from "vue"
const btn = ref()
const open = () => {
  ElMessage({ type: "success", message: "dd", duration: 1500 })
}
const apiGetCloudList = (param) => {
  return new Promise((resolve) => {
    const list = [
      { name: "aliyun", id: "1" },
      { name: "tencent", id: "2" },
      { name: "huawei", id: "3" },
      { name: "aws", id: "4" },
      { name: "azure", id: "5" },
    ]
    setTimeout(() => {
      resolve({
        result: list.filter((a) => {
          if (param && param != "undefined") {
            return a.name.indexOf(param) > -1
          }
          return true
        }),
      })
    }, 1000)
  })
}
const asyncOptions = async (param) => {
  const res = await apiGetCloudList(param)
  return res.result.map((a) => {
    return {
      label: a.name,
      value: a.id,
    }
  })
}

const params = ref([
  { prop: "name", label: "名称" },
  { type: "input", prop: "name1", label: "名称1",  },
  { type: "input", prop: "name2", label: "弹性公网IP地址", },
  { type: "input", prop: "name3", label: "弹性公网IP地址1", },
  {
    type: "select",
    tagsType: "select",
    prop: "name4",
    label: "过滤搜索",
    props: {
      filterable: true, //是否可筛选
      remote: true, //是否开启远程搜索
      all: true, //是否展示 “全部” 选项
    },
    asyncOptions,
  },
  {
    type: "checkboxButton",
    tagsType: "checkboxButton",
    prop: "status",
    label: "状态",
    options: [
      { label: "正常", value: "0" },
      {
        label: "解散",
        value: "2",
      },
    ],
    props: {
      all: true,
    },
  },
  {
    type: "checkbox",
    tagsType: "checkbox",
    prop: "status1",
    label: "多选",
    options: [
      { label: "创建中", value: "0" },
      { label: "运行中", value: "1" },
      {
        label: "开机",
        value: "2",
      },
      {
        label: "关机",
        value: "3",
      },
    ],
    props: {
      all: true,
    },
  },
  {
    type: "checkbox",
    tagsType: "checkbox",
    prop: "status2",
    label: "搜索多选",
    asyncOptions,
    props: {
      filterable: true,
      all: true,
    },
  },
  {
    prop: "time",
    type: "time",
    label: "账单时间",
    tableKey: ["billingStartTime", "billingEndTime"],
    props: {
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD",
      type: "monthrange",
    },
  },
])
const listQuery = ref({})
</script>
```

```
