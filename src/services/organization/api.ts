import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Organization, Form } from "./entity";
export async function getOrganizations(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`organizations`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Organization[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutOrganization(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'organization',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "createdDate": epoch(String(formInfo.createdDate)),
        "name": formInfo.name,
        "country": formInfo.country,
        "location": formInfo.location,
        "position": formInfo.position,
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
