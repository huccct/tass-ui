/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:01:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-03 23:12:54
 */
import type { IMessageOptions } from './message.type';
import message from './message.vue';
import { createVNode, render } from 'vue';
const instance: any[] = [];
let count = 0;
export default function Message(options: IMessageOptions) {
  count++;
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
    count--;
    instance.pop();
    render(null, container);
  };
  console.log(count);

  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
  instance.push(vm);
}
