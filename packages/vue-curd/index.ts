import type { Plugin } from "vue"
import ConstantStatus from "@vue-curd/constant-status"
import CurdForm from "@vue-curd/curd-form"
import CurdTable from "@vue-curd/curd-table"
import FormDialog from "@vue-curd/form-dialog"
import TableFilter from "@vue-curd/table-filter"
import { makeInstaller } from "./make-installer"

const Components = [ConstantStatus, CurdForm, CurdTable, FormDialog, TableFilter] as Plugin[]
export { ConstantStatus, CurdForm, CurdTable, FormDialog, TableFilter }
export default makeInstaller([...Components])
