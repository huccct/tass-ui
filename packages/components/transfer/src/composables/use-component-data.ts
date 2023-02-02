/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 11:40:08
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-25 20:07:21
 */
import { computed } from 'vue';
export const useComponentData = props => {
  const propKey = computed(() => props.props.key);
  const data = computed(() => {
    return props.data.reduce((memo, current) => {
      memo[current[propKey.value]] = current;
      return memo;
    }, {});
  });

  const sourceData = computed(() => {
    return props.data.filter(item => !props.modelValue.includes(item[propKey.value]));
  });

  const targetData = computed(() => {
    return props.data.filter(item => props.modelValue.includes(item[propKey.value]));
  });

  return {
    propKey,
    sourceData,
    targetData
  };
};
