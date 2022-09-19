import { axiosInstance } from "../axios";
import type { Contract, Form } from "./entity";
export async function getContracts( search = '', offset = 0): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`contracts`, {
         params: {
            size: 6,
            offset: offset,
            search: search
         }
      }) as { data: { list: Contract[], count: number } }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function getContract(id: number | string): Promise<[any, any]> {
   try {
      const response = await axiosInstance.get(`contract?id=${id}`) as { data: Contract }
      return [null, response.data]
   }
   catch (error) {
      return [error, null]
   }
}

export async function postPutUser(formInfo: Form) {
   try {
      const response = await axiosInstance({
         url: 'contract',
         method: formInfo.id === null ? 'POST' : 'PUT',
         data: {
            "id": formInfo.id,
            "lender": formInfo.lender,
            "debtor": formInfo.debtor,
            "type": formInfo.type,
            "returnType": formInfo.returnType,
            "amount": formInfo.amount,
            "lenderConditions": formInfo.lenderConditions,
            "debtorConditions": formInfo.debtorConditions,
            "description": formInfo.description,
            "manager": formInfo.manager,
            "currency": formInfo.currency,
            "debtorStatus": formInfo.debtorStatus,
            "lenderStatus": formInfo.lenderStatus,
            "status": formInfo.status,
            "createdAt": formInfo.createdAt,
            "updatedAt": formInfo.updatedAt,
            "payments": formInfo.payments,
         }
      })
      return [null, response]
   }
   catch (error) {
      return [error, null]
   }
}
