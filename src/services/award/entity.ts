import type { List } from "../types";

export interface Award {
  id: number,
  date: number,
  name: List,
  body: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  date: string | null,
  name: List,
  body: List,
  image: string | null,
  timeline: boolean | null,
}