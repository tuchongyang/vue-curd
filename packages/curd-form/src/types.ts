import { FormRules } from "element-plus"
import { defineComponent } from "vue"
export interface FormSchema {
  formItem: Array<FormItem>
  labelWidth?: string | number
  rules?: FormRules
}
export interface FormItem {
  prop: string
  label: string
  type?: typeEmun | ReturnType<typeof defineComponent>
  value?: any
  eventObject?: EventObject
  options?: Array<OptionItem>
  asyncOptions?: (modelRef: Fields, formItem: FormItem) => Promise<Array<OptionItem>>
  asyncValue?: (modelRef: Fields, formItem: FormItem) => Promise<string | number | boolean>
  loading?: boolean
  hidden?: boolean | ((model: Fields) => boolean)
  props?: FormItemPropObject | ((formModel: Fields, formItem: FormItem) => void)
  formItemProps?: FormItemPropObject | ((formModel: Fields, formItem: FormItem) => void)
  labelWidth?: string
  span?: number
  disabled?: boolean
  tooltip?: string
  /** File组件需要的配置 */
  action?: string
  headers?: {
    [key: string]: string
  }
  url?: string
  getUrl?: (formModel: Fields, formItem: FormItem) => string
  fileType?: string
  maxsize?: number
  beforeUpload?: (isJpgOrPng: boolean, isLt2M: number) => void
}
type typeEmun = "input" | "select" | "radio" | "checkbox" | "input-number" | "switch" | "file" | "date-picker" | "color-picker" | "value"
export interface FormItemPropObject {
  accept?: string
  maxSize?: number
  autoUpload?: boolean
}

export interface Fields {
  [key: string]: any
}
interface EventObject {
  [key: string]: (...data: Array<any>) => void
}
export interface OptionItem {
  label: string
  value: string | number | boolean
  disabled?: boolean
  tooltip?: string | ((formModel: Fields, formItem: FormItem) => string)
}
