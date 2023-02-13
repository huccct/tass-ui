/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 15:56:13
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\transfer\__tests__\transfer.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import transfer from '../src/transfer.vue';
// The component to test

describe('test transfer', () => {
  it('should render slot', () => {
    const wrapper = mount(transfer, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
  it('should have class', () => {
    const wrapper = mount(transfer, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('tas-transfer');
  });
});
