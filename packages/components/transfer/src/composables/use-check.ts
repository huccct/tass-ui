/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 13:04:28
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-03 23:13:25
 */
import type { ComponentInternalInstance } from 'vue';
import { computed, watch, getCurrentInstance } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { computed, watch, getCurrentInstance } from 'vue';
export const useCheck = (props, state) => {
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  const labelProps = computed(() => props.props.props.label);
  const keyProps = computed(() => props.props.props.key);
  const disabledProps = computed(() => props.props.props.disabled);

  const checkDisabled = computed(() => {
    return props.data.filter(item => !item[disabledProps.value]);
  });
  const handlerChange = val => {
    state.allCheck = val;
    state.checked = val
      ? checkDisabled.value.map(item => {
          return item[keyProps.value];
        })
      : [];
  };

  watch(
    () => state.checked,
    () => {
      const checkkeys = checkDisabled.value.map(item => item[keyProps.value]);
      state.allCheck =
        checkkeys.length > 0 &&
        checkkeys.every(key => state.checked.includes(key));
      emit('checkChange', state.checked);
    }
  );
  watch(
    () => props.data,
    () => {
      state.allCheck = false;
    }
  );
  return {
    labelProps,
    keyProps,
    disabledProps,
    handlerChange
  };
};
