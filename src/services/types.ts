export interface List {
  list: {value: string, code: string}[]
}

export interface Category {
  id: number | null,
  name: List
}

export interface ListItem {
  value: string
}