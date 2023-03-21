export type Note = {
    id: string | number,
    title: string,
    content?: string,
    isActive?: boolean, // TODO: remove
    tags?: string[],
}
