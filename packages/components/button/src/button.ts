/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:57:34
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-22 21:16:04
 */
/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:57:34
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 12:05:02
 */
import { ExtractPropTypes, PropType } from 'vue';
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(
        value
      );
    },
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType) {
      return (['default', 'medium', 'small', 'mini', 'tiny'] as const).includes(value);
    },
  },
  plain: {
    type: Boolean,
    default: (): Boolean => false,
  },
  round: {
    type: Boolean,
    default: (): Boolean => false,
  },
  circle: {
    type: Boolean,
    default: (): Boolean => false,
  },
  loading: {
    type: Boolean,
    default: (): Boolean => false,
  },
  disabled: {
    type: Boolean,
    default: (): Boolean => false,
  },
  icon: {
    type: String,
    default: (): String => '',
  },
  autoFocus: {
    type: Boolean,
    default: (): Boolean => false,
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value) {
      return (['button', 'submit', 'reset'] as const).includes(value);
    },
  },
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt,
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
