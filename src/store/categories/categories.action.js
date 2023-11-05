import { createAction } from '../../utils/Reducer/reducer.utils'

import { CATEGORIES_TYPE } from './categories.types'
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
export const getAllCategories = (categories) =>
  createAction(CATEGORIES_TYPE.setCategories, categories)

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categories) => {
  return createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS, categories)
}
export const fetchCategoriesEnd = (error) => {
  return createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED, error)
}

// export const fetchCatgeoriesAsync = () => async (dispatchMethod) => {
//   // the async fucntion arguments is comes like the thunk function which inturns return an function that receives a dispatch fucntion as an argument that will trigger the action
//   dispatchMethod(fetchCategoriesStart())

//   try {
//     const res = await getCategoriesAndDocuments('categories')
//     dispatchMethod(fetchCategoriesSuccess(res))
//   } catch (error) {
//     dispatchMethod(fetchCategoriesEnd(error))
//   }
// }
