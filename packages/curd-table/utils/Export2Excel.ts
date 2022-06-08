/* eslint-disable */
import { saveAs } from "file-saver"
import * as XLSX from "xlsx"

function generateArray(table: HTMLElement) {
  var out = []
  var rows = table.querySelectorAll("tr")
  var ranges = []
  for (var R = 0; R < rows.length; ++R) {
    var outRow = []
    var row = rows[R]
    var columns = row.querySelectorAll("td")
    for (var C = 0; C < columns.length; ++C) {
      var cell = columns[C]
      var colspan = Number(cell.getAttribute("colspan"))
      var rowspan = Number(cell.getAttribute("rowspan"))
      var cellValue = cell.innerText

      //Skip ranges
      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null)
        }
      })

      //Handle Row Span
      if (rowspan || colspan) {
        rowspan = rowspan || 1
        colspan = colspan || 1
        ranges.push({
          s: {
            r: R,
            c: outRow.length,
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1,
          },
        })
      }

      //Handle Value
      outRow.push(cellValue !== "" ? +cellValue : null)

      //Handle Colspan
      if (colspan) for (var k = 0; k < Number(colspan) - 1; ++k) outRow.push(null)
    }
    out.push(outRow)
  }
  return [out, ranges]
}

function datenum(v: any, date1904?: any) {
  if (date1904) v += 1462
  var epoch = Date.parse(v)
  return (epoch - new Date(Date.UTC(1899, 11, 30)).getTime()) / (24 * 60 * 60 * 1000)
}

function sheet_from_array_of_arrays(data: any[]) {
  var ws: any = {}
  var range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  }
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      var cell: { v: any; t?: string; z?: any } = {
        v: data[R][C],
      }
      if (cell.v == null) continue
      var cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R,
      })

      if (typeof cell.v === "number") cell.t = "n"
      else if (typeof cell.v === "boolean") cell.t = "b"
      else if (cell.v instanceof Date) {
        cell.t = "n"
        cell.z = XLSX.SSF._table[14]
        cell.v = datenum(cell.v)
      } else cell.t = "s"

      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000) ws["!ref"] = XLSX.utils.encode_range(range)
  return ws
}

function s2ab(s: any) {
  var buf = new ArrayBuffer(s.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}

export function export_table_to_excel(id: string) {
  var theTable = document.getElementById(id)
  if (!theTable) {
    return
  }
  var oo = generateArray(theTable)
  var ranges = oo[1]

  /* original data */
  var data = oo[0]
  var ws_name = "SheetJS"

  var ws: any = sheet_from_array_of_arrays(data)

  /* add ranges to worksheet */
  // ws['!cols'] = ['apple', 'banan'];
  ws["!merges"] = ranges

  /* add worksheet to workbook */
  const wb: any = {
    SheetNames: [ws_name],
    Sheets: {},
  }
  wb.Sheets[ws_name] = ws

  var wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  })

  saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    "test.xlsx"
  )
}
interface ExportJsonToExcelParam {
  multiHeader?: string[]
  header?: string[]
  data: Array<any>
  filename?: string
  merges?: string[]
  autoWidth?: boolean
  bookType?: XLSX.BookType
}
export function export_json_to_excel({ multiHeader = [], header, data, filename, merges = [], autoWidth = true, bookType = "xlsx" }: ExportJsonToExcelParam): void {
  /* original data */
  filename = filename || "excel-list"
  data = [...data]
  data.unshift(header)

  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i])
  }

  var ws_name = "SheetJS"
  var ws: any = sheet_from_array_of_arrays(data)

  if (merges.length > 0) {
    if (!ws["!merges"]) ws["!merges"] = []
    merges.forEach((item) => {
      ws["!merges"].push(XLSX.utils.decode_range(item))
    })
  }

  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map((row) =>
      row.map((val: any) => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            wch: 10,
          }
        } else if (val.toString().charCodeAt(0) > 255) {
          /*再判断是否为中文*/
          return {
            wch: val.toString().length * 2,
          }
        } else {
          return {
            wch: val.toString().length,
          }
        }
      })
    )
    /*以第一行为初始值*/
    let result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]["wch"] < colWidth[i][j]["wch"]) {
          result[j]["wch"] = colWidth[i][j]["wch"]
        }
      }
    }
    ws["!cols"] = result
  }

  /* add worksheet to workbook */
  const wb: any = {
    SheetNames: [ws_name],
    Sheets: {},
  }
  wb.Sheets[ws_name] = ws

  var wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: "binary",
  })
  saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    `${filename}.${bookType}`
  )
}
