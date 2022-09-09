import type { List } from "../types";

export interface Photo {
  id: number,
  title: List,
  description: List,
  slug: string,
  images: string[],
  date: number,
  imageCount: number
}
export interface Form {
  id: number | null,
  title: List
  description: List,
  date: string | null
  slug: string | null,
  images: any[],
  imageCount: number | null
}
