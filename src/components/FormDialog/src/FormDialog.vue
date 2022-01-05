<template>
  <el-dialog v-model="visible" v-bind="$attrs" :title="title" width="60%" :before-close="remove">
    <curd-form ref="dynamicForm" :fields="fields" :form-schema="dynamicValidateForm" style="margin: 0 40px 0 20px" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="remove" :disabled="confirmLoading">取消</el-button>
        <el-button type="primary" @click="onOk" :disabled="confirmLoading">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue"
import { CurdForm } from "../../CurdForm/src/index.js"
// import { ElDialog, ElButton } from "element-plus"
export default defineComponent({
  name: "FormDialog",
  components: { CurdForm },
  props: {
    title: {
      type: String,
      default: "",
    },
    remove: {
      // 移除模态框
      type: Function,
    },
    formSchema: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    fields: {
      // 默认值，一般编辑时传入
      type: Object,
      default: () => ({}),
    },
    handleOk: {
      // 点击确定
      type: Function,
    },
  },
  setup(props) {
    const dynamicForm = ref()
    const state = reactive({
      visible: true,
      confirmLoading: false,
      dynamicValidateForm: props.formSchema,
    })
    const onOk = () => {
      state.confirmLoading = true
      dynamicForm.value
        ?.validate()
        .then(async () => {
          const pass = await (props.handleOk && props.handleOk(dynamicForm.value?.modelRef, state)).finally(() => (state.confirmLoading = false))
          if (typeof pass == "undefined" || pass) {
            state.visible = false
          }
        })
        .catch((e) => {
          console.log(e)
          state.confirmLoading = false
        })
    }

    return {
      ...toRefs(state),
      onOk,
      dynamicForm,
    }
  },
})
</script>

<style scoped></style>
