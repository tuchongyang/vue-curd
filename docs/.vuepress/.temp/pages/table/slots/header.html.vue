<template><h4 id="自定义头部" tabindex="-1"><a class="header-anchor" href="#自定义头部" aria-hidden="true">#</a> 自定义头部</h4>
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
