import { defineStore } from 'pinia';

import type { Note } from '@/common/types/note';
import type { Folder } from '@/common/types/folder';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		list: [
			{
				id: '1',
				title: 'Example',
			},
			{
				id: '2',
				title: 'index',
			},
			{
				id: '3',
				title: 'Алгоритм Дейкстры',
			},
			{
				id: '4',
				title: 'Вавилонская библиотека',
			},
			{
				id: '5',
				title: 'Миоклоническая судорога',
				isActive: true,
			},
			{
				id: '6',
				name: 'WebDev',
				collection: [
					{
						id: '7',
						title: 'HTML',
					},
					{
						id: '8',
						title: 'SCSS',
					},
					{
						id: '9',
						title: 'JS',
					},
					{
						id: '10',
						title: 'Vue',
					},
				],
			},
		] as Array<Note | Folder | null>,
	}),
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
