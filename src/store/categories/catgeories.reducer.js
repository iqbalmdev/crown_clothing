import { CATEGORIES_TYPE } from './categories.types'

const INTIAL_STATE = {
  categories: {},
}

export const categoriesReducerFunc = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action
  console.log(payload, 'categories payload')
  switch (type) {
    case CATEGORIES_TYPE.setCategories:
      return {
        ...state,
        categoriesMap: payload,
      }
    default:
      return state
  }
}
