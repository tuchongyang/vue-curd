<template>
  <div v-if="visible" class="filter-type" :style="style" @mousedown.stop>
    <component
      :is="typeList[params.type]"
      v-model="query[params.prop]"
      :params-item="params"
      @change="onChange"
      @cancel="onCancel"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, Ref, PropType } from "vue";
import * as I from "../interface";
import container from "./containers";
import * as Utils from "../../../utils/common";

const props = defineProps({
  listQuery: {
    type: Object as PropType<I.ListQuery>,
    default: () => {
      return {};
    },
  },
});
const emit = defineEmits(["click", "change", "cancel"]);
const listQuery: Ref<I.ListQuery> = ref(props.listQuery);
const query: Ref<I.ListQuery> = ref(Utils.deepClone(props.listQuery));
const params: Ref<I.ParamsItem> = ref({} as I.ParamsItem);
const visible: Ref<boolean> = ref(false);
const style = ref({});
const typeList = container;
// 两个watch导致循环无限调用问题，去掉了query的watch，该由change主动触发listQuery的改变
// watch(
//   () => query.value,
//   (val) => {
//     let q = val as I.ListQuery
//     if (params.value.tableKey && params.value.tableKey.length) {
//       params.value.tableKey.forEach((a, i) => {
//         q[a] = val[params.value.prop][i]
//       })
//     }
//     for (let i in q) {
//       let item = q[i]
//       listQuery.value[i] = item
//     }
//     console.log("query监听里面", JSON.stringify(listQuery.value))
//   },
//   { immediate: true }
// )
watch(
  () => props.listQuery,
  (val) => {
    let q = Utils.deepClone(val);
    let arr: Array<string> = [];
    if (params.value.tableKey && params.value.tableKey.length) {
      params.value.tableKey.forEach((a, i) => {
        arr.push(listQuery.value[a] + "");
      });
      q[params.value.prop] = arr;
    }
    query.value = q;
  },
  { immediate: true, deep: true }
);
const open = (event: any, option: I.ParamsItem) => {
  params.value = option;
  visible.value = true;
  let position = Utils.getPosition(event);
  style.value = {
    top: position.top + event.offsetHeight + 5 + "px",
    left: position.left + 5 + "px",
  };
  document.getElementById("app")?.addEventListener("mousedown", close);
};
const close = () => {
  visible.value = false;
};
defineExpose({ close, open });
const onChange = (option: ChangeOption) => {
  if (params.value.tableKey && params.value.tableKey.length) {
    params.value.tableKey.forEach((a, i) => {
      listQuery.value[a] = option.value[i];
    });
  } else {
    listQuery.value[option.prop] = option.value;
  }
  emit("change", option);
  close();
};

const onCancel = () => {
  close();
  emit("cancel");
};
interface ChangeOption {
  prop: string;
  value: any;
}
</script>
<style lang="scss" scoped>
.filter-type {
  position: absolute;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  background: var(--bg-color);
  z-index: 1060;
  min-width: 200px;
  max-height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
}
</style>
