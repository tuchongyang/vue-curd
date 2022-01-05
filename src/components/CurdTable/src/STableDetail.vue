<template>
  <el-drawer v-model="visible" title="详情" size="40%">
    <el-row class="table-detail">
      <el-col :span="item.span" v-for="(item, i) in list" :key="i">
        <div class="item-col">
          <div class="label">{{ item.label }}：</div>
          <div class="det">
            <ConstantStatus v-if="item.options" :value="item.value" :options="item.options" />
            <template v-else-if="item.form && item.form.component == 'file'">
              <el-image :src="item.value" :preview-src-list="[item.value]" style="width: 40px; height: 40px; vertical-align: top" fit="cover"></el-image>
            </template>
            <template v-else>{{ item.value }}</template>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-drawer>
</template>
<script setup>
import { ref } from "vue"
import { ConstantStatus } from "../../ConstantStatus/src"
const visible = ref(false)
const list = ref([])
const open = (option) => {
  list.value = []
  option.columns.forEach((item) => {
    if (item.children && item.children.length) {
      for (let i in item.children) {
        const a = item.children[i]
        list.value.push({
          prop: a.prop,
          label: a.label,
          value: option.data[a.prop],
          span: (a.form && a.form.span) || 12,
          options: a.options,
          form: a.form,
        })
      }
    } else {
      list.value.push({
        prop: item.prop,
        label: item.label,
        value: option.data[item.prop],
        span: (item.form && item.form.span) || 12,
        options: item.options,
        form: item.form,
      })
    }
  })
  visible.value = true
}
defineExpose({ open })
</script>
<style scoped lang="scss">
.table-detail {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  .el-col {
    padding: 0 !important;
    border-bottom: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
  }
  .item-col {
    background: #fafafa;
    line-height: 32px;
    border: 1px solid #fff;
    height: 100%;
    box-sizing: border-box;
    .label {
      padding: 2px 10px;
      color: #909399;
      box-sizing: border-box;
      text-align: right;
      vertical-align: middle;
      float: left;
      width: 90px;
    }
    .det {
      border-left: 1px solid #ebeef5;
      padding: 2px 10px;
      box-sizing: border-box;
      background-color: #fff;
      margin-left: 90px;
      min-height: 36px;
      height: 100%;
      word-break: break-all;
    }
  }
}
</style>
