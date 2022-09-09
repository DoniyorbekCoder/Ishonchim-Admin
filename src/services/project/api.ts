import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Project, Form } from "./entity";
export async function getProjects(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`projects`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Project[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutProject(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'project',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "date": epoch(String(formInfo.date)),
        "name": formInfo.name,
        "description": formInfo.description,
        "url": formInfo.url,
        "timeline": formInfo.timeline
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
