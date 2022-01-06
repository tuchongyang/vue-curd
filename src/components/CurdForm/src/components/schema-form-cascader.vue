<template>
  <el-cascader v-model="model" :options="formItem.options"  v-bind="formItem.props" v-on="formItem.eventObject" :loading="formItem.loading" ></el-cascader>
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
