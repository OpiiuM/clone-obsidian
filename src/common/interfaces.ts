import type { Note, Mode } from './types';

export interface INote {
	id: string,
	name: string,
	tags?: string[],
	content?: string,
}

export interface ISidebarElement extends INote {
	collection?: Note[],
	parent?: string,
}

export interface NotesStore {
	history: string[],
}

export interface UiStore {
	mode: Mode,
}
