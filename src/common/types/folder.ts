import type { Note } from './note';

export type Folder = {
    id: string | number,
    name: string,
    collection: Note[] | null,
}
