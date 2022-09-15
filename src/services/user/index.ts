import type { Form } from './entity'

export * from './api'
export type { User, Form } from './entity'
export * from '../data'
export * from '../common'
export * from '../timeFunctions'
export * from '../category'

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
  obj.passport = {
    number: '',
    pnfl: undefined,
    selfie: '',
    image: '',
  }
}
