import type { List } from "../types";

export interface Organization {
  id: number,
  createdDate: number,
  name: List,
  country: List,
  location: List,
  position: List,
  image: string,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  createdDate: string | null,
  name: List
  country: List,
  location: List,
  position: List,
  image: string | null
  timeline: boolean | null,
}
