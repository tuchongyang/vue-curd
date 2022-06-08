<template>
  <span v-if="current" class="constant-status" :class="current.className" :style="{ color: current.color }">
    <el-icon v-if="current.icon" :class="current.className">
      <component :is="current.icon" class="icon" :size="14" style="width: 12px; height: 12px" />
    </el-icon>
    <span class="name">{{ current.label }}</span>
  </span>
  <span v-else>{{ value }}</span>
</template>
<script lang="ts">
export default {
  name: "ConstantStatus",
}
</script>
<script lang="ts" setup>
import { computed, PropType } from "vue"
interface OptionItem {
  label: string
  value: string | number | boolean
  className?: string
  icon?: any
  color?: string
}
const props = defineProps({
  value: {
    type: [String, Number, Boolean],
    default: "",
  },
  options: {
    type: Array as PropType<Array<OptionItem>>,
    default: () => [],
  },
})
const current = computed(() => {
  const result = props.options || []
  return result.find((a) => a.value == props.value)
})
</script>
<style scoped lang="scss">
.constant-status {
  &.color-green {
    color: #39c700;
  }
  &.color-gray {
    color: grey;
  }
  &.color-red {
    color: red;
  }
  &.color-orange {
    color: #ff9600;
  }
  &.color-blue {
    color: #5fbbfc;
  }
}
</style>
