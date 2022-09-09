import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Book, Form } from "./entity";
export async function getBooks(type = 1, search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`books?type=${type}`, {
      params: {
        size: 4,
        offset: offset,
        search: search
      }
    }) as {data: {list:Book[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getBook(id: number | string): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`book?id=${id}`) as {data: Book}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutBook(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'book',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "type": formInfo.type,
        "pages": formInfo.pages,
        "date": epoch(String(formInfo.date)),
        "name": formInfo.name,
        "publisher": formInfo.publisher,
        "category": {
          "id": formInfo.category
        },
        "image": `${image}`,
        "url": `${formInfo.url}`,
        "timeline": formInfo.timeline,
        "tags": formInfo.tags
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
