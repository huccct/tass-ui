/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-22 16:51:31
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-06 14:15:27
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../src/button.vue';
// The component to test

describe('test Button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world');
  });
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('tas-button--primary');
  });
});
