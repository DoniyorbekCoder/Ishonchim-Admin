import type { Form } from './entity'

export * from './api'
export type { Contract, Form } from './entity'
export * from '../data'
export * from '../common'

export function reset(obj: Form) {
   obj.id = null,
      obj.lender = null,
      obj.debtor = null,
      obj.type = {
         id: null,
         name: { uz: '', ru: '', eng: '' }
      },
      obj.returnType = {
         id: null,
         name: { uz: '', ru: '', eng: '' }
      },
      obj.amount = null,
      obj.lenderConditions = '',
      obj.debtorConditions = '',
      obj.description = '',
      obj.manager = null,
      obj.currency = {
         id: null,
         name: { uz: '', ru: '', eng: '' }
      },
      obj.debtorStatus = '',
      obj.lenderStatus = '',
      obj.status = '',
      obj.createdAt = '',
      obj.updatedAt = '',
      obj.payments = null
}
