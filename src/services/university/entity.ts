import type { List } from "../types";

export interface University {
  id: number,
  end_date: number,
  start_date: number,
  name: List,
  country: List,
  location: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  end_date: string | null,
  start_date: string | null,
  name: List
  country: List,
  location: List,
  image: string | null
  timeline: boolean | null,
}
