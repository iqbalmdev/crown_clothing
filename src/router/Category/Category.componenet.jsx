import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/Product-Card/Product-Card'

import { CategoriesContext } from '../../context/Categories.context'

import './Catgeory.styles.scss'
import { useSelector } from 'react-redux'
import { setCategories } from '../../store/categories/categories.selector'
const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(setCategories)
  // const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  )
}

export default Category
