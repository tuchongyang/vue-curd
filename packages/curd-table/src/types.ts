import { ParamsItemProps } from "@vue-curd/table-filter"
export interface ColumnItem {
  prop: string
  label: string
  hidden?: boolean
  children?: Array<ColumnItem>
  options?: Array<OptionItem>
  asyncOptions?: () => Promise<OptionItem[]>
  form?: FormItem
  filter?: ColumnItemFilter
  //继承自el-table-column属性
  minWidth?: number
  width?: number
  showOverflowTooltip?: boolean
  align?: string
  fixed?: string
  formatter?: (row: any) => string
  value?: any
  className?: string
}
export interface PropOption {
  operationWidth?: number
  operationBtnTitle?: string
  hideMenu?: boolean // 是否隐藏右侧工具菜单
  hideMenuAdd?: boolean // 是否隐藏菜单中添加按钮
  hideMenuRight?: boolean // 是否隐藏菜单右侧
  hideOperation?: boolean // 是否隐藏操作列
  hideOperationEdit?: boolean // 是否隐藏操作列中的编辑按钮
  hideOperationDetail?: boolean // 是否隐藏操作列中的详情按钮
  hideOperationDelete?: boolean // 是否隐藏操作列中的删除按钮
  hidePage?: boolean // 是否隐藏分页器
  excelTitle?: string //导出表格的文件名
  selectionProps?: Fields //type=selection 的列属性
  downloadMod?: boolean | { excludes?: string[] }
}
export interface ColumnItemFilter {
  inner?: boolean
  type?: string
  label?: string
  prop?: string
  options?: Array<OptionItem>
  tableKey?: Array<string>
  asyncOptions?: (param: string) => Promise<any>
  external?: boolean
  all?: boolean
  tagNames?: string
  props?: ParamsItemProps
}
export interface OptionItem {
  label: string
  value: string | number | boolean
}

export interface TableAttr {
  size?: string
}
export interface FormItem {
  type?: string
  span?: number
  rules?: {}
  props?: FormItemProps
}
export interface FormItemProps {
  [key: string]: any
}
export interface Fields {
  [key: string]: any
}
export interface ListQuery {
  pageIndex: number
  pageSize: number
  [key: string]: any
}

export interface FeachDataParam {
  listQuery: ListQuery
}

export interface DetailDataItem {
  label: string
  value: string
  /** 当前项占的宽度，最大24, 默认24 */
  span?: number
  /** 当前数据的选项，里面包含的图标、颜色信息会自动显示 */
  options?: Array<OptionItem>
  /** type为image时，会把value当做image的url来显示图片 */
  type?: string
  labelWidth?: number
  props?: {
    [key: string]: string
  }
  slot?: string
}

export interface FetchDataOpt {
  showLoading?: boolean
  query?: Fields
}
