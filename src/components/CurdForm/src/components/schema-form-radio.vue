<template>
  <div class="loading" style="color: #999; font-size: 12px" v-if="formItem.loading">
    <el-icon class="is-loading"><Loading /></el-icon> 加载中...
  </div>
  <el-radio-group v-model="model" v-on="formItem.eventObject" v-else>
    <template v-for="option in formItem.options" :key="option.value">
      <el-radio :label="option.value">
        {{ option.label }}
      </el-radio>
    </template>
  </el-radio-group>
</template>
<script>
import { defineComponent, computed } from "vue"
import { Loading } from "@element-plus/icons-vue"

export default defineComponent({
  name: "SchemaFormRadio",
  components: { Loading },
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
