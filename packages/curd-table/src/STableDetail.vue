<template>
  <el-drawer v-model="visible" title="详情" size="40%">
    <DetailInfo :data="list" title="详情" />
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue"
import { ElDrawer } from "element-plus"
import { ColumnItem, DetailDataItem } from "./types"
import DetailInfo from "./DetailInfo.vue"
interface OpenOption {
  columns: Array<ColumnItem>
  data: any
}

const visible = ref(false)
const list: Ref<Array<DetailDataItem>> = ref([])
const open = (option: OpenOption) => {
  list.value = []
  option.columns.forEach((item) => {
    if (item.children && item.children.length) {
      for (let i in item.children) {
        const a = item.children[i]
        list.value.push({
          label: a.label,
          value: option.data[a.prop],
          span: (a.form && a.form.span) || 24,
          options: a.options,
        })
      }
    } else {
      list.value.push({
        label: item.label,
        value: option.data[item.prop],
        span: (item.form && item.form.span) || 24,
        options: item.options,
      })
    }
  })
  visible.value = true
}
defineExpose({ open })
</script>
<style scoped lang="scss"></style>
