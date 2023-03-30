import { defineStore } from 'pinia';

import type { NotesStore } from '@/common/interfaces';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        history: [],
    }) as NotesStore,
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
