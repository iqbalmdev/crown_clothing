import { CATEGORIES_TYPE } from './categories.types'

const INTIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoriesReducerFunc = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case CATEGORIES_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,

        isLoading: true,
      }
    case CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      }
    case CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      }
    default:
      return state
  }
}
