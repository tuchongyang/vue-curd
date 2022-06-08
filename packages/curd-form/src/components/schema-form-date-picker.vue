<template>
  <el-date-picker v-model="model" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" v-bind="props" :disabled="formItem.disabled || false" :placeholder="(formItem.props && props.placeholder && String(props.placeholder)) || '请选择' + formItem.label" v-on="eventObject"> </el-date-picker>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElDatePicker } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormDatePicker",
  components: { ElDatePicker },
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
      type: [Array, String] as PropType<string | number | Date | (string | number | Date)[]>,
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
