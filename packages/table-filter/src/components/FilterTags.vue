<template>
  <div class="filter-tags">
    <div v-for="(item, i) in selectList" :key="i" class="tag-list" @click="editClick(item)">
      <div class="label">{{ item.label }}：</div>
      <div class="value">{{ isValue(item) }}</div>
      <div class="action" @click.stop="remove(item, i)">
        <el-icon>
          <CircleCloseFilled />
        </el-icon>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref, PropType } from "vue"
import { ElIcon } from "element-plus"
import { CircleCloseFilled } from "@element-plus/icons-vue"
const emit = defineEmits(["change", "remove"])
const props = defineProps({
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

const listQuery: Ref<I.ListQuery> = ref(props.listQuery)
const selectList: Ref<I.ParamsItem[]> = ref(props.selectList)
const remove = (row: I.ParamsItem, index: number) => {
  selectList.value.splice(index, 1)
  // listQuery.value[row.prop] = ""
  delete listQuery.value[row.prop]
  emit("remove")
}
const isValue = (item: I.ParamsItem) => {
  let text = item.tagNames || listQuery.value[item.prop]
  let type = item.type
  switch (type) {
    case "time":
      if (item.tableKey && item.tableKey.length) {
        return listQuery?.value[item.tableKey[0]] + " 至 " + listQuery?.value[item.tableKey[1]]
      } else {
        return listQuery?.value[item.prop]
      }
      return
      break
    default:
      return text
  }
}
const editClick = (row: I.ParamsItem) => {
  emit("change", row)
}
</script>
<style lang="scss" scoped>
.filter-tags {
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  flex: 1;
  align-items: center;
  justify-items: center;
  .tag-list {
    height: 24px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 10px;
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-9);
    font-size: 12px;
    border-radius: var(--el-border-radius-base);
    margin-right: 5px;
    margin-bottom: 2px;
    cursor: pointer;
    .action {
      color: var(--el-color-info);
      text-align: center;
      width: 14px;
      height: 14px;
      line-height: 14px;
      border-radius: 50%;
      margin-left: 10px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
