<template>
  <div class="table-container">
    <STableFilter v-if="selectParams.length" v-show="filterVisible" ref="sTableFilter" :list-query="search" @search="onSearch" />
    <div v-if="!option.hideMenu" class="table-control">
      <div class="btn-control">
        <el-button v-if="!option.hideMenuAdd" type="primary" @click="create()">
          <el-icon><plus /></el-icon>
          添加
        </el-button>
        <slot name="menuLeft"></slot>
      </div>
      <div class="min-control">
        <slot name="menuRight"></slot>
        <STableMenu v-if="!option.hideMenuRight" :filter-visible="filterVisible" @operation="onMenuOption" />
      </div>
    </div>
    <el-table ref="tableRef" stripe :data="list" scrollbar-always-on v-bind="{ ...$attrs, ...tableAttrs }" @row-click="onRowClick" @selection-change="selectionChange">
      <el-table-column v-if="$attrs.index !== undefined" type="index" />
      <el-table-column v-if="$attrs.selection !== undefined" type="selection" v-bind="option.selectionProps" />
      <template v-for="item in columns" :key="item.label">
        <el-table-column v-if="item.children && item.children.length" :key="item.prop" :label="item.label">
          <template v-for="sub in item.children" :key="sub.prop">
            <STableItem :is-slot="!!$slots[sub.prop]" :is-slot-header="!!$slots[sub.prop + 'Header']" :schema="sub" :option="props.option" @search="onItemChange">
              <template #default="scope1">
                <slot :name="sub.prop" v-bind="scope1"></slot>
              </template>
              <template #header>
                <slot :name="sub.prop + 'Header'"></slot>
              </template>
            </STableItem>
          </template>
        </el-table-column>
        <template v-else>
          <STableItem :schema="item" :is-slot="!!$slots[item.prop]" :is-slot-header="!!$slots[item.prop + 'Header']" :option="props.option" @search="onItemChange">
            <template #default="scope">
              <slot :name="item.prop" v-bind="scope"></slot>
            </template>
            <template #header>
              <slot :name="item.prop + 'Header'"></slot>
            </template>
          </STableItem>
        </template>
      </template>
      <el-table-column v-if="!option.hideOperation" label="操作" fixed="right" :width="option.operationWidth || '200'" align="center">
        <template #default="scope">
          <slot name="operation" v-bind="scope"></slot>
          <template v-if="!$slots.operationBtn">
            <el-button v-if="!option.hideOperationEdit" type="primary" link @click.stop="create(scope.row)">
              <el-icon><Edit /></el-icon> 编辑
            </el-button>
            <el-button v-if="!option.hideOperationDetail" type="primary" link @click.stop="detail(scope.row)">
              <el-icon><Document /></el-icon> 详情
            </el-button>
            <el-button v-if="!option.hideOperationDelete" type="danger" link style="color: #ff0000" @click.stop="startremove(scope)">
              <el-icon><Delete /></el-icon> 删除
            </el-button>
          </template>
          <span v-else class="dropdown-item" @click.stop>
            <el-dropdown trigger="click">
              <el-button type="text">
                {{ props.option.operationBtnTitle }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <slot name="operationBtn" v-bind="scope"></slot>
                  <el-dropdown-item>
                    <el-button v-if="!option.hideOperationEdit" type="text" @click.stop="create(scope.row)">
                      <el-icon><Edit /></el-icon> 编辑
                    </el-button>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-button type="text" @click.stop="detail(scope.row)">
                      <el-icon v-if="!option.hideOperationDetail"><Document /></el-icon>
                      详情
                    </el-button>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-button v-if="!option.hideOperationDelete" type="text" style="color: #ff0000" @click.stop="startremove(scope)">
                      <el-icon><Delete /></el-icon> 删除
                    </el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </span>
        </template>
      </el-table-column>
      <template #empty>
        <slot name="empty"></slot>
        <el-empty v-if="!$slots.empty" :image-size="30" style="line-height: 1" />
      </template>
    </el-table>
    <el-pagination v-if="!option.hidePage" v-model:current-page="listQuery.pageIndex" v-model:page-size="listQuery.pageSize" class="pagination" background layout="total, sizes, prev, pager, next, jumper" :total="total" @current-change="pageChange" @size-change="pageChange"> </el-pagination>

    <STableDetail ref="STableDetailRef" />
  </div>
</template>
<script lang="ts">
export default {
  name: "CurdTable",
}
</script>
<script lang="ts" setup>
import { computed, ref, reactive, watch, getCurrentInstance, PropType, Ref } from "vue"
import { ElTable, ElPagination, ElEmpty, ElButton, ElIcon, ElTableColumn, ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus"
import STableItem from "./STableItem.vue"
import STableFilter from "./STableFilter.vue"
import STableMenu from "./STableMenu.vue"
import STableDetail from "./STableDetail.vue"
import { deepClone } from "../utils/common"
import { Edit, Delete, Plus, ArrowDown, Document } from "@element-plus/icons-vue"
import { ColumnItem, PropOption, TableAttr, Fields, FetchDataOpt } from "./types"
import { ListQuery } from "@vue-curd/table-filter"
import FormDialog from "@vue-curd/form-dialog"
import { ElMessageBox, ElMessage, ElLoading, ElNotification } from "element-plus"
import { FormItem, FormSchema } from "@vue-curd/curd-form"
import { useColumnHook } from "./hooks/useColumnHook"

const props = defineProps({
  // 表格的数据
  data: {
    type: Array as PropType<Array<any>>,
    default() {
      return []
    },
  },
  // 表格列模型
  columns: {
    type: Array as PropType<Array<ColumnItem>>,
    default() {
      return []
    },
  },
  pageOptions: {
    type: Object,
    default() {
      return {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
      }
    },
  },
  // 调用接口获取数据
  fetchData: {
    type: Function,
    default: null,
  },
  // 自定义创建函数
  fetchCreate: {
    type: Function,
    default: null,
  },
  // 自定义编辑函数
  fetchEdit: {
    type: Function,
    default: null,
  },
  // 自定义删除函数
  fetchRemove: {
    type: Function,
    default: null,
  },
  // 专门配置一些公共的参数
  option: {
    type: Object as PropType<PropOption>,
    default() {
      return {
        operationWidth: 200,
        operationBtnTitle: "更多",
        hideMenu: false, // 是否隐藏右侧工具菜单
        hideMenuAdd: false, // 是否隐藏菜单中添加按钮
        hideMenuRight: false, // 是否隐藏菜单右侧
        hideOperation: false, // 是否隐藏操作列
        hideOperationEdit: false, // 是否隐藏操作列中的编辑按钮
        hideOperationDetail: false, // 是否隐藏操作列中的详情按钮
        hideOperationDelete: false, // 是否隐藏操作列中的删除按钮
        hidePage: false, // 是否隐藏分页器
        excelTitle: "", //导出表格的文件名
        selectionProps: null,
        downloadMod: false,
      }
    },
  },
})
const emits = defineEmits(["selectionChange", "row-click"])
const list = ref(props.data)
watch(
  () => props.data,
  (val) => {
    list.value = val
    if (process.env.NODE_ENV === "development") {
      const checkedMap: any = {}
      const checkDownloadValue = (row: any, schema: any) => {
        let excludes: string[] = []
        if (typeof props.option.downloadMod == "object") {
          excludes = props.option.downloadMod.excludes || []
        }
        if (props.option.downloadMod && typeof row[schema.prop] == "undefined" && !excludes.includes(schema.prop)) {
          if (checkedMap[schema.prop]) return
          checkedMap[schema.prop] = true
          setTimeout(() => {
            ElNotification({
              title: "开发警告",
              message: "后端数据没有返回列[" + schema.label + " " + schema.prop + "]的值，将导致下载失败，请检查代码！",
              type: "warning",
            })
          })
        }
      }
      if (props.option.downloadMod) {
        val.map((a) => {
          columns.value.forEach((b) => {
            checkDownloadValue(a, b)
          })
        })
      }
    }
  },
  { deep: true }
)
const tableAttrs: Ref<TableAttr> = ref({ size: "default" })
const listQuery = reactive({
  pageIndex: 1,
  pageSize: props.pageOptions.pageSize || 10,
})
watch(
  () => listQuery.pageIndex,
  (val) => {
    let pageOptions = props.pageOptions
    pageOptions.pageIndex = val
  }
)
const search = reactive<ListQuery>((props.pageOptions && deepClone(props.pageOptions)) || {})
const filterVisible = ref(true)
const loading = ref(false)
const fetchData = async (opt?: FetchDataOpt) => {
  if (props.fetchData) {
    if (!(opt && opt.showLoading == false)) {
      loading.value = true
    }
    const optQuery = (opt && opt.query) || {}
    const params: Fields = {
      ...listQuery,
      ...props.pageOptions,
      ...search,
      ...optQuery,
    }
    const { total, ...options } = params
    await props.fetchData({ listQuery: options }).finally(() => {
      loading.value = false
    })
  }
}
// 总数量由外面决定
const total = computed(() => props.pageOptions.total || props.data.length || 0)
// 搜索
const onSearch = (params?: ListQuery) => {
  if (params) {
    for (let i in params) {
      search[i] = params[i]
    }
  }

  fetchData()
}
const sTableFilter: Ref<any> = ref()
const onItemChange = (prop: string, value: string) => {
  sTableFilter.value.setItem(prop)
  search[prop] = value
  onSearch()
}
fetchData()
// 组装columns
const { columns, selectParams } = useColumnHook(props)

// 菜单点击事件
const onMenuOption = (option: string, val: string) => {
  switch (option) {
    case "refresh":
      fetchData()
      break
    case "searchToggle":
      filterVisible.value = !filterVisible.value
      break
    case "size": {
      if (val) {
        tableAttrs.value.size = val
      }
      break
    }
    case "export": {
      import("../utils/Export2Excel").then((excel) => {
        const getTableValue = (val: string | number, schema: ColumnItem) => {
          if (schema.options) {
            const cur = schema.options.find((a) => a.value == val)
            return (cur && cur.label) || val
          }
          return val
        }
        excel.export_json_to_excel({
          header: columns.value.map((a) => a.label),
          data: list.value.map((a) => columns.value.map((b) => getTableValue(a[b.prop], b))),
          filename: props.option.excelTitle || "导出数据",
        })
        ElMessage.success("导出成功!")
      })
      break
    }
  }
}

// 添加/编辑
const create = (row?: any) => {
  const formSchema: FormSchema = {
    formItem: [],
    rules: {},
    labelWidth: "110px",
  }
  const setItem = (a: ColumnItem) => {
    if (!a.form) return
    const { rules, ...formProps } = a.form
    const item: FormItem = {
      span: 24,
      label: a.label,
      prop: a.prop,
      options: a.options,
      ...formProps,
    }
    formSchema.formItem.push(item)
    if (a.form && a.form.rules) {
      if (!formSchema.rules) formSchema.rules = {}
      formSchema.rules[a.prop] = rules
    }
  }
  columns.value.map((a) => {
    if (a.children && a.children.length) {
      for (let i in a.children) {
        a.children[i].form && setItem(a.children[i])
      }
    } else {
      a.form && setItem(a)
    }
  })
  FormDialog.show({
    title: row ? "编辑" : "添加",
    formSchema: formSchema,
    fields: row,
    handleOk: async (modelRef: Fields) => {
      const fun = row ? "fetchEdit" : "fetchCreate"
      return await (props[fun] && props[fun](modelRef, row))
    },
  })
}
const instance = getCurrentInstance()
const startremove = (scope: any) => {
  ElMessageBox.confirm("确认删除当前数据吗", "提示", {
    type: "warning",
    cancelButtonText: "取消",
    confirmButtonText: "确定",
  }).then(async () => {
    const loading = ElLoading.service({ fullscreen: true })
    await (props.fetchRemove && props.fetchRemove(scope.row, scope.$index)).finally(() => {
      loading.close()
    })
    ElMessage({
      type: "success",
      message: "删除成功",
    })
  })
}
const pageChange = () => {
  fetchData()
}
// 详情
const STableDetailRef = ref()
const detail = (row: any) => {
  STableDetailRef.value.open({ data: row, columns: columns.value })
}
// 行点击事件
const onRowClick = (row: any) => {
  if (instance && typeof instance.attrs["click-row-to-view"] !== "undefined") {
    detail(row)
  }
  emits("row-click", row)
}
// 多选事件
const selectionChange = (rows: any) => {
  emits("selectionChange", rows)
}
const tableRef = ref<any>()
const toggleRowSelection = (row: any) => {
  setTimeout(() => {
    tableRef.value.toggleRowSelection(row)
  })
}
defineExpose({ fetchData, tableRef, toggleRowSelection })
</script>
<style lang="scss">
.table-container {
  .el-table {
    --el-table-header-bg-color: #f0f2f5;
    --el-table-header-text-color: #575d6c;
    --el-table-text-color: #252b3a;
    --el-table-border-color: #e3e9f1;
    .cell {
      // padding: 0 6px;
    }

    tbody {
      .el-table__cell {
        padding: 9px 0;
      }
    }
    &.el-table--medium {
      tbody {
        .el-table__cell {
          padding: 12px 0;
        }
      }
    }
    &.el-table--small {
      tbody {
        .el-table__cell {
          padding: 4px 0;
        }
      }
      .el-button {
        font-size: 12px;
      }
    }
  }
  .pagination {
    margin: 15px 0;
    justify-content: end;
    font-weight: normal;
  }
  .table-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .s-table-filter {
    margin-bottom: 10px;
    margin-left: -20px;
    margin-right: -20px;
    padding: 0 20px 5px;
    border-bottom: 10px solid var(--body-bg);
    .el-form--inline {
      .el-form-item {
        margin-right: 15px;
      }
    }
  }
  .el-button + .dropdown-item {
    margin-left: 10px;
  }
}
</style>
