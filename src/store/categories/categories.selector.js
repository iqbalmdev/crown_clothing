import { createSelector } from 'reselect'

const selectCategoreyReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoreyReducer],
  (categoriesSlice) => categoriesSlice.categories,
)

export const selectisLoadingState = createSelector(
  [selectCategoreyReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
)
export const setCategories = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, catgeory) => {
    const { title, items } = catgeory
    acc[title.toLowerCase()] = items
    return acc
  }, {}),
)
