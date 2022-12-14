import { axiosInstance } from "../axios";
import type { User, Form } from "./entity";
export async function getUsers( search = '', offset = 0): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`admin/users`, {
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
      const response = await axiosInstance.get(`admin/user?id=${id}`) as { data: User }
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
            "inn": formInfo.inn,
            "passport": {
               "number": formInfo.passport.number,
               "pnfl": formInfo.passport.pnfl,
               "selfie": formInfo.passport.selfie,
               "image": formInfo.passport.image,
            },
            "companies": formInfo.companies,
            "partners": formInfo.partners,
            "code": formInfo.code,
            "contractCount": formInfo.contractCount,
            "partnerCount": formInfo.partnerCount
         }
      })
      return [null, response]
   }
   catch (error) {
      return [error, null]
   }
}
