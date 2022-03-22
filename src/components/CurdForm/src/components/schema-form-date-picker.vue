<template>
  <el-date-picker v-model="model" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" v-bind="formItem.props" :disabled="formItem.disabled || false" :placeholder="(formItem.props && formItem.props.placeholder) || '请选择' + formItem.label" v-on="formItem.eventObject" style="width: 100%">
  </el-date-picker>
</template>
<script>
import { defineComponent, computed } from "vue"
import { ElDatePicker } from "element-plus"
export default defineComponent({
  name: "SchemaFormInput",
  components: {ElDatePicker},
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    modelValue: undefined, // 表单项值
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
