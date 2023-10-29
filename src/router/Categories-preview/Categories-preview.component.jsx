import { Fragment } from 'react'

import CategoryPreview from '../../components/Category-preview/Categories-preview'
import { useSelector } from 'react-redux'
import {
  setCategories,
  selectisLoadingState,
} from '../../store/categories/categories.selector'
import Loading from '../../Loading/Loading'
const CategoriesPreview = () => {
  const categoriesMap = useSelector(setCategories)

  const isLoadingState = useSelector(selectisLoadingState)
  return (
    <Fragment>
      {isLoadingState ? (
        <Loading />
      ) : (
        categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      )}
    </Fragment>
  )
}

export default CategoriesPreview
