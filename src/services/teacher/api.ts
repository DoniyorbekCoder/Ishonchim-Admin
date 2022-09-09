import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Teacher, Form } from "./entity";
export async function getTeachers(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`teachers`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Teacher[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutTeacher(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'teacher',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "startDate": epoch(String(formInfo.startDate)),
        "endDate": epoch(String(formInfo.endDate)),
        "name": formInfo.name,
        "position": formInfo.position,
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
