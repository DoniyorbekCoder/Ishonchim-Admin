import type { Form } from './entity'

export * from './api'
export type { Organization, Form } from './entity'
export * from '../data'
export * from '../common'
export * from '../timeFunctions'
export * from '../category'

export function reset(obj: Form) {
  obj.id = null,
  obj.name = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.location = { list: [{ code: 'ar', value: '' }, { code: 'eng', value: '' }, { code: 'oz', value: '' }, { code: 'ru', value: '' }, { code: 'uz', value: '' }] },
  obj.country = { list: [{ code: 'ar', value: '' }, { code: 'eng', value: '' }, { code: 'oz', value: '' }, { code: 'ru', value: '' }, { code: 'uz', value: '' }] },
  obj.position = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.createdDate = null
  obj.image = ''
  obj.timeline = null
}
