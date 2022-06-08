<template>
  <el-cascader v-model="model" :options="options" v-bind="props" v-on="eventObject"></el-cascader>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue"
import { ElCascader, CascaderOption } from "element-plus"
import { FormItem, Fields } from "../types"
const props = defineProps({
  formItem: {
    // 表单项
    type: Object as PropType<FormItem>,
    default: () => ({}),
  },
  formModel: {
    // 表单项
    type: Object,
    default: () => ({}),
  },
  props: {
    type: Object as PropType<Fields>,
    default: () => ({}),
  },
  eventObject: {
    type: Object as PropType<Fields>,
    default: () => ({}),
  },
  modelValue: {
    type: String,
    default: undefined,
  }, // 表单项值
})
const emits = defineEmits(["update:modelValue"])
const model = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
})
const options = computed(() => {
  const ops = props.formItem.options as CascaderOption[]
  return ops
})
</script>
