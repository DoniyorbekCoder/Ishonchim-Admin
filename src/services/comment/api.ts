import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Comment, Form } from "./entity";
export async function getComments(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`comments`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Comment[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutComment(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'comment',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "date": epoch(String(formInfo.date)),
        "name": formInfo.name,
        "body": formInfo.body,
        "image": `${image}`,
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
