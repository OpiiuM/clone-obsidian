import { defineStore } from 'pinia';
import type { Notes } from '@/common/interfaces/store/notes';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        history: [],
    }) as Notes,
    getters: {},
    actions: {
        toPrevNote() {
            console.log('toPrevNote');
        },

        toNextNote() {
            console.log('toNextNote');
        },

        closeCurrentNote() {
            console.log('closeCurrentNote');
        },
    },
});
