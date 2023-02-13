/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-13 17:17:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-13 17:17:20
 */
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TassButton: typeof import('@tass-ui/components').TassButton;
    TassInput: typeof import('@tass-ui/components').TassInput;
    TassUpload: typeof import('@tass-ui/components').TassUpload;
  }
}
export {};
