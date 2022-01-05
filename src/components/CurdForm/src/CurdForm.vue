<template>
  <el-form ref="schemaFormRef" :model="modelRef" :rules="rulesRef" v-bind="$attrs" class="schema-form" style="display: flex; flex-wrap: wrap; position: relative; box-sizing: border-box" :label-width="formSchema.labelWidth">
    <template v-for="formItem in schemaItems" :key="formItem.prop">
      <el-form-item :label="formItem.label" :prop="formItem.prop" :label-width="formItem.labelWidth" :style="{ maxWidth: (100 * formItem.span) / 24 + '%', flex: '0 0 ' + (100 * formItem.span) / 24 + '%' }">
        <component :is="getComponent(formItem.type)" v-model="modelRef[formItem.prop]" :form-item="formItem" />
      </el-form-item>
    </template>
    <template v-if="$slots['operate-button']">
      <el-form-item style="max-width: 100%; flex: 0 0 100%">
        <slot name="operate-button"></slot>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance, isReactive, ref, isRef, createVNode, computed, watch, toRefs } from "vue"
import { isFunction, isAsyncFunction } from "./utils/is"
import components from "./components"

export default defineComponent({
  name: "CurdForm",
  components: {
    ...components,
  },
  props: {
    // 动态验证表单
    formSchema: {
      required: true,
      type: Object,
    },
    // 预置字段默认值
    fields: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Object,
      default: undefined,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // a-form
    const schemaFormRef = ref()
    // 表单实例
    const formInstance = getCurrentInstance()

    // 表单项
    const modelRef = reactive(
      props.formSchema.formItem.reduce((previousValue, currentValue) => {
        currentValue.eventObject ??= {}
        previousValue[currentValue.prop] = currentValue.value
        return previousValue
      }, {})
    )
    watch(
      () => modelRef,
      (val) => {
        emit("update:modelValue", toRefs(val))
      },
      {
        deep: true,
      }
    )
    watch(
      () => props.modelValue,
      (val) => {
        Object.assign(modelRef, val)
      },
      {
        deep: true,
      }
    )
    // 如果有默认值，则覆盖
    props.fields && Object.assign(modelRef, props.fields)
    props.modelValue && Object.assign(modelRef, props.modelValue)
    // 异步设置默认数据
    props.formSchema.formItem.forEach(async (item) => {
      // 异步选项
      if (isFunction(item.asyncOptions) || isAsyncFunction(item.asyncOptions)) {
        item.loading = true
        item.options = await item.asyncOptions(item, formInstance).finally(() => (item.loading = false))
      } else if (isFunction(item.asyncValue) || isAsyncFunction(item.asyncValue)) {
        // 异步默认值
        item.loading = true
        modelRef[item.prop] = await item.asyncValue(item, formInstance).finally(() => (item.loading = false))
      }
    })

    const schemaItems = computed(() => {
      return props.formSchema.formItem.filter((item) => {
        if (!item.hidden) {
          return true
        }
        if (item.hidden instanceof Function) {
          return !item.hidden(modelRef)
        }
        return !item.hidden
      })
    })

    // 生成表单验证规则
    const rulesRef = computed(() => {
      return props.formSchema.rules
    })

    const preset = ["input", "select", "radio", "checkbox", "input-number", "input-range", "switch", "file", "input-password", "date-picker", "color-picker", "value"]

    // 获取组件名称
    const getComponent = (type) => {
      // 预设组件
      if (preset.includes(type)) {
        return "schema-form-" + type
      } else if (isReactive(type) || isRef(type)) {
        // 自定义组件
        return createVNode(type)
      } else {
        // 不识别组件
        return type
      }
    }
    // 供外部使用
    const validate = (callback) => {
      return schemaFormRef.value.validate(callback)
    }
    // 调用某个表单项的异步数据接口
    const loadOptions = async (prop) => {
      const cur = props.formSchema.formItem.find((a) => a.prop == prop)
      cur.loading = true
      cur.options = await cur.asyncOptions(cur, formInstance).finally(() => (cur.loading = false))
      return cur
    }

    return {
      modelRef,
      schemaFormRef,
      rulesRef,
      getComponent,
      schemaItems,
      validate,
      loadOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
.schema-form {
  &:not(.el-form--inline) {
    .el-form-item {
      flex: 0 0 100%;
    }
  }
}
</style>
