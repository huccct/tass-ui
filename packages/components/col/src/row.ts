/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 15:46:05
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 17:50:10
 */
import { computed, defineComponent, h } from 'vue';

export default defineComponent({
  name: 'EchoRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
  },
  setup(props, ctx) {
    const Class = computed(() => ['ec-row']);
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
