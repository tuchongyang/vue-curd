<template>
  <div class="s-table-filter">
    <TableFilter ref="tableFilterRef" :select-params="selectParams" :list-query="props.listQuery" @search="onSearch"></TableFilter>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, Ref, PropType } from "vue"
import TableFilter from "@vue-curd/table-filter"
import { ParamsItem, ListQuery } from "@vue-curd/table-filter"
const emits = defineEmits(["search"])
const selectParams = inject<Ref<Array<ParamsItem>>>("selectParams") || ref([])
const props = defineProps({
  listQuery: {
    type: Object as PropType<ListQuery>,
    default() {
      return {}
    },
  },
})

const onSearch = () => {
  emits("search", props.listQuery)
}
const tableFilterRef = ref()
const setItem = (prop: string) => {
  tableFilterRef.value.setItem(prop)
}
defineExpose({ setItem })
</script>
