<template>
  <span class="constant-status" :class="current.className">
    <component :is="current.icon" class="icon" :size="14" style="width: 12px; height: 12px" v-if="current.icon" /> <span class="name">{{ current.label }}</span>
  </span>
</template>
<script>
export default {
  name: "ConstantStatus",
}
</script>
<script setup>
import { computed } from "vue"
const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
})
const current = computed(() => {
  const result = props.options || []
  return result.find((a) => a.value == props.value) || {}
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
