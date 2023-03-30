export type Mode = 'edit' | 'show';

export type Note = {
	id: number | string,
	name: string,
	tags?: string[],
	content?: string,
}
