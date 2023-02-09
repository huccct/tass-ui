/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:01:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-09 15:16:03
 */
import { MessagePropsTypes, MessageParams, messageTypes, MessageFn, Message } from './message';
import MessageConstructor from './message.vue';
import { AppContext, createVNode, render, isVNode, VNode, ComponentPublicInstance } from 'vue';
import { isString, isFunction } from '@tass-ui/utils/common';
let seed = 1;
let instances: VNode[] = [];
let zIndex = 2000;
const message: MessageFn & Partial<Message> = function (
  options: MessageParams = {},
  context?: AppContext | null
) {
  if (isString(options) || isVNode(options)) {
    options = { message: options } as MessageParams;
  }
  const id = `message_${seed++}`;
  let offset = 20;
  instances.forEach(v => {
    offset += v.el?.offsetHeight + 16;
  });

  const userOnClose = options.onClose;

  const props: Partial<MessagePropsTypes> = {
    ...options,
    zIndex: zIndex++,
    id,
    offset,
    onClose: () => {
      close(id, userOnClose);
    }
  };

  const messageContent = props.message;
  const vm = createVNode(
    MessageConstructor,
    props,
    isFunction(messageContent)
      ? { default: messageContent }
      : isVNode(messageContent)
      ? { default: () => messageContent }
      : null
  );

  vm.props!.onDestroy = () => {
    render(null, container);
  };

  const container = document.createElement('div');

  render(vm, container);

  let appendTo: HTMLElement | null = document.body;

  if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  } else if (options.appendTo && options.appendTo instanceof Element) {
    appendTo = options.appendTo;
  }

  appendTo!.appendChild(container.firstElementChild!);
  instances.push(vm);

  return {
    close: () =>
      ((vm.component!.proxy as ComponentPublicInstance<{ visible: boolean }>).visible = false)
  };
};

messageTypes.forEach(type => {
  (message as any)[type] = (options: MessageParams = {}, appContext?: AppContext | null) => {
    if (isString(options) || isVNode(options)) {
      options = { message: options } as MessageParams;
    }
    message({ ...options, type }, appContext);
  };
});

function close(id: string, userClose?: (vm: VNode) => void) {
  const idx = instances.findIndex(vm => vm.props!.id === id);
  if (idx === -1) return;
  const vm = instances[idx];
  userClose && userClose(vm);
  instances.splice(idx, 1);
  const removeHeight = vm.el!.offsetHeight;

  for (let i = idx; i < instances.length; i++) {
    const pos = parseInt(instances[i].el?.style.top) - removeHeight + -16;

    instances[i].component!.props.offset = pos;
  }
}

export function closeAll() {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].component;
    (instance?.proxy as any).close();
  }
}

message.closeAll = closeAll;
export default message as Message;
