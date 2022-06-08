<template>
  <el-table-column v-if="!props.schema.hidden" :fixed="props.schema.fixed" v-bind="getColumnAttrs">
    <template #header>
      <div class="header-td" :class="[props.schema.align]">
        <slot name="header"></slot>
        <span v-if="!props.isSlotHeader" class="tit">{{ props.schema.header ? props.schema.header : props.schema.label }}</span>
        <!-- <STableItemFilter
          v-if="props.schema.filter && props.schema.filter.inner"
          :filter="filterSchema"
          @change="onChange"
        /> -->
      </div>
    </template>
    <template #default="scope">
      <slot v-bind="scope"></slot>
      <template v-if="!props.isSlot">
        <ConstantStatus v-if="props.schema.options" :value="scope.row[props.schema.prop]" :options="props.schema.options" />
        <span v-else>{{ getValue(scope) }}</span>
      </template>
    </template>
  </el-table-column>
</template>
<script lang="ts" setup>
import { inject, computed, Ref } from "vue"
import { ElTableColumn } from "element-plus"
import ConstantStatus from "@vue-curd/constant-status"
// import STableItemFilter from "./STableItemFilter.vue";
// import { ParamsItem } from "../../TableFilter";
const props = defineProps({
  schema: {
    type: Object,
    default() {
      return {}
    },
  },
  isSlot: {
    type: Boolean,
    default: false,
  },
  isSlotHeader: {
    type: Boolean,
    default: false,
  },
  option: {
    type: Object,
    default: () => ({}),
  },
})
// const selectParams = inject<Ref<Array<ParamsItem>>>("selectParams");
// const filterSchema = computed(() => {
//   return (
//     selectParams && selectParams.value.find((a) => a.prop == props.schema.prop)
//   );
// });
const getColumnAttrs = computed(() => {
  const { children, ...args } = props.schema
  return args || children
})
const getValue = (scope: any) => {
  if (props.schema.formatter) {
    return props.schema.formatter(scope.row, scope.column, scope.row[props.schema.prop], scope.index)
  }
  return typeof scope.row[props.schema.prop] == "undefined" ? "--" : scope.row[props.schema.prop]
}
const emits = defineEmits(["search"])
const onChange = (prop: string, value: string) => {
  emits("search", prop, value)
}
</script>
<style lang="scss" scoped>
.header-td {
  display: flex;
  align-items: center;
  word-break: break-word;
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
}
</style>
