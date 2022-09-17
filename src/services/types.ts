export interface List {
  list: { value: string, code: string }[]
}

export interface TypeLang {
  id: number | null,
  name: {
    uz: string | null,
    ru: string | null,
    eng: string | null,
  }
}

export interface ListItem {
  value: string
}