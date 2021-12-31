<template>
  <div class="table-menu">
    <el-tooltip v-for="item in controlButtons" :key="item.label" :content="item.label" placement="top">
      <el-dropdown trigger="click" v-if="item.options" style="margin: 0 10px" @command="handleSizeCommand">
        <el-button type="text">
          <el-icon><component :is="item.icon"></component></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="option in item.options" :key="option.value" :command="option.value">
              <span :style="{ color: currentSize == option.value ? 'var(--el-color-primary)' : '' }">{{ option.label }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button type="text" v-else @click="onClick(item)">
        <el-icon><component :is="item.icon"></component></el-icon>
      </el-button>
    </el-tooltip>
    <STableColumnControl v-model:visible="visible" />
  </div>
</template>
<script setup>
import {  computed, ref } from "vue"
import STableColumnControl from "./STableColumnControl.vue"
import { Refresh, Search, ScaleToOriginal, Download, Operation } from "@element-plus/icons-vue"
const emits = defineEmits(["operation"])
const props = defineProps({
  filterVisible: {
    type: Boolean,
    default: true,
  },
})
// 控制按钮逻辑
const controlButtons = computed(() => [
  { label: "刷新", value: "refresh", icon: Refresh },
  { label: props.filterVisible ? "收起查询" : "展开查询", value: "searchToggle", icon: Search },
  {
    label: "密度",
    icon: ScaleToOriginal,
    value: "size",
    options: [
      { label: "默认", value: "small" },
      { label: "宽松", value: "medium" },
      { label: "紧凑", value: "mini" },
    ],
  },
  { label: "导出数据", value: "export", icon: Download },
  // { label: "打印", value: "print", icon: "Printer" },
  { label: "列设置", value: "operation", icon: Operation },
])
const visible = ref(false)
const onClick = (item) => {
  emits("operation", item.value)
  if (item.value == "operation") {
    visible.value = true
  }
}
const currentSize = ref("small")
const handleSizeCommand = (val) => {
  currentSize.value = val
  emits("operation", "size", val)
}
</script>
<style scoped lang="scss">
.table-menu {
  .el-button--text {
    color: var(--el-button-text-color);
    font-size: 14px;
  }
  .current-size {
    color: var(--el-color-primary);
  }
}
</style>
