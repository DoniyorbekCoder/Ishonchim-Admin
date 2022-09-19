import type { Form } from './entity'

export * from './api'
export type { User, Form } from './entity'
export * from '../data'
export * from '../common'

export function reset(obj: Form) {
  obj.id = null,
    obj.username = '',
    obj.password = '',
    obj.firstName = '',
    obj.lastName = '',
    obj.birthday = '',
    obj.isMan = null,
    obj.bio = '',
    obj.balance = null,
    obj.phone = '',
    obj.jobs = '',
    obj.token = '',
    obj.type = '',
    obj.image = '',
    obj.inn = '',
    obj.passport = {
      number: '',
      pnfl: '',
      selfie: '',
      image: '',
    },
    obj.companies = null,
    obj.partners = null,
    obj.code = '',
    obj.contractCount = null,
    obj.partnerCount = null
}
