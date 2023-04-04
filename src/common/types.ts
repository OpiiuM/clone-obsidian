export type Mode = 'edit' | 'show';

export type Note = {
	id: string,
	name: string,
	tags?: string[],
	content?: string,
}

export type FormData = {
	[attr: string]: string,
}
