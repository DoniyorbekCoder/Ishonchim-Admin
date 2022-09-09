import type { List } from "../types";

export interface Forum {
  id: number,
  title: List,
  country: List,
  date: number,
  slug: string,
  images: string[],
  imageCount: number,
  timeline: boolean,
}
export interface Form {
  id: number | null,
  title: List
  country: List,
  date: string,
  slug: string | null,
  images: any[],
  imageCount: number | null,
  timeline: boolean | null,
}