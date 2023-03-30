import { defineStore } from 'pinia';

import type { UiStore } from '@/common/interfaces';

export const useUiStore = defineStore('ui', {
    state: () => ({
        mode: 'show',
    }) as UiStore,
    getters: {},
    actions: {},
});
