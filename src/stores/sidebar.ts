import { defineStore } from 'pinia';

import type { ISidebarElement } from '@/common/interfaces';
import { useGenerateId } from '@/common/composables/generateId';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		folderExpanded: false,
		list: [] as Array<ISidebarElement | null>,
	}),
	getters: {
		getFolderExpanded: (state) => state.folderExpanded,
		getGroups: (state) => state.list.filter((el) => el?.collection),
		getNoteById: (state) => (id: string) => state.list.find((el) => el?.id === id),
	},
	actions: {
		createNote(noteData: ISidebarElement) {
			noteData.id = useGenerateId(this.list);
			this.list.push(noteData);
		},

		createFolder(folderData: ISidebarElement) {
			folderData.id = useGenerateId(this.list);
			folderData.collection = [];
			this.list.push(folderData);
		},

		expandFolders() {
			this.folderExpanded = true;
		},

		collapseFolders() {
			this.folderExpanded = false;
		},
	},
});
