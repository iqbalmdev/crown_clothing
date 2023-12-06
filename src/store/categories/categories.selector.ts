import { createSelector } from 'reselect'

import { CategoroiesState } from './catgeories.reducer'
import {CategoryMap} from "./categories.types"



const selectCategoreyReducer = (state):CategoroiesState => state.categories

export const selectCategories = createSelector(
  [selectCategoreyReducer],
  (categoriesSlice) => categoriesSlice.categories,
)

export const selectisLoadingState = createSelector(
  [selectCategoreyReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
)
export const setCategories = createSelector([selectCategories], (categories):CategoryMap =>
  categories.reduce((acc, catgeory) => {
    const { title, items } = catgeory
    acc[title.toLowerCase()] = items
    return acc
  }, {} as CategoryMap),
)
