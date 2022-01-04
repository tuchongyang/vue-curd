## 普通用法


``` vue
<template>
<CurdForm v-model="formModel" class="center-form" ref="dynamicForm" :fields="fields" :form-schema="formSchema" :label-width="formSchema.labelWidth || '110px'">
    <template v-slot:operate-button>
        <div style="text-align: center">
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button type="default" @click="clear">清 空</el-button>
        </div>
    </template>
</CurdForm>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue"
var validatePass1 = (rule, value, callback)=>{
    if (value !== 0 && !value) {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
};
const formSchema = {
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
    { type: "input-password", label: "密码", prop: "password", span: 24 },
  ],
  rules:{
    username:[{required: true,message:"用户名不能为空",trigger: "trigger"}],
    password: [{ validator: validatePass1, trigger: 'blur' }],
  }
}
const fields = {}
const dynamicForm = ref()
const instance = getCurrentInstance()
const submit = () => {
  dynamicForm.value.validate((valid) => {
    if (valid) {
      instance.appContext.config.globalProperties.$message({
        type: "success",
        message: "提交成功",
      })
    }
  })
}
const clear = () => {
  dynamicForm.value.schemaFormRef.resetFields()
}

</script>

```