<template>
  <el-drawer v-model="visible" title="列设置" size="40%">
    <el-table :data="columnDatas">
      <el-table-column property="label" label="列名称"></el-table-column>
      <el-table-column property="hidden" label="显示">
        <template #default="scope">
          <el-switch v-model="scope.row.hidden" :active-value="false" :inactive-value="true" size="small" @change="onChangeHidden"></el-switch>
        </template>
      </el-table-column>
      <el-table-column property="fixed" label="固定显示" width="170" align="center">
        <template #default="scope">
          <el-button-group>
            <el-tooltip v-for="item in fixedMap" :key="item.value" :content="item.label">
              <el-button :type="(!scope.row.fixed && item.value == '') || scope.row.fixed == item.value ? 'primary' : ''" size="small" @click="selectFixed(scope.row, item.value)">
                <el-icon><component :is="item.icon" /></el-icon>
              </el-button>
            </el-tooltip>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ElDrawer, ElTable, ElTableColumn, ElSwitch, ElButtonGroup, ElTooltip, ElButton, ElIcon } from "element-plus"
import { shallowRef, watch, Ref, ref, computed, inject, triggerRef } from "vue"
import { CaretLeft, CaretRight, VideoPause } from "@element-plus/icons-vue"
import { ColumnItem } from "./types"
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(["update:visible"])
const columns = inject<Ref<Array<ColumnItem>>>("columns") || ref([])
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
const fixedMap = shallowRef([
  { value: "left", label: "左固定", icon: CaretLeft },
  { value: "", label: "不固定", icon: VideoPause },
  { value: "right", label: "右固定", icon: CaretRight },
])
const selectFixed = (row: any, val: string) => {
  if (val) {
    row.fixed = val
  } else {
    delete row.fixed
  }
  triggerRef(columns)
}
const onChangeHidden = () => {
  triggerRef(columns)
}
</script>
