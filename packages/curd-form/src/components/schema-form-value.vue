<template>
  <div v-html="model"></div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { FormItem } from "../types"
export default defineComponent({
  name: "SchemaFormValue",
  components: {},
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({}),
    },
    modelValue: {
      type: String,
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
