import type { Category, List } from "../types";

export interface Question {
  id: number,
  slug: string,
  title: List,
  question: List,
  answer: List,
  category: Category,
}

export interface Form {
  id: number | null,
  slug: string | null,
  title: List
  question: List,
  answer: List,
  category: number | null,
}
