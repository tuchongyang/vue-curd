<template>
  <div class="form-item">
    <slot name="prefix"></slot>
    <component :is="getComponent(props.formItem.type)" v-if="!(props.formItem.type && $slots[props.formItem.type])" v-model="modelRef[props.formItem.prop]" :form-item="props.formItem" :form-model="modelRef" :props="formItemProps" :event-object="eventObject" />
    <FormTooltip v-if="props.formItem.tooltip" :tooltip="props.formItem.tooltip" :form-item="props.formItem" :form-model="props.formModel" />
    <slot name="suffix"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, getCurrentInstance, Ref, PropType } from "vue"
import { FormItem, Fields } from "./types"
import { getComponent } from "./components"
import FormTooltip from "./FormTooltip.vue"

const props = defineProps({
  // 动态验证表单
  formItem: {
    required: true,
    type: Object as PropType<FormItem>,
  },
  formModel: {
    type: Object as PropType<Fields>,
    default: () => ({}),
  },
})
const emit = defineEmits(["change"])
const modelRef: Ref<Fields> = ref(props.formModel || {})
// 重新组装props
const formItemProps = computed(() => {
  if (!props.formItem.props) {
    return {}
  }
  if (props.formItem.props instanceof Function) {
    return props.formItem.props(props.formModel, props.formItem)
  }
  return props.formItem.props
})
// 重新组装eventObject
const instance = getCurrentInstance()
const eventObject = ref(
  (() => {
    const result: any = {}
    // 如果没有传eventObject，就初始一个change事件
    if (!props.formItem.eventObject || Object.keys(props.formItem.eventObject).length <= 0) {
      return {
        change: () => {
          emit("change", props.formModel, props.formItem, instance?.parent?.parent?.parent?.proxy)
        },
      }
    }
    if (props.formItem.eventObject.change) {
      const changeFun = props.formItem.eventObject.change
      result.change = () => {
        changeFun(props.formModel, props.formItem, instance?.parent?.parent?.parent?.proxy)
        emit("change", props.formModel, props.formItem, instance?.parent?.parent?.parent?.proxy)
      }
    }
    return result
  })()
)
</script>
<style lang="scss" scoped>
.form-item {
  width: 100%;
  display: flex;
  .tooltip {
    margin-left: 10px;
    color: #999;
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
