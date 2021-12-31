// create-api.ts
import { createVNode, render, nextTick } from "vue"
import FormModal from "./FormDialog.vue"
let _app


/**
 * 创建表单模态框
 */
const FormDialog = ()=>{}

FormDialog.show = (options) => {
    // 组件实例
    let formModal
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
      _app && (formModal.appContext = _app._instance?.appContext)
      render(formModal, container)
      document.body.appendChild(container)
    })
    return formModal

}
// 暴露一个插件 API
const install = (app) => {
  _app = app
  app.config.globalProperties["$formDialog"] = FormDialog;
}
FormDialog.install = install
export { FormDialog }
export default FormDialog
