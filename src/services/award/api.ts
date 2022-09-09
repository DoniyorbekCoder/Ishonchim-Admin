import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Award, Form } from "./entity";
export async function getAwards(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`awards`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Award[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutAward(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'award',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "date": epoch(String(formInfo.date)),
        "name": formInfo.name,
        "body": formInfo.body,
        "image": `${image}`,
        "timeline": formInfo.timeline
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}