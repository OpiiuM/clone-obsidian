import { defineStore } from 'pinia';
import type { INotes } from '@/common/interfaces/store/notes';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        history: [],
    }) as INotes,
    getters: {},
    actions: {
        toPrevNote() {
            console.log('toPrevNote');
        },

        toNextNote() {
            console.log('toNextNote');
        },
    },
});
