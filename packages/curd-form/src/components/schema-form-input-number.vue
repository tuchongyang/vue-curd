<template>
  <el-input-number v-model="model" style="width: 100%" v-bind="props" v-on="eventObject" />
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElInputNumber } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormInputNumber",
  components: { ElInputNumber },
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
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
      type: Number,
      default: null,
    }, // 表单项值
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    })
    return {
      model,
    }
  },
})
</script>
