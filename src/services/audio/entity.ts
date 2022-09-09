import type { Category, List } from "../types";

export interface Audio {
  id: number,
  type: number,
  slug: string,
  date: number,
  title: List,
  description: List,
  category: Category,
  image: string,
  url: string,
  timeline: boolean
}

export interface Form {
  id: number | null,
  type: number | null,
  slug: string | null,
  date: string | null,
  title: List
  description: List,
  category: number | null,
  url: string | null,
  image: string | null,
  timeline: boolean | null
}

