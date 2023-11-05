import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesSuccess, fetchCategoriesEnd } from './categories.action'
import { CATEGORIES_TYPE } from './categories.types'
// export const fetchCatgeoriesAsync = () => async (dispatchMethod) => {

//     dispatchMethod(fetchCategoriesStart())

//     try {
//       const res = await getCategoriesAndDocuments('categories')
//       dispatchMethod(fetchCategoriesSuccess(res))
//     } catch (error) {
//       dispatchMethod(fetchCategoriesEnd(error))
//     }
//   }

// insted like thunk a action function return an objects if an action return a function then it takes that as thunk and accept the first argumenta s dipatch and the second as get value go inot flow documents to see more here in saga what we are doing is like instead of calling that dipatch method we are calling ---all-- for doing an async operation and put for the second action to trigger the action like anothee reducer function
export function* fetchCatgeoriesAsync() {
  try {
    const res = yield call(getCategoriesAndDocuments, 'categories')
    yield put(fetchCategoriesSuccess(res))
  } catch (error) {
    yield put(fetchCategoriesEnd(error))
  }
}

export function* onFetchCatgeories() {
  yield takeLatest(CATEGORIES_TYPE.FETCH_CATEGORIES_START, fetchCatgeoriesAsync)
}
export function* categoriesSaga() {
  yield all([call(onFetchCatgeories)])
}
