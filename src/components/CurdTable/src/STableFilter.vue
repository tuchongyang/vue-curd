<template>
  <div class="table-filter">
    <CurdForm ref="formSchemaRef" :form-schema="props.schema" inline >
      <template #operate-button>
        <el-button type="primary" @click="search" :icon="Search">查询</el-button>
        <el-button type="default" @click="reset">重置</el-button>
      </template>
    </CurdForm>
  </div>
</template>
<script setup>
import {ref } from "vue"
import { Search } from "@element-plus/icons-vue"
const props = defineProps({
  schema: {
    type: Object,
    default: () => ({}),
  },
})
const emits = defineEmits(["search"])

const formSchemaRef = ref()
const search = () => {
  emits("search", formSchemaRef.value.modelRef)
}
const reset = () => {
  formSchemaRef.value.schemaFormRef.resetFields()
}
</script>
