## 基础用法

```vue
<template>
<CurdTable :data="data" :columns="columns" :page-options="pageOptions" index selection click-row-to-view :fetch-data="fetchData" :fetch-create="fetchCreate" :fetch-edit="fetchEdit" :fetch-remove="fetchRemove" @selectionChange="selectionChange" />
</template>
<script>
const columns = [
{
    label: "用户",
    children: [
    {
        label: "姓名",
        prop: "name",
        width: 140,
        filter: {
        component: "input",
        },
        form: {
        rules: [
            {
            required: true,
            trigger: "blur",
            message: "请输入用户姓名",
            },
        ],
        },
    },
    {
        label: "登录账号",
        prop: "account",
        width: 120,
        filter: {
        component: "input",
        },
        form: {
        rules: [
            {
            required: true,
            trigger: "blur",
            message: "请输入登录账号",
            },
        ],
        },
    },
    ],
},

{
    label: "手机号",
    prop: "phone",
    width: 130,
    filter: {
    component: "input",
    },
    sortable: true,
    form: {
    component: "input",
    rules: [
        {
        required: true,
        trigger: "blur",
        message: "请输入手机号",
        },
        {
        len: 11,
        message: "请输入正确的手机号码",
        trigger: "blur",
        },
    ],
    },
},
{
    label: "邮箱",
    prop: "email",
    width: 200,
    form: {
    component: "input",
    rules: [
        {
        required: true,
        message: "请输入邮箱",
        trigger: "blur",
        },
        {
        type: "email",
        message: "请填写正确的邮箱",
        trigger: "blur",
        },
    ],
    },
},
{
    label: "角色",
    prop: "role",
    width: 120,
    align: "center",
    options: [
    { label: "超级管理员", value: 1 },
    { label: "普通管理员", value: 2 },
    ],
    form: {
    component: "select",
    rules: [
        {
        required: true,
        trigger: "change",
        message: "请选择用户角色",
        },
    ],
    value: 1,
    },
},
{
    label: "性别",
    prop: "gender",
    width: 100,
    align: "center",
    options: [
    { label: "男", value: 1 },
    { label: "女", value: 2 },
    ],
    form: {
    component: "radio",
    value: 1,
    },
},
{
    label: "状态",
    prop: "status",
    align: "center",
    options: [
        { value: 1, label: "启用", className: "color-green", icon: "circle-check" },
        { value: 2, label: "禁用", className: "color-red", icon: "remove" },
    ],
    filter: {
    component: "select",
    },
    form: {
    component: "radio",
    value: 1,
    },
},
{
    label: "创建时间",
    prop: "createTime",
    width: 170,
    form: {
    component: "date-picker",
    props: {
        format: "YYYY/MM/DD",
        valueFormat: "YYYY/MM/DD",
    },
    hidden: (form) => !form.id,
    },
},
{
    label: "ID",
    prop: "id",
    width: 120,
    form: {
    component: "input",
    props: {
        disabled: true,
    },
    hidden: (form) => !form.id,
    },
},
{
    label: "个人介绍",
    prop: "desc",
    width: 140,
    showOverflowTooltip: true,
    form: {
    component: "input",
    props: {
        type: "textarea",
        rows: 6,
    },
    span: 24,
    },
},
]
export default {
  components: {  },
  data() {
    return {
      pageOptions: {
        total: 0,
        pageSize: 10,
      },
      data: [],
      columns: columns,
    }
  },
  methods: {
    fetchData({ pageIndex, pageSize, sortColumn, sortType, search }) {
      return new Promise((resolve) => {
        const params = {
          pageIndex,
          pageSize,
          ...search,
        }

        if (sortColumn) {
          params.sortColumn = sortColumn
          params.sortType = sortType
        }
        console.log("params", params)
        Promise.resolve().then((res) => {
          this.data = [
          {
            name: "张三",
            account: "ttt",
            phone: "13555555555",
            email: "admin@admin.com",
            role: 1,
            status: 1,
            desc: "无父无母的两个孩子，就这样顽强生活在长城之畔的镇子上。少年带着弟弟，以作零工为生。关市开启是人们最快活的日子，四面八方的商人和货物汇集着。少年穿梭其中，眼明手快，笑脸迎人，商人们也乐意关照",
          },
          {
            name: "张三1",
            role: 2,
            status: 2,
          }]// 数据赋值
          this.pageOptions.total = 2 // 设置总页数
          resolve()
        })
      })
    },
    fetchCreate(params) {
      console.log("params", params)
      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    fetchEdit(editedParams, fullParams) {
      console.log("editedParams", editedParams)
      editedParams.id = fullParams.id
      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    fetchRemove(row) {
      //   const data = {
      //     id: row.id,
      //   }

      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve(row)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    selectionChange(rows) {
      console.log("row", rows)
    },
  },
}
</script>
```