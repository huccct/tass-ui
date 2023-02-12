/**
 * @name: dropdwon.test.ts
 * @author: cxy
 * @date: 2023/2/12 17:43
 * @description：dropdwon.test.ts
 * @update: 2023/2/12 17:43
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import dropdown from '../src/dropdwon.vue';
// The component to test

describe('test dropdown', () => {
    it('should render slot', () => {
        const wrapper = mount(dropdown, {
            slots: {
                default: ''
            }
        });

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain('');
        it('should have class', () => {
            const wrapper = mount(dropdown);
            expect(wrapper.classes()).toContain('tas-dropdown');
        });
    });
});
