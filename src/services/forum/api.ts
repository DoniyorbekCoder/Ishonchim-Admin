import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Forum, Form } from "./entity";
export async function getForums(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`forums`, {
      params: {
        size: 4,
        offset: offset,
        search: search
      }
    }) as {data: {list: Forum[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getForum(id: number): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`forum`, {
      params: {
        id: id
      }
    }) as {data: Forum}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutForum(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'forum',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "title": formInfo.title,
        "country": formInfo.country,
        "date": epoch(String(formInfo.date)),
        "slug": formInfo.slug,
        "images": formInfo.images,
        "timeline": formInfo.timeline
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
