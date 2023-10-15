import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../context/Categories.context'
import CategoryPreview from '../../components/Category-preview/Categories-preview'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview
