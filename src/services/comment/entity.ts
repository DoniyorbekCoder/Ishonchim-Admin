import type { List } from "../types";

export interface Comment {
  id: number,
  date: number,
  name: List,
  body: List,
  image: string,
}
export interface Form {
  id: number | null,
  date: string | null,
  name: List,
  body: List,
  image: string | null,
}
