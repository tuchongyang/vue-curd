<template>
  <el-select v-model="model" style="width: 100%" :loading="formItem.loading" v-bind="props" v-on="eventObject">
    <template v-for="option in formItem.options" :key="option.value">
      <el-option :value="option.value" :label="option.label" :disabled="option.disabled"></el-option>
    </template>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { ElSelect, ElOption } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormSelect",
  components: { ElSelect, ElOption },
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
