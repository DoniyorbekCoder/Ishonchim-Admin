import type { User } from "../user";

export interface Company {
   id: number,
   username: string,
   password: string,
   firstName: string,
   lastName: string,
   birthday: string,
   isMan: boolean,
   bio: string,
   balance: number,
   phone: string,
   jobs: string,
   token: string,
   type: string,
   image: string,
   inn: string,
   passport: Passport,
   companies: User[],
   partners: User[],
   code: string,  // string yoki number ko'rish kk
   contractCount: number,
   partnerCount: number,
}
export interface Form {
   id: number | null,
   username: string | null,
   password: string | null,
   firstName: string | null,
   lastName: string | null,
   birthday: string | null,
   isMan: boolean | null,
   bio: string | null,
   balance: number | null,
   phone: string | null,
   jobs: string | null,
   token: string | null,
   type: string | null,
   image: string | null,
   inn: string | null,
   passport: Passport,
   companies: User[] | null,
   partners: User[] | null,
   code: string | null,  // string yoki number ko'rish kk
   contractCount: number | null,
   partnerCount: number | null,
}

export interface Passport {
   number: string | null, 
   pnfl: number | null,
   selfie: string | null, 
   image: string | null, 
}