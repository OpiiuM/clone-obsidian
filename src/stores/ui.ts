import { defineStore } from 'pinia';
import type { Ui } from '@/common/interfaces/store/ui';

export const useUiStore = defineStore('ui', {
    state: () => ({
        mode: 'show',
    }) as Ui,
    getters: {},
    actions: {},
});
