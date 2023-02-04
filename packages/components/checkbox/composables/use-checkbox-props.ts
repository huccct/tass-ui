/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-24 13:40:26
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-24 13:51:36
 */
import type { ComponentInternalInstance } from 'vue';
import { inject } from 'vue';
import { computed, getCurrentInstance } from 'vue';
import type {
  checkBoxProps,
  T
} from '@echo-ui/components/checkbox/src/checkbox.type';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@echo-ui/constants';
function useModel(props: checkBoxProps) {
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  const useProvide = inject<T>('EchoCheckboxGroup', {});
  const model = computed({
    get() {
      return useProvide.modelValue
        ? useProvide.modelValue.value
        : props.modelValue;
    },
    set(val: unknown) {
      if (useProvide.modelValue) {
        return useProvide.handlerChange?.(val);
      }
      emit(UPDATE_MODEL_EVENT, val);
    }
  });
  return model;
}
function useCheckbox(props: checkBoxProps, model) {
  const isChecked = computed<boolean>(() => {
    const value = model.value;
    if (Array.isArray(value)) {
      return value.includes(props.label);
    } else {
      return value;
    }
  });
  return isChecked;
}

function useEvent() {
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  function handlerChange(e) {
    const target = e.target;
    const val = target.checked ? true : false;
    emit(CHANGE_EVENT, val);
  }
  return handlerChange;
}
export const useCheckBoxProps = (props: checkBoxProps) => {
  const model = useModel(props);
  const isChecked = useCheckbox(props, model);
  const handlerChange = useEvent();
  return {
    model,
    isChecked,
    handlerChange
  };
};
