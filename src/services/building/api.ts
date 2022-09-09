import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Building, Form } from "./entity";
export async function getBuildings(type = 1, search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`buildings?type=${type}`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Building[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutBuilding(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'building',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "type": formInfo.type,
        "date": epoch(String(formInfo.date)),
        "name": formInfo.name,
        "country": formInfo.country,
        "location": formInfo.location,
        "image": `${image}`,
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
