import type { List } from "../types";

export interface Project {
  id: number,
  date: number,
  name: List,
  description: List,
  url: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  date: string | null,
  name: List,
  description: List,
  url: string | null,
  timeline: boolean | null,
}
