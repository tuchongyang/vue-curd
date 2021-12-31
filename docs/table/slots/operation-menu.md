#### 自定义操作菜单

<CurdTable :data="data" :columns="columns" :option="option" height="200px">
    <template #menuBtn="scope">
    <el-dropdown-item @click.stop="tip1(scope)">自定义按钮1</el-dropdown-item>
    <el-dropdown-item divided @click.stop="tip2(scope)">自定义按钮2</el-dropdown-item>
    </template>
    <template #menu="scope">
    <el-button style="margin-left: 10px" type="text" :icon="User" @click.stop="tip3(scope)">自定义按钮</el-button>
    </template>
</CurdTable>

<script setup>
import { User } from "@element-plus/icons-vue"
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
const tip1 = (scope) => {
  console.log("tip1", scope)
}
const tip2 = (scope) => {
  console.log("tip2", scope)
}
const tip3 = (scope) => {
  console.log("tip3", scope)
}
</script>
