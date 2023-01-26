/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:01:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-26 14:32:38
 */
import type { IMessageOptions } from './message.type';
import message from './message.vue';
import { createVNode, render } from 'vue';
let instance: any[] = [];
export default function Message(options: IMessageOptions) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let offset = options.offset || 20;
  instance.forEach(() => {
    offset += 60;
  });
  let userClose = options.onclose;
  let ops = {
    ...options,
    offset,
    onclose: () => {
      userClose && userClose();
    }
  };
  const vm = createVNode(message, ops);
  const container = document.createElement('div');
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
  instance.push(vm);
}
