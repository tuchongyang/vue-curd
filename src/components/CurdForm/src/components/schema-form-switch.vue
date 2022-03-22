<template>
  <el-switch v-model="model" v-bind="formItem.props" v-on="formItem.eventObject" />
</template>
<script>
import { defineComponent, computed } from "vue"
import { ElSwitch } from "element-plus"
export default defineComponent({
  name: "SchemaFormTextarea",
  components: { ElSwitch },
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
