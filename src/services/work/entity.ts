import type { List } from "../types";

export interface Work {
  id: number,
  date: number,
  work: List,
  doer: List,
  url: string,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  date: string | null,
  work: List
  doer: List,
  url: string,
  image: string | null,
  timeline: boolean | null,
}
