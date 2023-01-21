/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:58:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 11:58:14
 */
import type { ButtonHTMLAttributes } from 'vue';

export type ButtonSizeType = 'default' | 'medium' | 'small' | 'mini' | 'tiny';

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;
