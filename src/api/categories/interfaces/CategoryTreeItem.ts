export interface CategoryTreeItem {
    id: number
    parent: number
    name: string
    isTag: boolean
    url: string
    tags?: CategoryTreeItem[]
    subcategories?: CategoryTreeItem[]
}
