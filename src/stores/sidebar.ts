import { defineStore } from 'pinia';

import type { Note } from '@/common/types/note';
import type { Folder } from '@/common/types/folder';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		list: [
			{
				id: '1',
				name: 'Example',
			},
			{
				id: '2',
				name: 'index',
			},
			{
				id: '3',
				name: 'Алгоритм Дейкстры',
			},
			{
				id: '4',
				name: 'Вавилонская библиотека',
			},
			{
				id: '5',
				name: 'Миоклоническая судорога',
				isActive: true,
			},
			{
				id: '6',
				name: 'WebDev',
				collection: [
					{
						id: '7',
						name: 'HTML',
					},
					{
						id: '8',
						name: 'SCSS',
					},
					{
						id: '9',
						name: 'JS',
						collection: [
							{
								id: '10',
								name: 'Vue',
							},
							{
								id: '11',
								name: 'React',
							},
							{
								id: '12',
								name: 'Svelte',
							},
						],
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
