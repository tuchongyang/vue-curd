<template>
  <el-select v-model="model" :mode="formItem.mode || ''" v-bind="formItem.props" v-on="formItem.eventObject" style="width: 100%" :loading="formItem.loading">
    <template v-for="option in formItem.options" :key="option.value">
      <el-option :value="option.value" :label="option.label"></el-option>
    </template>
  </el-select>
</template>
<script>
import { defineComponent, computed } from "vue"
export default defineComponent({
  name: "SchemaFormSelect",
  components: {},
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
