import { defineStore } from 'pinia';

import type { NotesStore } from '@/common/interfaces';

export const useNotesStore = defineStore('notes', {
	state: () => ({
		history: [],
		selectIndex: 0,
	}) as NotesStore,
	getters: {
		isFirstHistoryNote: (state) => state.selectIndex === 0,
		isLastHistoryNote: (state) => state.selectIndex === state.history.length - 1,
	},
	actions: {
		toPrevNote() {
			if (this.selectIndex !== 0) {
				this.selectIndex -= 1;
			}
		},

		toNextNote() {
			this.selectIndex += 1;
		},

		addNoteToHistory(id: string) {
			this.history.push(id);
			this.selectIndex = this.history.length - 1;
		},
	},
});
