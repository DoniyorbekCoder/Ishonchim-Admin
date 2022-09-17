import type { TypeLang } from "../types";
import type { User } from "../user";

export interface Contract {
   id: number,
   lender: User,
   debtor: User,
   type: TypeLang,
   returnType: TypeLang,
   amount: number,
   lenderConditions: string,
   debtorConditions: string,
   description: string,
   manager: User,
   currency: TypeLang,
   debtorStatus: string,
   lenderStatus: string,
   status: string,
   createdAt: string,
   updatedAt: string,
   payments: Payment[],
}
export interface Form {
   id: number | null,
   lender: User | null,
   debtor: User | null,
   type: TypeLang,
   returnType: TypeLang,
   amount: number | null,
   lenderConditions: string | null,
   debtorConditions: string | null,
   description: string | null,
   manager: User | null,
   currency: TypeLang,
   debtorStatus: string | null,
   lenderStatus: string | null,
   status: string | null,
   createdAt: string | null,
   updatedAt: string | null,
   payments: Payment[] | null,
}

export interface Payment {
   id: number | null, 
   contractId: number | null, 
   price: number | null, 
   currency: TypeLang,
   isPaid: boolean | null, 
   arrangementAt: string | null, 
   paidAt: string | null, 
   createdAt: string | null, 
   updatedAt: string | null, 
}