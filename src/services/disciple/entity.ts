import type { List } from "../types";

export interface Disciple {
  id: number,
  startDate: number,
  endDate: number,
  name: List,
  major: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  startDate: string | null,
  endDate: string | null,
  name: List,
  major: List,
  image: string | null,
  timeline: boolean | null,
}
