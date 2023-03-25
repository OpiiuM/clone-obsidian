export type Note = {
    id: string | number,
    name: string,
    content?: string,
    isActive?: boolean, // TODO: remove
    tags?: string[],
}
