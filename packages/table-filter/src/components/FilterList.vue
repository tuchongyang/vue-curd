<template>
  <div v-show="visible" class="filter-List" :style="style" @mousedown.stop>
    <ul>
      <template v-for="(item, index) in props.selectParams" :key="index">
        <li v-if="!item.external" @click="select(index)">{{ item?.label }}</li>
      </template>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, PropType, Ref } from "vue"
import * as I from "../interface"
import * as Utils from "@vue-curd/utils/common"
const props = defineProps({
  selectParams: {
    type: Array as PropType<Array<I.ParamsItem>>,
    default: () => {
      return []
    },
  },
})
const emit = defineEmits(["click", "change"])

const visible: Ref<boolean> = ref(false)
const style = ref({})
const select = (index: number) => {
  emit("change", index)
  close()
}
const open = (event: any) => {
  visible.value = true
  let position = Utils.getPosition(event)
  style.value = {
    top: position.top + event.offsetHeight + 5 + "px",
    left: position.left + 5 + "px",
  }
  document.getElementById("app")?.addEventListener("mousedown", close)
}
const close = () => {
  visible.value = false
}
defineExpose({ close, open })
</script>
<style lang="scss" scoped>
.filter-List {
  position: absolute;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  background: var(--el-color-white);
  z-index: 1060;
  border-radius: 2px;
  width: 200px;
  top: 0;
  left: 0;

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      font-size: var(--el-font-size-base);
      list-style: none;
      padding: 6px 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
