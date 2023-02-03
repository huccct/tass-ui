/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 11:21:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-25 20:04:03
 */
export type key = string | number;
export interface IData {
  key: key;
  label: string;
  disabled: boolean;
}
export interface Props {
  key: string;
  label: string;
  disabled: string;
}
export interface ItransferProps {
  data: IData[];
  modelValue: key[];
  props: Props;
}
