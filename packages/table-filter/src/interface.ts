export interface ParamsItem {
  type: typeEunm;
  label: string;
  prop: string;
  options?: Array<OptionItem>;
  tableKey?: Array<string>;
  asyncOptions?: (param: string) => Promise<any>;
  external?: boolean;
  all?: boolean;
  tagNames?: string;
  props?: ParamsItemProps;
}
export interface ParamsItemProps {
  [key: string]: string | boolean | number;
}
// export interface ParamsItemInner extends ParamsItem {
//   tagsType?: string
//   tagNames?: string
// }
export type typeEunm = "select" | "checkbox" | "time" | "input";
type IDatePickerType =
  | "year"
  | "month"
  | "date"
  | "dates"
  | "week"
  | "datetime"
  | "datetimerange"
  | "daterange"
  | "monthrange";
export interface OptionItem {
  value: string | boolean | number;
  label: string;
}
export interface TeleportStyle {
  top?: string;
  left?: string;
  display?: string;
}

export interface ListQuery {
  [key: string]: any; //string | boolean | number | Array<string> | Array<number>
}
export interface Setting {
  inputModel?: string | boolean | number;
  currentIndex?: number;
  typeModel?: string | boolean | number;
  typeShow?: boolean;
  listShow?: boolean;
}
