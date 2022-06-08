<template>
  <el-color-picker v-model="model" show-alpha v-bind="props" v-on="eventObject"> </el-color-picker>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElColorPicker } from "element-plus"
import { FormItem, Fields } from "../types"
const props = {
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
    type: String,
    default: "",
  }, // 表单项值
}
export default defineComponent({
  name: "SchemaFormColorPicker",
  components: { ElColorPicker },
  props,
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
