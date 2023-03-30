import { defineStore } from 'pinia';

import type { ISidebarElement } from '@/common/interfaces';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		folderExpanded: false,
		list: [
			{
				id: '1',
				name: 'Example',
				content: 'Example text - is example text.',
			},
			{
				id: '2',
				name: 'index',
				content: 'Root note ...',
			},
			{
				id: '3',
				name: 'Алгоритм Дейкстры',
				content: 'https://habr.com/ru/company/otus/blog/599621/',
			},
			{
				id: '4',
				name: 'Вавилонская библиотека',
				content: '...',
			},
			{
				id: '5',
				name: 'Миоклоническая судорога',
				content: '',
			},
			{
				id: '6',
				name: 'WebDev',
				collection: [
					{
						id: '7',
						name: 'HTML',
						content: 'is language',
					},
					{
						id: '8',
						name: 'SCSS',
						content: 'is preprocessor',
					},
					{
						id: '9',
						name: 'JS',
						collection: [
							{
								id: '10',
								name: 'Vue',
								content: 'is js framework',
							},
							{
								id: '11',
								name: 'React',
								content: 'is js library',
							},
							{
								id: '12',
								name: 'Svelte',
								content: 'is js framework',
							},
						],
					},
				],
			},
		] as Array<ISidebarElement | null>,
	}),
	getters: {
		getFolderExpanded: (state) => state.folderExpanded,
	},
	actions: {
		createNote() {
			console.log('createNote');
		},

		createFolder() {
			console.log('createFolder');
		},

		expandFolders() {
			this.folderExpanded = true;
		},

		collapseFolders() {
			this.folderExpanded = false;
		},
	},
});
