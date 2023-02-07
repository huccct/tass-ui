/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-07 12:44:17
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-07 12:44:24
 */
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TassButton: typeof import('tass-ui').Button;
    TassInput: typeof import('tass-ui').Input;
    TassUpload: typeof import('tass-ui').Upload;
  }
}
export {};
