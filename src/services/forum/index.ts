import type { Form } from './entity'

export * from './api'
export type { Forum, Form } from './entity'
export * from '../data'
export * from '../common'
export * from '../timeFunctions'
export * from '../category'

export function reset(obj: Form) {
  obj.id = null,
  obj.title = { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
  obj.country = { list: [{ code: 'ar', value: '' }, { code: 'eng', value: '' }, { code: 'oz', value: '' }, { code: 'ru', value: '' }, { code: 'uz', value: '' }] },
    obj.slug = null
  obj.date = ''
  obj.images = []
  obj.timeline = null
}
