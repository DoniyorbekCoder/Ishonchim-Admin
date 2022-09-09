import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Form, Video } from "./entity";
export async function getVideos(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`videos?type=video&search=${search}`, {
      params: {
        size: 6,
        offset: offset,
      }
    }) as { data: {list: Video[], count: number} }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getVideo(id: string | number): Promise<any[]> {
  try {
    const response = await axiosInstance.get(`video?id=${id}&type=video`) as { data: Video }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutVideos(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'video?type=video',
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