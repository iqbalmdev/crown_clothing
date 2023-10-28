import { createAction } from '../../utils/Reducer/reducer.utils'

import { CATEGORIES_TYPE } from './categories.types'
export const getAllCategories = (categories) =>
  createAction(CATEGORIES_TYPE.setCategories, categories)
