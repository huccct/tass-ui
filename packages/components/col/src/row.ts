/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 15:46:05
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 19:50:22
 */
import { computed, defineComponent, h, provide } from 'vue';

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
    provide('EchoRow', props.gutter);
    const Class = computed(() => [
      'ec-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : '',
    ]);
    const styles = computed(() => {
      let res = {
        marginLeft: '',
        marginRight: '',
      };
      if (props.gutter) {
        res.marginLeft = res.marginRight = `-${props.gutter / 2}px`;
      }
      return res;
    });
    return () =>
      h(
        props.tag,
        {
          class: Class.value,
          style: styles.value,
        },
        ctx.slots.default?.()
      );
  },
});
