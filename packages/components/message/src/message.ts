import type { IMessageOptions } from './message.type';
import message from './message.vue';
import { createVNode, render } from 'vue';
export default function Message(options: IMessageOptions) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const vm = createVNode(message);
  const container = document.createElement('div');

  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
}
