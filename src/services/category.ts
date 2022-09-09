import { axiosInstance } from "./axios";
import type { Category } from "./types";
export async function getCategory(): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`categories`, {
      
    }) as { data: { list: Category[], count: number } }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}
