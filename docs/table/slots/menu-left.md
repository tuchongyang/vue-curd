#### 自定义左侧按钮

```vue
<template>
<CurdTable ref="table" :data="data" :columns="columns" :option="option" height="200px">
    <template #menuLeft>
    <el-button type="danger" size="mini" plain @click.stop="$refs.table.rowAdd()">新增</el-button>
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
}
</script>
```