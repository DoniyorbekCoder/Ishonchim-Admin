import type { Form } from './entity'

export * from './api'
export type { Tag, Form } from './entity'
export * from '../common'
export * from '../data'

export function reset(obj: Form) {
  obj.id = null,
  obj.name = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]}
}