import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Work, Form } from "./entity";
export async function getWorks(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`works`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Work[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutWork(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'work',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "date": epoch(String(formInfo.date)),
        "work": formInfo.work,
        "doer": formInfo.doer,
        "url": formInfo.url,
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
