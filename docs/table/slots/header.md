#### 自定义头部
```vue
<template>
<CurdTable :data="data" :columns="columns" :option="option" height="200px">
  <template #nameHeader="scope">
      <el-tag>{{ scope.column }}</el-tag>
  </template>
</CurdTable>
</template>
<script setup>
  const data = [
    {
      name: "张三",
      sex: "男",
    },
    {
      name: "李四",
      sex: "女",
    },
    {
      name: "王五",
      sex: "女",
    },
    {
      name: "赵六",
      sex: "男",
    },
  ]
  const columns = [
    { prop: "name", label: "姓名" },
    { prop: "sex", label: "性别" },
  ]
  const option = {
    menuWidth: 200,
    menuBtnTitle: "自定义名称",
  }
  </script>
  ```