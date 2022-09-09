import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Photo, Form } from "./entity";
export async function getPhotos(search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`photos`, {
      params: {
        size: 4,
        offset: offset,
        search: search
      }
    }) as {data: {list: Photo[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getPhoto(id: number | string): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`photo`, {
      params: {
        id: id
      }
    }) as {data: Photo}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutPhoto(formInfo: Form) {
  try {
    const response = await axiosInstance({
      url: 'photo',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "title": formInfo.title,
        "description": formInfo.description,
        "date": epoch(String(formInfo.date)),
        "slug": formInfo.slug,
        "images": formInfo.images,
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
