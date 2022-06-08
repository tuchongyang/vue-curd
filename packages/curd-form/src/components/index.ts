import SchemaFormCheckbox from "./schema-form-checkbox.vue"
import SchemaFormInputNumber from "./schema-form-input-number.vue"
import SchemaFormInput from "./schema-form-input.vue"
import SchemaFormRadio from "./schema-form-radio.vue"
import SchemaFormSelect from "./schema-form-select.vue"
import SchemaFormSwitch from "./schema-form-switch.vue"
import SchemaFormFile from "./schema-form-file.vue"
import SchemaFormDatePicker from "./schema-form-date-picker.vue"
import SchemaFormColorPicker from "./schema-form-color-picker.vue"
import SchemaFormValue from "./schema-form-value.vue"
import SchemaFormCascader from "./schema-form-cascader.vue"
import { isReactive, ref, isRef, createVNode, Ref, PropType } from "vue"
interface PresetMap {
  [key: string]: any
}
const presetMap: PresetMap = {
  "schema-input": SchemaFormInput,
  "schema-select": SchemaFormSelect,
  "schema-radio": SchemaFormRadio,
  "schema-checkbox": SchemaFormCheckbox,
  "schema-input-number": SchemaFormInputNumber,
  "schema-switch": SchemaFormSwitch,
  "schema-file": SchemaFormFile,
  "schema-date-picker": SchemaFormDatePicker,
  "schema-color-picker": SchemaFormColorPicker,
  "schema-value": SchemaFormValue,
  "schema-cascader": SchemaFormCascader,
}

export default presetMap
export const preset = Object.keys(presetMap)
export const getComponent = (type = "input") => {
  // 预设组件
  if (preset.includes("schema-" + type)) {
    return presetMap["schema-" + type]
  } else if (isReactive(type) || isRef(type)) {
    // 自定义组件
    return createVNode(type)
  } else {
    // 不识别组件
    return null
  }
}
