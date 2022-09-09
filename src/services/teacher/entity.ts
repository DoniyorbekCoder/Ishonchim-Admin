import type { List } from "../types";

export interface Teacher {
  id: number,
  startDate: number,
  endDate: number,
  name: List,
  position: List,
  location: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  startDate: string | null,
  endDate: string | null,
  name: List,
  position: List,
  location: List,
  image: string | null,
  timeline: boolean | null,
}
