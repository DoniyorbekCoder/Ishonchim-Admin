import { axiosInstance } from "../axios";
import type { Company, Form } from "./entity";
export async function getCompanies( search = '', offset = 0): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`companies`, {
         params: {
            size: 6,
            offset: offset,
            search: search
         }
      }) as { data: { list: Company[], count: number } }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function getCompany(id: number | string): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`company?id=${id}`) as { data: Company }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function postPutCompany(formInfo: Form) {
   try {
      const response = await axiosInstance({
         url: 'company',
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
