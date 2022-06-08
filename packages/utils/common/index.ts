/**
 * @description     对象深拷贝
 *
 * @param       { source:Object }         source为需要拷贝的源对象
 * @return      { Object }                返回拷贝后的新的对象
 *
 * */
export function deepClone<T extends Array<T> | any>(sourceData: T): T {
  if (Array.isArray(sourceData)) {
    return sourceData.map((item) => deepClone(item)) as T
  }
  if (typeof sourceData !== "object" || sourceData === null || sourceData instanceof Date || sourceData instanceof File || sourceData instanceof Symbol) {
    return sourceData
  }
  const obj: T = {} as T
  for (let key in sourceData) {
    if ((typeof sourceData[key] === "object" || sourceData[key] instanceof Date || sourceData[key] instanceof File) && sourceData[key] !== null) {
      obj[key] = deepClone(sourceData[key])
    } else {
      obj[key] = sourceData[key]
    }
  }
  return obj
}

/**
 * 获取一个dom节点的绝对定位，相对于整个document
 */
export function getPosition(dom: HTMLElement) {
  let t = dom.offsetTop,
    l = dom.offsetLeft
  let obj: HTMLElement = dom
  //从目标元素开始向外遍历，累加top和left值
  while (obj.offsetParent) {
    obj = obj.offsetParent as HTMLElement
    t += obj.offsetTop
    l += obj.offsetLeft
  }
  return {
    left: l,
    top: t,
  }
}

/**
 * 金额过滤器，千分位
 */
export function amount(num: number, digit = 2) {
  if (typeof num === "undefined") {
    return "--"
  }
  if (!num) {
    return "0." + new Array(digit).fill("0").join("")
  }
  let numStr = parseFloat(num + "").toFixed(digit) //-0.0005返回仍然是-0.00
  const parts = numStr.toString().split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  if (numStr == "-0" || numStr == "-0.00") {
    parts[0] = "0"
  }
  return parts.join(".")
}

/**
 * 复制
 */
export function copy(value: string) {
  const oInput = document.createElement("input")
  // input框的内容复制
  oInput.value = value
  document.body.appendChild(oInput)
  // 选中
  oInput.select() // 选择对象;
  // 调 自带的Copy方法
  document.execCommand("Copy") // 执行浏览器复制命令
  // 复制成功后 移出 input节点
  // oInput.remove()
  document.body.removeChild(oInput)
}

/**
 *
 * @param discount 折扣值
 * @example 0.8 为8折
 */
export function discount(discount: number = 0) {
  if (typeof discount == "undefined") return "--"
  if (isNaN(discount)) return "--"
  const disStr = discount.toString()
  const digMatch = disStr.match(/\.[\d]+/)
  let len = 1
  if (digMatch) {
    len = digMatch[0].replace(".", "").replace(/[0]+$/, "").length
  }
  const result = +parseFloat(String(discount * 10)).toFixed(len - 1)
  return 10 - result == 0 ? "无折扣" : result + "折"
}

/**
 *
 * @param discountDecimals 折扣值
 * @example 8 为0.8折
 */
export function discountDecimals(discount: number = 0) {
  const disStr = discount.toString()
  const digMatch = disStr.match(/\.[\d]+/)
  let len = 1
  if (digMatch) {
    len = digMatch[0].replace(".", "").replace(/[0]+$/, "").length + 1
  }
  const result = (discount / 10).toFixed(len)
  return parseFloat(result)
}

/**
 *
 * @param discount 折扣值Off
 * @example 0.8 为20% Off
 */
export function discountOff(discount: number = 0) {
  const disStr = discount.toString()
  const digMatch = disStr.match(/\.[\d]+/)
  let len = 1
  if (digMatch) {
    len = digMatch[0].replace(".", "").replace(/[0]+$/, "").length
  }
  return parseFloat(String(100 - 100 * discount)).toFixed(len <= 2 ? 0 : len - 2) + "%"
}

/**
 * 处理数字的精度问题 大于2位小数才处理精度
 * @param amount
 */
export function amountAccuracy(amount: number): number {
  const s = amount.toString()
  const digits = s.split(".")
  if (digits.length > 1 && digits[1].length > 2) {
    return parseFloat(amount.toFixed(2))
  }
  return amount
}
