<template>
  <el-form ref="schemaFormRef" :model="modelRef" :rules="rulesRef" v-bind="$attrs" class="schema-form" style="display: flex; flex-wrap: wrap; position: relative; box-sizing: border-box" :label-width="formSchema.labelWidth">
    <template v-for="formItem in schemaItems" :key="formItem.prop">
      <el-form-item :label="formItem.label" :prop="formItem.prop" :label-width="formItem.labelWidth" :style="getFormItemStyle(formItem)" v-bind="getFormItemProps(formItem)">
        <slot :name="formItem.type" :form-item="formItem" :form-model="modelRef"></slot>
        <FormItem v-if="!(formItem.type && $slots[formItem.type])" :form-item="formItem" :form-model="modelRef" @change="onChange">
          <template #prefix>
            <slot :name="formItem.prop + 'Prefix'" :form-item="formItem" :form-model="modelRef"></slot>
          </template>
          <template #suffix>
            <slot :name="formItem.prop + 'Suffix'" :form-item="formItem" :form-model="modelRef"></slot>
          </template>
        </FormItem>
        <slot :name="formItem.prop + 'Bottom'" :form-item="formItem" :form-model="modelRef"></slot>
      </el-form-item>
    </template>
    <template v-if="$slots['operate-button']">
      <el-form-item style="max-width: 100%">
        <slot name="operate-button"></slot>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance, computed, watch, PropType } from "vue"
import { isFunction, isAsyncFunction, isObject } from "./utils/is"
import components from "./components"
import { ElForm, ElFormItem } from "element-plus"
import type { FormSchema, Fields, FormItem as FormItemType } from "./types"
import FormItem from "./FormItem.vue"
export default defineComponent({
  name: "CurdForm",
  components: {
    ...components,
    ElForm,
    ElFormItem,
    FormItem,
  },
  props: {
    // 动态验证表单
    formSchema: {
      required: true,
      type: Object as PropType<FormSchema>,
    },
    // 预置字段默认值
    fields: {
      type: Object as PropType<Fields>,
      default: () => ({}),
    },
    modelValue: {
      type: Object as PropType<Fields>,
      default: undefined,
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, attrs }) {
    // a-form
    const schemaFormRef = ref()
    // 将外面传进来的form数据进行转化，如schema = {style: {color: '#fff' }} 转化为  form = {'style.color': '#fff'}
    const getForm = (obj: any, parentPrefix?: any) => {
      let result = {}
      for (let i in obj) {
        var formItem = obj[i]
        let child: any = {}
        const prefix = parentPrefix ? parentPrefix + "." + i : i
        if (isObject(formItem)) {
          child = getForm(formItem, prefix)
        } else {
          child[prefix] = formItem
        }

        result = { ...result, ...child }
      }
      return result
    }

    let isChangeIn = false
    // 表单项
    const modelRef = reactive<Fields>({})

    // 先从schema中读取默认值
    const schemaValues = props.formSchema.formItem.reduce<Fields>((previousValue, currentValue) => {
      currentValue.eventObject ??= {}
      typeof currentValue.value == "undefined" ? false : (previousValue[currentValue.prop] = currentValue.value)
      return previousValue
    }, {})
    Object.assign(modelRef, schemaValues)
    // 如果有默认值，则覆盖
    props.fields && Object.assign(modelRef, props.fields)
    Object.assign(modelRef, getForm(props.modelValue))
    watch(
      () => modelRef,
      (val) => {
        // emit("update:modelValue", val)
        isChangeIn = true
        const model = props.modelValue
        for (let i in val) {
          if (i.indexOf(".") > -1) {
            const s = i.split(".")
            let index = 0
            let o = model
            while (o && index < s.length - 1) {
              if (!o[s[index]]) {
                o[s[index]] = {}
              }
              o = o[s[index]]
              index++
            }
            if (o) {
              o[s[s.length - 1]] = val[i]
            }
          } else {
            model && (model[i] = val[i])
          }
        }
        isChangeIn = false
        emit("update:modelValue", model)
      },
      {
        deep: true,
      }
    )
    watch(
      () => props.modelValue,
      (val) => {
        // Object.assign(modelRef, val)
        for (let i in modelRef) {
          delete modelRef[i]
        }
        if (isChangeIn) return
        const value = getForm(val)
        Object.assign(modelRef, value)
      },
      {
        deep: true,
      }
    )
    // props.modelValue && Object.assign(modelRef, props.modelValue)
    const instance = getCurrentInstance()
    // 异步设置默认数据
    props.formSchema.formItem.forEach(async (item) => {
      // 异步选项
      if (item.asyncOptions && (isFunction(item.asyncOptions) || isAsyncFunction(item.asyncOptions))) {
        item.loading = true
        item.options = await item.asyncOptions(modelRef, item).finally(() => (item.loading = false))
        item.eventObject?.optionLoaded && item.eventObject?.optionLoaded(modelRef, item, instance?.proxy)
      } else if (item.asyncValue && (isFunction(item.asyncValue) || isAsyncFunction(item.asyncValue))) {
        // 异步默认值
        item.loading = true
        modelRef[item.prop] = await item.asyncValue(modelRef, item).finally(() => (item.loading = false))
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

    // 供外部使用
    const validate = (callback: (valid: boolean) => void) => {
      return schemaFormRef.value.validate(callback)
    }
    // 调用某个表单项的异步数据接口
    const loadOptions = async (prop: string) => {
      const cur = props.formSchema.formItem.find((a) => a.prop == prop)
      if (cur && cur.asyncOptions) {
        cur.loading = true
        cur.options = await cur.asyncOptions(modelRef, cur).finally(() => (cur.loading = false))
        cur.eventObject?.optionLoaded && cur.eventObject?.optionLoaded(modelRef, cur, instance?.proxy)
      }
      return cur
    }
    const onChange = (formModel: Fields, formItem: FormItemType) => {
      emit("change", formModel, formItem)
    }
    const getFormItemStyle = (formItem: FormItemType) => {
      return { maxWidth: formItem.span && (100 * formItem.span) / 24 + "%", flex: typeof attrs.inline == "undefined" ? "0 0 " + (100 * (formItem.span || 24)) / 24 + "%" : "" }
    }
    const getFormItemProps = (formItem: FormItemType) => {
      if (formItem.formItemProps) {
        const { ...attrs } = formItem.formItemProps
        return attrs
      }
      return {}
    }

    return {
      modelRef,
      schemaFormRef,
      rulesRef,
      schemaItems,
      getFormItemStyle,
      getFormItemProps,
      validate,
      loadOptions,
      onChange,
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
  .form-item {
    width: 100%;
    display: flex;
    .tooltip {
      margin-left: 10px;
    }
  }
}
</style>
