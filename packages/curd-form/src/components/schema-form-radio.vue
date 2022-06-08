<template>
  <div class="schema-form-radio">
    <div v-if="formItem.loading" class="loading" style="color: #999; font-size: 12px">
      <el-icon class="is-loading"><Loading /></el-icon> 加载中...
    </div>
    <el-radio-group v-if="!formItem.loading && formItem.options && formItem.options.length" v-model="model" :class="[props?.showType]" v-bind="props" v-on="eventObject">
      <template v-for="option in formItem.options" :key="option.value">
        <el-radio v-if="props?.componentName == 'radio'" :label="option.value" :disabled="option.disabled">
          <span>{{ option.label }}</span>
          <FormTooltip v-if="option.tooltip" :tooltip="option.tooltip" :form-item="formItem" :form-model="formModel" />
        </el-radio>
        <el-radio-button v-else :label="option.value" :disabled="option.disabled">
          <span>{{ option.label }}</span>
          <FormTooltip v-if="option.tooltip" :tooltip="option.tooltip" :form-item="formItem" :form-model="formModel" />
        </el-radio-button>
      </template>
    </el-radio-group>
    <div v-if="!formItem.loading && !formItem.options?.length" class="empty">
      <el-icon><Warning /></el-icon> <span>暂无数据</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue"
import { Loading, Warning } from "@element-plus/icons-vue"
import { ElIcon, ElRadioGroup, ElRadio, ElRadioButton } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormRadio",
  components: { Loading, ElIcon, ElRadioGroup, ElRadio, ElRadioButton, Warning },
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({}),
    },
    formModel: {
      type: Object as PropType<Fields>,
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
      type: [String, Boolean, Number],
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
<style lang="scss" scoped>
.schema-form-radio {
  &.single {
    :deep(.el-radio-button) {
      + .el-radio-button {
        margin-left: 10px;
      }
      .el-radio-button__inner {
        border: var(--el-border);
        border-radius: var(--el-border-radius-base);
        padding-left: 20px;
        padding-right: 20px;
      }
      &.is-active {
        .el-radio-button__inner {
          border-color: var(--el-radio-button-checked-border-color);
        }
      }
    }
  }
  :deep(.el-radio__label) {
    > span {
      vertical-align: middle;
    }
  }
}
.empty {
  color: #999;
  .el-icon,
  span {
    vertical-align: middle;
  }
}
</style>
