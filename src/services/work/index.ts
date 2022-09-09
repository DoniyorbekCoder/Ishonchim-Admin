import type { Form } from './entity'

export * from './api'
export type { Work, Form } from './entity'
export * from '../data'
export * from '../common'
export * from '../timeFunctions'
export * from '../category'

export function reset(obj: Form) {
  obj.id = null,
  obj.work = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.doer = { list: [{ code: 'ar', value: '' }, { code: 'eng', value: '' }, { code: 'oz', value: '' }, { code: 'ru', value: '' }, { code: 'uz', value: '' }] },
  obj.url = ''
  obj.date = null
  obj.image = ''
  obj.timeline = null
}
