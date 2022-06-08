import { ShallowRef, shallowRef, watch, ref, provide } from "vue"
import { ColumnItem } from "../types"
import { deepClone } from "../../utils/common"
import { ParamsItem } from "@vue-curd/table-filter"

export function useColumnHook(props: any) {
  const columns: ShallowRef<Array<ColumnItem>> = shallowRef([])
  const cs = deepClone(props.columns)
  columns.value = cs //.filter((a) => !a.hidden)
  provide("columns", columns)

  const getSchema = (colss: ColumnItem[]) => {
    const result: Array<ParamsItem> = []
    const getFilter = (cols: Array<ColumnItem>) => {
      for (const i in cols) {
        const a = deepClone(cols[i])
        if (a.children && a.children.length) {
          getFilter(a.children)
          continue
        }
        if (a.filter) {
          const options = a.filter.options || a.options
          const item: ParamsItem = deepClone(a.filter) as ParamsItem
          if (!item.prop) {
            item.prop = a.prop
          }
          // label可能传空字符串
          if (typeof item.label == "undefined") {
            item.label = a.label
          }
          if (!item.options && options) {
            item.options = options
          }
          result.push(item)
        }
      }
    }
    getFilter(colss)
    return result
  }
  const selectParams = ref<ParamsItem[]>([])
  // selectParams.value = getSchema()
  provide("selectParams", selectParams)
  async function initColumn() {
    for (let i = 0; i < columns.value.length; i++) {
      const item = columns.value[i]
      if (item.asyncOptions) {
        item.options = await item.asyncOptions()
      }
    }
    selectParams.value = getSchema(columns.value)
  }

  initColumn()

  watch(
    () => props.columns,
    (val) => {
      columns.value = deepClone(val)

      initColumn()
    }
  )
  return {
    columns,
    selectParams,
  }
}
