import type { List } from "../types";

export interface Category {
  id: number,
  name: List,
  image: string,
  type: string
}
export interface Form {
  id: number | null,
  name: List
  image: string | null,
  type: string
}
