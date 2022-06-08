<template>
  <div v-if="formItem.loading" class="loading" style="color: #999; font-size: 12px">
    <el-icon class="is-loading"><Loading /></el-icon> 加载中...
  </div>
  <el-checkbox-group v-else v-model="model" :class="[props?.showType]" style="width: 100%" v-on="eventObject">
    <template v-for="option in formItem.options" :key="option.value">
      <el-checkbox v-if="props?.componentName == 'checkbox'" :label="option.value" :disabled="option.disabled"> {{ option.label }} </el-checkbox>
      <el-checkbox-button v-else :label="option.value" :disabled="option.disabled"> {{ option.label }} </el-checkbox-button>
    </template>
  </el-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { Loading } from "@element-plus/icons-vue"
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElIcon } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormCheckbox",
  components: { Loading, ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElIcon },
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
      type: Array,
      default: () => [],
    }, // 表单项值
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    })
    if (!(model.value instanceof Array)) {
      model.value = []
    }

    return {
      model,
    }
  },
})
</script>
<style lang="scss" scoped>
.el-checkbox-group {
  &.single {
    :deep(.el-checkbox-button) {
      + .el-checkbox-button {
        margin-left: 10px;
      }
      .el-checkbox-button__inner {
        border: var(--el-border);
        border-radius: var(--el-border-radius-base);
        padding-left: 20px;
        padding-right: 20px;
      }
      &.is-checked {
        .el-checkbox-button__inner {
          border-color: var(--el-checkbox-button-checked-border-color);
        }
      }
    }
  }
}
</style>
