<template>
  <el-drawer v-model="visible" title="列设置" size="40%">
    <el-table :data="columnDatas">
      <el-table-column property="label" label="列名称"></el-table-column>
      <el-table-column property="hidden" label="显示">
        <template #default="scope">
          <el-switch v-model="scope.row.hidden" :active-value="false" :inactive-value="true"></el-switch>
        </template>
      </el-table-column>
      <el-table-column property="fixed" label="固定显示" width="170" align="center">
        <template #default="scope">
          <el-button-group>
            <el-tooltip v-for="item in fixedMap" :key="item.value" :content="item.label">
              <el-button @click="selectFixed(scope.row, item.value)" :type="(!scope.row.fixed && item.value == '') || scope.row.fixed == item.value ? 'primary' : ''">
                <el-icon><component :is="item.icon" /></el-icon>
              </el-button>
            </el-tooltip>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </el-drawer>
</template>
<script setup>
import { watch, ref, computed, inject } from "vue"
import { CaretLeft, CaretRight, VideoPause } from "@element-plus/icons-vue"
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(["update:visible"])
const columns = inject("columns")
const visible = computed({
  get() {
    return props.visible
  },
  set(val) {
    emits("update:visible", val)
  },
})
watch(
  () => props.visible,
  (val) => {
    visible.value = val
  }
)
const columnDatas = computed(() => {
  const result = []
  for (const i in columns.value) {
    const column = columns.value[i]
    if (column.children) {
      for (const j in column.children) {
        const child = column.children[j]
        result.push(child)
      }
      continue
    } else {
      result.push(column)
    }
  }
  return result
})
const fixedMap = ref([
  { value: "left", label: "左固定", icon: CaretLeft },
  { value: "", label: "不固定", icon: VideoPause },
  { value: "right", label: "右固定", icon: CaretRight },
])
const selectFixed = (row, val) => {
  if (val) {
    row.fixed = val
  } else {
    delete row.fixed
  }

  console.log(row, "row")
}
</script>
