<template>
  <div class="base-time">
    <div class="time-picker">
      <!-- v-if="['daterange', 'monthrange', 'datetimerange'].indexOf(paramsItem.timeType) > -1" -->
      <el-date-picker
        v-model="pickerModel"
        size="small"
        value-format="YYYY-MM-DD"
        format="YYYY-MM-DD"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        v-bind="paramsItem.props"
      />

      <!-- <el-date-picker v-if="['date', 'month'].indexOf(paramsItem.timeType) > -1" v-model="pickerModel" :value-format="paramsItem.valueFormat" :format="paramsItem.format" :clearable="paramsItem.clearable" :type="paramsItem.timeType" placeholder="" /> -->
    </div>

    <div class="floor">
      <el-button size="small" @click="cancel">取消</el-button>
      <el-button size="small" @click="confirm">确认</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { deepClone } from "../../../../utils/common";
import { ElDatePicker } from "element-plus";
import { PropType, Ref, ref, watch } from "vue";
import * as I from "../../interface";
const emit = defineEmits(["update:modelValue", "change", "cancel"]);
const props = defineProps({
  paramsItem: {
    type: Object as PropType<I.ParamsItem>,
    default: () => {
      return {};
    },
  },
  modelValue: {
    type: [String, Array] as PropType<string | Array<string>>,
    default: "",
  },
});
const model: Ref<string | string[]> = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    model.value = val;
  }
);
watch(
  () => model.value,
  (val) => {
    emit("update:modelValue", val);
  }
);
const paramsItem = ref(props.paramsItem);
const textModel: Ref<string> = ref("");
const pickerModel: Ref<string | string[]> = ref(deepClone(props.modelValue));

const confirm = () => {
  model.value = deepClone(pickerModel.value);
  emit("change", { prop: paramsItem.value.prop, value: model.value });
};
const cancel = () => {
  pickerModel.value = "";
  emit("cancel");
};
</script>
<style lang="scss" scoped>
.base-time {
  .time-picker {
    padding: 10px;
  }
  .floor {
    border-top: 1px solid var(--color-info-light-7);
    padding: 5px 10px;
    text-align: right;
  }
}
</style>
