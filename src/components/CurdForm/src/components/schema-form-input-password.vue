<template>
  <el-input v-model="model" type="password" v-bind="formItem.props" :placeholder="(formItem.props && formItem.props.placeholder) || '请输入' + formItem.label" autocomplete="new-password" v-on="formItem.eventObject" />
</template>
<script>
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: "SchemaFormInputPassword",
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
