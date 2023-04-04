import type { ISidebarElement } from '@/common/interfaces';

export function useGenerateId(list: ISidebarElement[]) {
    let id = list.reduce((acc: number, item: ISidebarElement) => {
        return Math.max(acc, item.id);
    }, 0);

    return String(++id);
}
