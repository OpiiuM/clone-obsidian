import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({}),
    getters: {},
    actions: {
        createNote() {
            console.log('createNote');
        },

        createFolder() {
            console.log('createFolder');
        },

        expandFolders() {
            console.log('expandFolders');
        },

        collapseFolders() {
            console.log('collapseFolders');
        },
    },
});
