import type { Category, List } from "../types";

export interface Book {
  id: number,
  type: number,
  pages: number,
  date: number,
  name: List,
  publisher: List,
  category: Category,
  image: string,
  timeline: boolean,
  url: string
}
export interface Form {
  id: number | null,
  type: number | null,
  pages: number | null,
  date: string | null,
  name: List
  publisher: List,
  category: number | null,
  url: string | null,
  timeline: boolean | null,
  image: string | null
}
