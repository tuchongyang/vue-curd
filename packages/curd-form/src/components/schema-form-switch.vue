<template>
  <el-switch v-model="model" v-bind="props" v-on="eventObject" />
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElSwitch } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormTextarea",
  components: { ElSwitch },
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
      type: [String, Number, Boolean],
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
