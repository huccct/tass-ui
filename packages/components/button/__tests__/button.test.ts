/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-22 16:51:31
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-06 13:27:44
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
});
