<template>
  <el-tooltip :content="getTooltipContent()" v-bind="props.tooltip || {}">
    <el-button class="tooltip" type="text">
      <el-icon><Warning /></el-icon>
    </el-button>
    <template #content>
      <div v-html="getTooltipContent()"></div>
    </template>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { PropType } from "vue"
import { Warning } from "@element-plus/icons-vue"
import { ElButton, ElIcon, ElTooltip } from "element-plus"
import { FormItem, Fields } from "./types"
const props = defineProps({
  tooltip: {
    type: [String, Function],
    default: null,
  },
  formItem: {
    required: true,
    type: Object as PropType<FormItem>,
  },
  formModel: {
    type: Object as PropType<Fields>,
    default: () => ({}),
  },
})

const is = (val: any, type: string) => {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
// 获取组件tooltip内容
const getTooltipContent = () => {
  const tooltip: any = props.tooltip
  if (!tooltip) {
    return ""
  }
  if (is(tooltip, "Function")) {
    return tooltip(props.formModel, props.formItem)
  }
  if (is(tooltip, "String")) {
    return tooltip
  }
  return ""
}
</script>
<style lang="scss" scoped>
.tooltip {
  color: var(--el-button-text-color);
  margin-left: 10px;
  vertical-align: middle;
}
</style>
