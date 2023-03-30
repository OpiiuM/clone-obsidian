import type { Note, Mode } from './types';

export interface INote {
	id: number | string,
	name: string,
	tags?: string[],
	content: string,
}

export interface ISidebarElement extends INote {
	collection?: Note[] | [],
}

export interface NotesStore {
	history: Note[],
}

export interface UiStore {
	mode: Mode,
}
