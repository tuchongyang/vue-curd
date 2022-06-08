<template>
  <div class="filter-item" @keydown.delete="remove">
    <FilterTags :select-list="selectList" :list-query="listQuery" @remove="removeChange" @change="editChange">
      <div class="filter-search">
        <div v-if="currentIndex > -1" class="current-filter-label">{{ selectParams[currentIndex].label }}:</div>
        <input ref="searchInput" v-model.trim="inputModel" type="text" class="search-input" :placeholder="isPlaceholder()" @input="onInput" @mousedown.stop @keydown.enter="confirm" @focus="onFocus" @blur="onBlur" />
      </div>
    </FilterTags>
    <teleport to="body">
      <FilterList ref="listRef" :select-params="props.selectParams" @change="listChange"></FilterList>
      <FilterType ref="typeRef" :list-query="listQuery" @change="confirm" @cancel="onClose"></FilterType>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, inject, Ref, PropType } from "vue"
import * as I from "../interface"
import FilterTags from "./FilterTags.vue"
import FilterList from "./FilterList.vue"
import FilterType from "./FilterType.vue"
const emit = defineEmits(["change", "onRemove"])

const props = defineProps({
  selectParams: {
    type: Array as PropType<Array<I.ParamsItem>>,
    default: () => {
      return []
    },
  },
  listQuery: {
    type: Object as PropType<I.ListQuery>,
    default: () => {
      return {}
    },
  },
  selectList: {
    type: Array as PropType<Array<I.ParamsItem>>,
    default: () => {
      return []
    },
  },
})
const state = inject<any>("state")
const currentIndex: Ref<number> = ref(-1)
const inputModel = ref("")
const listRef = ref()
const searchInput = ref()
const typeRef = ref()
const listQuery: Ref<I.ListQuery> = ref(props.listQuery)
const selectList: Ref<I.ParamsItem[]> = ref(props.selectList)
watch(
  () => props.selectList,
  (val) => {
    selectList.value = val
  },
  { deep: true }
)
const editChange = (row: I.ParamsItem) => {
  let i = props.selectParams.findIndex((a) => a.prop == row.prop)
  if (i > -1) {
    currentIndex.value = i
    searchInput.value.focus()
    typeOpen()
  }
}
const isPlaceholder = () => {
  let tips = "添加搜索条件"
  if (currentIndex.value > -1) {
    let item = props.selectParams[currentIndex.value]
    if (item.props && item.props.placeholder) {
      tips = String(item.props.placeholder)
    } else if (item && item.type && item.type != "input") {
      tips = "请选择" + item.label
    } else {
      tips = "模糊搜索" //"请输入" + item.label
    }
  }
  return tips
}
const listOpen = () => {
  if (currentIndex.value < 0 && !inputModel.value) {
    listRef.value.open(searchInput.value)
  } else {
    listRef.value.close()
  }
}
const listModelShow = () => {
  // 隐藏搜索列表
  listRef.value.close()
}
const typeOpen = () => {
  let item = props.selectParams[currentIndex.value]
  if (item && item.type && item.type != "input") {
    typeRef.value.open(searchInput.value, item)
  }
}
const typeHiden = () => {
  typeRef.value.close()
}
const onInput = () => {
  listOpen()
}
const onFocus = () => {
  state.value.isFocus = true
  listOpen()
  typeOpen()
}
const onBlur = () => {
  state.value.isFocus = false
}
const confirmSearch = () => {
  if (currentIndex.value < 0 && !inputModel.value) {
    return
  }

  let index = currentIndex.value > -1 ? currentIndex.value : 0
  let item = props.selectParams[index]
  if (inputModel.value) {
    listQuery.value[item.prop] = inputModel.value
    item.tagNames = inputModel.value
  } else if (item.type == "input" || !item.type) {
    listQuery.value[item.prop] = inputModel.value
  }
  let list = selectList.value
  if (!list.some((a) => a.prop == item.prop)) {
    list.push(item)
  }
  searchInput.value.blur()

  onClose()
  typeHiden()
}
const confirm = () => {
  confirmSearch()
  onEmit()
}
const listChange = (index: number) => {
  currentIndex.value = index
  searchInput.value.focus()
  typeOpen()
}
const onClose = () => {
  currentIndex.value = -1
  inputModel.value = ""
}
const removeChange = () => {
  emit("onRemove")
}

const onEmit = () => {
  emit("change")
}
const remove = () => {
  if (!inputModel.value) {
    if (!selectList.value.length && currentIndex.value == -1) {
      return
    }

    if (currentIndex.value == -1) {
      let currentI = selectList.value.length - 1
      listQuery.value[selectList.value[currentI].prop] = ""
      selectList.value.splice(currentI, 1)
      searchInput.value.focus()
      typeHiden()
    }
    currentIndex.value = -1
    if (currentIndex.value == -1) {
      typeHiden()
      setTimeout(() => {
        listOpen()
      })
    }
  }
}
const onSearch = () => {
  if (currentIndex.value > -1) {
    confirm()
  }
}
defineExpose({ onClose, onSearch, currentIndex, confirmSearch })
</script>
<style lang="scss" scoped>
.filter-item {
  align-items: center;
  display: flex;
  flex: 1;
  // padding-left: 5px;
  padding: 2px 0 0 5px;
  width: calc(100% - 150px);
  flex-wrap: wrap;
  box-sizing: border-box;
  max-height: 60px;
  overflow-y: auto;

  overflow-x: hidden;
  .search-input {
    height: 30px;
    border: none;
    flex-grow: 1;
    padding: 0 10px;
    background: transparent;
    &:focus-visible {
      outline: 20px solid transparent;
    }
    &::-webkit-input-placeholder {
      color: var(--el-color-info-light-3);
      font-size: 12px;
    }
  }
  .filter-search {
    display: flex;
    flex: 1;
    align-items: center;
    justify-items: center;
    white-space: nowrap;
    font-size: 12px;
    .current-filter-label {
      white-space: nowrap;
      color: var(--color-black);
      padding: 0 0 0 10px;
    }
  }
}
</style>
