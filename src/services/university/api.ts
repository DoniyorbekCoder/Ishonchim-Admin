import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { University, Form } from "./entity";
export async function getUniverstities(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`universities`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: University[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutUniversity(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'university',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "end_date": epoch(String(formInfo.end_date)),
        "start_date": epoch(String(formInfo.start_date)),
        "name": formInfo.name,
        "country": formInfo.country,
        "location": formInfo.location,
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
