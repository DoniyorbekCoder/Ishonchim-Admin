import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { Article, Form } from "./entity";
export async function getArticles(type = 1, search = '', offset = 0): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`articles?type=${type}`, {
      params: {
        size: 6,
        offset: offset,
        search: search
      }
    }) as {data: {list: Article[], count: number}}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function getArticle(id: number | string): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`article?id=${id}`) as {data: Article}
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}

export async function postPutArticle(formInfo: Form, image: string) {
  try {
    const response = await axiosInstance({
      url: 'article',
      method: formInfo.id === null ? 'POST': 'PUT',
      data: {
        "id": formInfo.id,
        "type": formInfo.type,
        "slug": formInfo.slug,
        "time": epoch(String(formInfo.time)),
        "title": formInfo.title,
        "description": formInfo.description,
        "body": formInfo.body,
        "category": {
          "id": formInfo.category
        },
        "image": `${image}`,
        "timeline": formInfo.timeline,
        "tags": formInfo.tags
      }
    })
    return [null, response]
  }
  catch(error) {
    return [error, null]
  }
}
