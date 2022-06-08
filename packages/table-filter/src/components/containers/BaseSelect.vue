<template>
  <div class="base-select">
    <div v-if="paramsItem.props?.filterable" class="remote-input">
      <el-input v-model="textModel" placeholder="输入搜索名称" @input="onInput" />
    </div>
    <div v-spin="loading" class="select-spinner">
      <ul v-if="options && options.length">
        <li v-if="paramsItem.props?.all" :class="{ active: !model }" @click="onChange(allItem)">全部</li>
        <template v-for="item in options" :key="item.value">
          <li :class="{ active: model == item.value }" @click="onChange(item)">
            {{ item.label }}
          </li>
        </template>
      </ul>
      <el-empty v-else description="暂无数据" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, PropType, Ref, computed } from "vue"
import * as I from "../../interface"
import * as Utils from "../../../../utils/common"
const emit = defineEmits(["update:modelValue", "change"])
const props = defineProps({
  paramsItem: {
    type: Object as PropType<I.ParamsItem>,
    default: () => {
      return {}
    },
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
})
const model: Ref<string | number | boolean> = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    model.value = val
  }
)

const paramsItem = ref(props.paramsItem)
const textModel: Ref<string> = ref("")
const loading: Ref<boolean> = ref(false)
const allItem = { label: "全部", value: "" }
const getModel = () => {
  if (!model.value) return
  textModel.value = options.value?.find((a) => String(a.value) == String(model.value))?.label || ""
}
const paramsOptions = ref(Utils.deepClone(props.paramsItem.options))
const remoteOptions = ref(null)
const options = computed(() => {
  return remoteOptions.value ? remoteOptions.value : paramsOptions.value
})
const getList = () => {
  if (paramsItem.value.asyncOptions) {
    loading.value = true
    paramsItem.value
      .asyncOptions(textModel.value)
      .then((res) => {
        remoteOptions.value = res
        getModel()
      })
      .finally(() => {
        loading.value = false
      })
  }
}

const onChange = (row: I.OptionItem) => {
  paramsItem.value.tagNames = row.label
  model.value = row.value || ""
  textModel.value = ""
  emit("update:modelValue", model.value)
  emit("change", { prop: paramsItem.value.prop, value: model.value })
}
const onInput = () => {
  if (paramsItem.value.asyncOptions) {
    getList()
  } else {
    let map = paramsItem.value.options?.filter((a) => {
      if (a.label.indexOf(textModel.value) > -1) {
        return true
      }
    })
    paramsOptions.value = map
  }
}
getList()
getModel()
</script>
<style lang="scss" scoped>
.base-select {
  .remote-input {
    width: 100%;
  }
  :deep(.el-empty__image svg) {
    height: 50px;
  }
  .select-spinner {
    position: relative;
    ul {
      li {
        list-style: none;
        padding: 6px 10px;
        cursor: pointer;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.active {
          color: var(--el-color-primary);
        }
        &:hover {
          background: var(--el-color-primary-light-9);
          color: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
