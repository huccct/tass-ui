/*
 * @Author: 申恒杰
 * @Date: 2023-02-01 21:33:37
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\switch\__tests__\switch.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import switchtest from '../src/switch.vue';
// The component to test

describe('test switch', () => {
  
  it('create', () => {
    const props = {
      activeText: 'on',
      inactiveText: 'off',
      activeColor: '#0f0',
      inactiveColor: '#f00',
      width: 100,
    }
    const wrapper = mount(switchtest)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-checked')).false
    const switchinput = vm.$el.querySelector('.tas-switch-input')
    const formswitch = wrapper.find('.tas-form-switch')
    expect(switchinput).toContain(vm.$el.querySelector('.tas-switch-input'));
  })

  it('should render slot', () => {
    const wrapper = mount(switchtest, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(switchtest);
      expect(wrapper.classes()).toContain('tas-switch');
    });
    });
    
});
