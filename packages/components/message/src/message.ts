/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:01:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-05 15:48:40
 */
import type { IMessageOptions } from './message.type';
import message from './message.vue';
import { createVNode, render } from 'vue';
const instance: any[] = [];
let count = 0;
export default function Message(options: IMessageOptions) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  count = count + 1;
  let offset = options.offset || 20;
  let userClose = options.onclose;
  offset = 20 + (count - 1) * 50;

  let props = {
    ...options,
    offset,
    onclose: () => {
      userClose && userClose();
    },
    onDestroy: () => {
      cutCount();
      instance.pop();
      render(null, container);
    }
  };
  const vm = createVNode(message, props);
  const container = document.createElement('div');

  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
  instance.push(vm);
  const cutCount = () => {
    count = count - 1; // 就把外界统计的数量减少一个
    let messageBoxDomList = document.querySelectorAll('.tas-message'); // 然后选中所有的messageDOM元素

    for (let i = 0; i < messageBoxDomList.length; i++) {
      // 遍历一下这个DOM伪数组
      let dom = messageBoxDomList[i] as HTMLElement; // 所有的都往上移动60像素
      dom.style['top'] = parseInt(dom.style['top']) - 50 + 'px';
    }
  };
}
