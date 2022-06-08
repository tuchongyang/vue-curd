<template>
  <div class="detail-info">
    <div v-if="props.title" class="title">{{ props.title }}</div>
    <slot></slot>
    <el-row v-if="!$slots.default" class="table-detail" :class="[props.showType]">
      <el-col v-for="(item, i) in props.data" :key="i" :span="item.span">
        <div class="item-col">
          <div class="label" :style="{ width: getLabelWidth(item) }">{{ item.label }}：</div>
          <div class="det">
            <template v-if="item.slot">
              <slot :name="item.slot" :row="item" :data="props.data" :index="i"></slot>
            </template>
            <template v-else>
              <ConstantStatus v-if="item.options" :value="item.value" :options="item.options" />
              <template v-else-if="item.type == 'image'">
                <el-image :src="item.value" :preview-src-list="[item.value]" style="width: 40px; height: 40px; vertical-align: top" :fit="'cover'" v-bind="item.props"></el-image>
              </template>
              <template v-else>{{ item.value }}</template>
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue"
import { ElDrawer, ElRow, ElCol, ElImage } from "element-plus"
import { ConstantStatus } from "@vue-curd/constant-status"
import { OptionItem, DetailDataItem } from "./types"
import { isString } from "../utils/is"

const props = defineProps({
  data: {
    type: Object as PropType<Array<DetailDataItem>>,
    default: () => ({}),
  },
  title: {
    type: String,
    default: "",
  },
  /** 显示方式，默认是table，表格式、带边框，可选项：table、normal */
  showType: {
    type: String,
    default: "table",
  },
  labelWidth: {
    type: [Number, String],
    default: 100,
  },
})
const getLabelWidth = (dataItem: DetailDataItem): string => {
  const labelWidth = typeof dataItem.labelWidth !== "undefined" ? dataItem.labelWidth : props.labelWidth
  return isString(labelWidth) ? labelWidth + "" : labelWidth + "px"
}
</script>
<style scoped lang="scss">
.detail-info {
  flex: 1;
  .title {
    margin-bottom: 10px;
    border-left: 3px solid var(--color-primary);
    padding-left: 10px;
    line-height: 1.2;
  }
  & + .detail-info {
    margin-top: 30px;
  }
}
.table-detail {
  .item-col {
    line-height: 20px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    .label {
      padding: 4px 0;
      color: #909399;
      box-sizing: border-box;
      vertical-align: middle;
      float: left;
      width: 100px;
    }
    .det {
      flex: 1;
      padding: 4px 10px;
      box-sizing: border-box;
      min-height: 20px;
      height: 100%;
      word-break: break-all;
    }
  }
  &.table {
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    .el-col {
      padding: 0 !important;
      border-bottom: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
    }
    .item-col {
      background: #fafafa;
      border: 1px solid #fff;
      .label {
        padding-left: 10px;
        padding-right: 10px;
      }
      .det {
        border-left: 1px solid #ebeef5;

        background-color: #fff;
      }
    }
  }
}
</style>
