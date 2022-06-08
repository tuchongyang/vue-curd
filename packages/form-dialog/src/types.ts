import { Fields, FormSchema } from "@vue-curd/curd-form"

export interface FormDialogOptions {
  title?: string
  width?: string | number
  fields?: Fields
  formSchema: FormSchema
  handleOk?: (modelRef: Fields) => Promise<void>
  setForm?: (form: Fields) => void
}
