import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Form, Question } from "./entity";
export async function getQuestions(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`questions?&search=${search}`, {
      params: {
        size: 5,
        offset: offset,
      }
    }) as { data: {list: Question[], count: number} }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getQuestion(id: number | string): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`question?id=${id}`) as { data: Question }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutQuestions(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'question',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "slug": formInfo.slug,
        "title": formInfo.title,
        "question": formInfo.question,
        "answer": formInfo.answer,
        "category": {
          "id": formInfo.category
        },
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}