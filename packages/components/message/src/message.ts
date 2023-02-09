/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-08 23:09:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-09 15:29:20
 */
import { PropType, VNode, ExtractPropTypes, AppContext } from 'vue';
export const messageTypes = ['success', 'info', 'warning', 'error'] as const;
export const MessageProps = {
  duration: {
    type: Number,
    default: 3000
  },
  message: {
    type: [String, Object, Function] as PropType<string | VNode | (() => VNode)>
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  onClose: {
    type: Function,
    required: false
  },
  closeable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: 'info'
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 1
  },
  center: {
    type: Boolean,
    default: true
  }
};

export interface MessageHandle {
  close: () => void;
}
export type MessageFn = ((
  options?: MessageParams,
  appContext?: null | AppContext
) => MessageHandle) & {
  closeAll(): void;
};
export type MessagePropsTypes = ExtractPropTypes<typeof MessageProps>;
export type MessageParams = Partial<MessagePropsTypes> | string | VNode | any;
export type MessageOptionsTyped = Omit<MessagePropsTypes, 'type'>;
export type MessageParamsTyped = Partial<MessageOptionsTyped> | string | VNode;
export type MessageTypedFn = (
  options?: MessageParamsTyped,
  appContext?: null | AppContext
) => MessageHandle;
export interface Message extends MessageFn {
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}
