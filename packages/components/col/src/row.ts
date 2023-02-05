/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 15:46:05
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-05 15:07:53
 */
import { computed, defineComponent, h, provide } from 'vue';

export default defineComponent({
  name: 'TassRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup(props, ctx) {
    provide('TassRow', props.gutter);
    const Class = computed(() => [
      'tas-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    ]);
    const styles = computed(() => {
      const res = {
        marginLeft: '',
        marginRight: ''
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
          style: styles.value
        },
        ctx.slots.default?.()
      );
  }
});
