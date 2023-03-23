import { defineStore } from 'pinia';
import type { IUi } from '@/common/interfaces/store/ui';

export const useUiStore = defineStore('ui', {
    state: () => ({
        mode: 'show',
    }) as IUi,
    getters: {},
    actions: {},
});
