<template>
  <span ref="toggleRef" class="filter-dropdown-toggle" :class="{ active: currentValue }" @click.stop="openFilter">
    <el-icon><Filter /></el-icon>
  </span>
  <teleport to="body">
    <FilterType ref="typeRef" @change="confirm"></FilterType>
  </teleport>
</template>
<script lang="ts" setup>
import { Filter } from "@element-plus/icons-vue"
import { ElIcon } from "element-plus"
import { ref, PropType } from "vue"
import FilterType from "@vue-curd/table-filter"
import { ColumnItemFilter } from "./types"
const props = defineProps({
  filter: {
    type: Object as PropType<ColumnItemFilter>,
    default() {
      return {}
    },
  },
})
const emit = defineEmits(["change"])
let currentValue = ref("")
const typeRef = ref()
const toggleRef = ref()
const openFilter = () => {
  typeRef.value.open(toggleRef.value, props.filter)
}
const confirm = (opt: any) => {
  currentValue.value = opt.value
  emit("change", opt.prop, opt.value)
}
</script>
<style lang="scss" scoped>
.filter-dropdown-toggle {
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  position: relative;
  &.active {
    color: var(--color-primary);
  }
}
</style>
<style lang="scss">
.table-main-filter-dropdown {
  padding: 0;
  .search {
    position: relative;
    margin-bottom: 5px;
    input {
      outline: none;
      border: 0;
      width: 100%;
      padding: 5px 10px;
      background: #f4f4f4;
    }
    .icon-suffix {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .icon-close1 {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      opacity: 0.7;
      &:hover {
        opacity: 1;
        color: #444;
      }
    }
  }
  .select {
    li {
      line-height: 30px;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      &:hover {
        background: #f4f4f4;
      }
      &.active {
        color: var(--color-primary);
      }
    }
  }
}
</style>
