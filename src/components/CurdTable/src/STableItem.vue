<template>
  <ConstantStatus :value="props.scope.row[props.schema.prop]" v-if="props.schema.options" :options="props.schema.options" />
  <template v-else-if="props.schema.form && props.schema.form.component == 'file'">
    <el-image :src="props.scope.row[props.schema.prop]" :preview-src-list="[props.scope.row[props.schema.prop]]" style="width: 40px; height: 40px; vertical-align: top" fit="cover"></el-image>
  </template>
  <span v-else>{{ props.scope.row[props.schema.prop] }}</span>
</template>
<script setup>
import { ConstantStatus } from "../../ConstantStatus/src"
const props = defineProps({
  scope: {
    type: Object,
    default() {
      return {}
    },
  },
  schema: {
    type: Object,
    default() {
      return {}
    },
  },
})
</script>
