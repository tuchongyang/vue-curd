#### 图片显示与上传
<CurdTable :data="data" :columns="columns" :option="option" height="200px">
    <template #nameHeader="scope">
    <el-tag>{{ scope }}</el-tag>
    </template>
</CurdTable>

<script setup>
const data = [
  {
    name: "张三",
    img: "https://www.talklee.com/api/bing?rand=true",
  },
  {
    name: "李四",
    img: "https://www.talklee.com/api/bing?rand=true",
  },
]
const columns = [
  { prop: "name", label: "姓名" },
  { prop: "img", label: "单图", form: { component: "file" } },
]
const option = {
  menuWidth: 200,
  menuBtnTitle: "自定义名称",
}
</script>
