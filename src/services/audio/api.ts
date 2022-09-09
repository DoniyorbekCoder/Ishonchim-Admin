import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Form, Audio } from "./entity";
export async function getAudios(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`videos?&search=${search}&type=audio`, {
      params: {
        size: 6,
        offset: offset,
      }
    }) as { data: {list: Audio[], count: number} }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getAudio(id: string | number): Promise<any[]> {
  try {
    const response = await axiosInstance.get(`video?id=${id}&type=audio`) as { data: Audio }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutAudios(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'video?type=audio',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "type": formInfo.type,
        "slug": formInfo.slug,
        "date": epoch(String(formInfo.date)),
        "title": formInfo.title,
        "description": formInfo.description,
        "category": {
          "id": formInfo.category
        },
        "image": `${image}`,
        "url": `${formInfo.url}`,
        "timeline": formInfo.timeline
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}