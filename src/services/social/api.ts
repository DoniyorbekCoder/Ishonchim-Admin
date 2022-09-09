import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Social, Form } from "./entity";
export async function getSocials(search = ''): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`socials`, {
      params: {
        search: search
      }
    }) as {data: {list: Social[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutSocial(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'social',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "image": image,
        "priority": formInfo.priority,
        "url": formInfo.url,
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
