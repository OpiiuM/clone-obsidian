import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppIcon from '@/common/components/AppIcon.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AppIcon, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
