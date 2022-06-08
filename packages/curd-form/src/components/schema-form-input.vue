<template>
  <el-input v-model="model" :disabled="formItem.disabled || false" v-bind="props" :placeholder="(props.placeholder && String(props.placeholder)) || '请输入' + formItem.label" autocomplete="new-password" v-on="eventObject" />
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElInput } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormInput",
  components: { ElInput },
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
      type: [String, Number],
      default: "",
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
