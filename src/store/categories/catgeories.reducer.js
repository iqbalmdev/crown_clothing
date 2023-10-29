import { CATEGORIES_TYPE } from './categories.types'

const INTIAL_STATE = {
  categories: [],
}

export const categoriesReducerFunc = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case CATEGORIES_TYPE.setCategories:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }
}
