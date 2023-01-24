/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-24 13:40:26
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-24 13:51:36
 */
import type { ComponentInternalInstance } from 'vue';
import { computed, getCurrentInstance } from 'vue';
import type { checkBoxProps } from '@echo-ui/components/checkbox/src/checkbox.type';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@echo-ui/constants';
function useModel(props: checkBoxProps) {
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  const model = computed({
    get() {
      return props?.modelValue;
    },
    set(val: any) {
      // Wait Change I don't know how to do it~
      emit(UPDATE_MODEL_EVENT, val);
    }
  });
  return model;
}
function useCheckbox(model) {
  const isChecked = computed(() => {
    const val = model.value;

    return val;
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
  const isChecked = useCheckbox(model);
  const handlerChange = useEvent();
  return {
    model,
    isChecked,
    handlerChange
  };
};
