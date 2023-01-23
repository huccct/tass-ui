/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 15:46:01
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 18:41:33
 */
import { computed, defineComponent, h } from 'vue';

export default defineComponent({
  name: 'EchoCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const Class = computed(() => {
      let res: string[] = [];
      const pops = ['span', 'offset'] as const;
      pops.forEach(item => {
        const size = props[item];

        if (typeof size === 'number' && size > 0) {
          res.push(`ec-col-${item}-${size}`);
        }
      });
      return ['ec-col', ...res];
    });
    return () =>
      h(
        props.tag,
        {
          class: Class.value,
        },
        ctx.slots.default?.()
      );
  },
});
