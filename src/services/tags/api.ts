import { axiosInstance } from "../axios";
import type { Tag, Form } from "./entity";
export async function getTags(search = ''): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`tags`, {
      params: {
        search: search
      }
    }) as {data: {list: Tag[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutTag(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'tag',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: formInfo
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
