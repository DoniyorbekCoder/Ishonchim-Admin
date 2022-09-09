import type { Tag } from "../tags";
import type { Category, List } from "../types";

export interface Article {
  id: number,
  type: number,
  slug: string,
  time: number,
  title: List,
  description: List,
  body: List,
  category: Category,
  image: string,
  timeline: boolean,
  tags: Tag[]
}

export interface Form {
  id: number | null,
  type: number | null,
  slug: string | null,
  time: string | null,
  title: List
  description: List,
  body: List,
  category: number | null,
  image: string | null,
  timeline: boolean | null,
  tags: Tag[]
}

