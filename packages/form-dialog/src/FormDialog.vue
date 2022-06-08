<template>
  <el-dialog v-model="visible" :title="title" width="60%" v-bind="$attrs" :before-close="onBeforeClose">
    <curd-form ref="dynamicForm" v-model="form" :fields="fields" :form-schema="dynamicValidateForm" style="margin: 0 40px 0 20px" />
    <template #footer>
      <span class="dialog-footer">
        <el-button :disabled="confirmLoading" @click="onCancel()">取消</el-button>
        <el-button :disabled="confirmLoading" type="primary" @click="onOk">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, PropType } from "vue"
import CurdForm from "@vue-curd/curd-form"
import { ElDialog, ElButton } from "element-plus"
import { FormSchema, Fields } from "@vue-curd/curd-form"
export default defineComponent({
  name: "FormDialog",
  components: { CurdForm, ElDialog, ElButton },
  props: {
    title: {
      type: String,
      default: "",
    },
    remove: {
      // 移除模态框
      type: Function as PropType<() => void>,
      default: null,
    },
    formSchema: {
      // 表单项
      type: Object as PropType<FormSchema>,
      default: () => ({}),
    },
    fields: {
      // 默认值，一般编辑时传入
      type: Object as PropType<Fields>,
      default: () => ({}),
    },
    setForm: {
      type: Function as PropType<(form: Fields) => void>,
      default: null,
    },
    handleOk: {
      // 点击确定
      type: Function,
      default: null,
    },
  },
  setup(props) {
    const dynamicForm = ref()
    const form = ref<Fields>({})
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
            onCancel()
          }
        })
        .catch(() => {
          state.confirmLoading = false
        })
    }
    const onCancel = () => {
      state.visible = false
      setTimeout(() => {
        props.remove && props.remove()
      }, 300)
    }
    const onBeforeClose = () => {
      setTimeout(() => {
        props.remove && props.remove()
      }, 300)
    }
    if (props.setForm) {
      props.setForm(form)
    }

    return {
      ...toRefs(state),
      onOk,
      onCancel,
      onBeforeClose,
      dynamicForm,
      form,
    }
  },
})
</script>

<style scoped></style>
