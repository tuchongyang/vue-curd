## 状态组件


```vue
<template>
  <ConstantStatus :value="value1" :options="options" />
  <ConstantStatus :value="value2" :options="options" />
  <ConstantStatus :value="value3" :options="options" />
  <ConstantStatus :value="value4" :options="options" />
  <ConstantStatus :value="value5" :options="options" />
  <ConstantStatus :value="value6" :options="options" />
</template>

<script setup>
import { shallowRef } from "vue"
import { Clock, CircleCheckFilled, ChatLineSquare } from "@element-plus/icons-vue"
const value1 = "1"
const value2 = "2"
const value3 = "3"
const value4 = "4"
const value5 = "5"
const value6 = "6"
const options = shallowRef([
  { value: "1", label: "待审批", className: "color-blue", icon: ChatLineSquare },
  { value: "2", label: "进行中", className: "color-orange", icon: Clock },
  { value: "3", label: "已完成", className: "color-green", icon: CircleCheckFilled },
  { value: "4", label: "不通过", className: "color-red", icon: Clock },
  { value: "5", label: "已取消", className: "color-gray", icon: Clock },
  { value: "6", label: "自定义颜色", color: "#bc00ff", icon: Clock },
])
</script>
```