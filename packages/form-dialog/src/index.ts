// create-api.ts
import { createVNode, render, nextTick, App, VNode } from "vue"
import FormModal from "./FormDialog.vue"
import { FormDialogOptions } from "./types"
import { SFCWithInstall } from "@vue-curd/utils"
let _app: any

/**
 * 创建表单模态框
 */
const FormDialog = () => {}

FormDialog.show = (options: FormDialogOptions) => {
  // 组件实例
  let formModal: VNode | null
  const container = document.createElement("div")
  // 移除组件
  const remove = () => {
    formModal = null
    render(null, container)
    container.remove()
  }
  formModal = createVNode(FormModal, { ...options, remove })
  // 使当前模态框继承App实例上下文
  nextTick(() => {
    _app && formModal && (formModal.appContext = _app._instance?.appContext || null)
    render(formModal, container)
    document.body.appendChild(container)
  })
  return formModal
}
// 暴露一个插件 API
;(FormDialog as SFCWithInstall<typeof FormDialog>).install = (app): void => {
  _app = app
  app.config.globalProperties["$formDialog"] = FormDialog
}
export { FormDialog }
export default FormDialog
