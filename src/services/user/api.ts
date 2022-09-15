import { axiosInstance } from "../axios";
import { epoch } from "../timeFunctions";
import type { User, Form } from "./entity";
export async function getUsers(type = 1, search = '', offset = 0): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`users?type=${type}`, {
         params: {
            size: 6,
            offset: offset,
            search: search
         }
      }) as { data: { list: User[], count: number } }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function getUser(id: number | string): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`user?id=${id}`) as { data: User }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function postPutUser(formInfo: Form) {
   try {
      const response = await axiosInstance({
         url: 'user',
         method: formInfo.id === null ? 'POST' : 'PUT',
         data: {
            "id": formInfo.id,
            "username": formInfo.username,
            "password": formInfo.password,
            "firstName": formInfo.firstName,
            "lastName": formInfo.lastName,
            "birthday": formInfo.birthday,
            "isMan": formInfo.isMan,
            "bio": formInfo.bio,
            "balance": formInfo.balance,
            "phone": formInfo.phone,
            "jobs": formInfo.jobs,
            "token": formInfo.token,
            "type": formInfo.type,
            "image": formInfo.image,
            "passport": {
               "number": formInfo.passport.number,
               "pnfl": formInfo.passport.pnfl,
               "selfie": formInfo.passport.selfie,
               "image": formInfo.passport.image,
            }
         }
      })
      return [null, response]
   }
   catch (error) {
      return [error, null]
   }
}
