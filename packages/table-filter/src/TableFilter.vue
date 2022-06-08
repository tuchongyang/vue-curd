<template>
  <div class="table-filter">
    <FilterExternal v-if="selectParams.some((a) => a.external)" :select-params="selectParams" :list-query="listQuery" @change="confirm"></FilterExternal>
    <div v-if="!selectParams.every((a) => a.external)" class="filter-search-box" :class="{ 'is-focus': state.isFocus }">
      <FilterItem ref="searchRef" :select-params="selectParams" :select-list="selectList" :list-query="listQuery" @change="confirm" @on-remove="onChange"></FilterItem>
      <div class="filter-action">
        <div v-if="selectList.length" class="empty" @click="clear">清空</div>
        <div class="search" @click="confirm">
          <el-icon><Search /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, Ref, provide, ref } from "vue"
import * as I from "./interface"
import { ElIcon } from "element-plus"
import { Search } from "@element-plus/icons-vue"
import FilterItem from "./components/FilterItem.vue"
import FilterExternal from "./FilterExternal/FilterExternal.vue"
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
})
const emit = defineEmits(["search"])
const searchRef = ref()
const selectList: Ref<I.ParamsItem[]> = ref([])
const selectParams: Ref<Array<I.ParamsItem>> = ref(props.selectParams || [])
const listQuery: Ref<I.ListQuery> = ref(props.listQuery || {})
const clear = () => {
  selectParams.value.forEach((a) => {
    let i = selectList.value.findIndex((j) => a.prop == j.prop)
    selectList.value.splice(i, 1)
    if (!a.external) {
      listQuery.value[a.prop] = ""
    }
  })
  searchRef.value.onClose()
  emit("search")
}
const confirm = () => {
  if (searchRef.value.currentIndex > -1) {
    searchRef.value.onSearch()
  } else {
    searchRef.value.confirmSearch()
    emit("search")
  }
}
const onChange = () => {
  emit("search")
}
const getTags = () => {
  selectParams.value.forEach((a) => {
    let i = selectList.value.findIndex((j) => a.prop == j.prop)
    if (!a.external && i == -1 && listQuery.value[a.prop]) {
      if (a.options && a.options.length) {
        selectList.value.push({ ...a, tagNames: a.options.find((j) => j.value == listQuery.value[a.prop])?.label })
      } else {
        selectList.value.push(a)
      }
    }
  })
}

const setItem = (prop: string) => {
  let item = selectParams.value.find((a) => a.prop == prop)
  if (item && !item.external && !selectList.value.some((a) => a.prop == prop)) {
    selectList.value.push(item)
  }
}
const state = ref({
  isFocus: false,
})
provide("state", state)
defineExpose({ setItem })
getTags()
</script>
<style lang="scss" scoped>
.table-filter {
  background: var(--bg-color);
  display: flex;
  .filter-search-box {
    min-height: 32px;
    // width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: var(--el-border-color);
    display: flex;
    // flex: 1;
    min-width: 460px;
    margin-bottom: 10px;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    overflow: hidden;
    border-radius: var(--el-border-radius-base);
    transition: all 0.3s;
    &.is-focus {
      border-color: var(--el-color-primary);
    }
    .filter-action {
      height: 32px;
      line-height: 32px;
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: space-between;

      div {
        cursor: pointer;
      }
      .empty {
        color: var(--el-color-info);
        margin-right: 15px;
        padding-left: 10px;
        font-size: 12px;
        &:hover {
          color: var(--el-color-primary);
        }
      }
      .search {
        // width: 96px;
        padding: 0 20px;
        text-align: center;
        // background: var(--el-color-primary);
        border-radius: var(--el-border-radius-base);
        // color: var(--bg-color);
        position: relative;
        display: flex;
        &:before {
          content: "";
          display: block;
          width: 1px;
          height: 20px;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:hover {
          // background: var(--el-color-primary-light-2);
          color: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
