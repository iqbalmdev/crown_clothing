import { useContext, Fragment } from 'react'

// import { CategoriesContext } from '../../context/Categories.context'
import CategoryPreview from '../../components/Category-preview/Categories-preview'
import { useSelector } from 'react-redux'
import { setCategories } from '../../store/categories/categories.selector'
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(setCategories)

  return (
    <Fragment>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })}
    </Fragment>
  )
}

export default CategoriesPreview
