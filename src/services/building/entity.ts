import type { List } from "../types";

export interface Building {
  id: number,
  type: number,
  date: number,
  name: List,
  country: List,
  location: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  type: number | null,
  date: string | null,
  name: List
  country: List,
  location: List,
  image: string | null,
  timeline: boolean | null,
}
