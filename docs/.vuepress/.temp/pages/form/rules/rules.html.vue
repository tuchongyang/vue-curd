<template><h2 id="普通用法" tabindex="-1"><a class="header-anchor" href="#普通用法" aria-hidden="true">#</a> 普通用法</h2>
<SchemaForm v-model="formModel" class="center-form" ref="dynamicForm" :fields="fields" :form-schema="formSchema" :label-width="formSchema.labelWidth || '110px'">
    <template v-slot:operate-button>
        <div style="text-align: center">
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button type="default" @click="clear">清 空</el-button>
        </div>
    </template>
</SchemaForm>
<h2 id="自定义验证" tabindex="-1"><a class="header-anchor" href="#自定义验证" aria-hidden="true">#</a> 自定义验证</h2>
<SchemaForm class="center-form" ref="dynamicForm1" :fields="fields1" :form-schema="formSchema1" :label-width="formSchema1.labelWidth || '110px'">
    <template v-slot:operate-button>
        <div style="text-align: center">
        <el-button type="primary" @click="submit1">提 交</el-button>
        <el-button type="default" @click="clear1">清 空</el-button>
        </div>
    </template>
</SchemaForm>
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



const formModel = ref({})
var validatePass = (rule, value, callback)=>{
    if (value !== 0 && !value) {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
};
var validatePass2 = (rule, value, callback)=>  {
    if (value !== 0 && !value) {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.obj.password) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
            
        const formSchema1 = {
            formItem: [
                { type: "input", label: "用户名", prop: "username", span: 12 },
                { type: "input", label: "姓名", prop: "name", span: 12 },
                { type: "input-password", label: "密码", prop: "password", span: 12 },
                { type: "input-password", label: "确认密码", prop: "repassword", span: 12 },
            ],
            rules:{
                username:[{required: true,message:"用户名不能为空",trigger: "trigger"}],
                password: [{ validator: validatePass, trigger: 'blur' }],
                repassword: [{ validator: validatePass2, trigger: 'blur' }]
            }
        }
        const fields1 = {}
        const dynamicForm1 = ref()
        const instance1 = getCurrentInstance()
        const submit1 = () => {
            dynamicForm1.value.validate((valid) => {
                if (valid) {
                instance1.appContext.config.globalProperties.$message({
                    type: "success",
                    message: "提交成功",
                })
                }
            })
        }
        const clear1 = () => {
            dynamicForm1.value.schemaFormRef.resetFields()
        }

</script>
