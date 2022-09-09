import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Category, Form } from "./entity";
export async function getCategories(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`categories`, {
      params: {
        size: 12,
        offset: offset,
        search: search
      }
    }) as {data: {list: Category[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutCategory(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'category',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "name": formInfo.name,
        "image": `${image}`,
        "type": formInfo.type
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
