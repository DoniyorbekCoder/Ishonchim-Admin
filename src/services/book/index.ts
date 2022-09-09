import type { Form } from './entity'

export * from './api'
export type { Book, Form } from './entity'
export * from '../data'
export * from '../common'
export * from '../timeFunctions'
export * from '../category'

export function reset(obj: Form) {
  obj.id = null,
  obj.name = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.category = null
  obj.publisher = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.url = null
  obj.pages = null
  obj.date = ''
  obj.type = null
  obj.timeline = null
}
