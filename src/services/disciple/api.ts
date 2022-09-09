import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Disciple, Form } from "./entity";
export async function getDisciples(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`disciples`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Disciple[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutDisciple(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'disciple',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "startDate": epoch(String(formInfo.startDate)),
        "endDate": epoch(String(formInfo.endDate)),
        "name": formInfo.name,
        "major": formInfo.major,
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
