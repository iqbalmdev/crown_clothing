import { Routes, Route } from 'react-router-dom'
import CategoryPreview from '../Categories-preview/Categories-preview.component'
import Catgeory from '../Category/Category.componenet'
import { useEffect } from 'react'
import {
  // addCollectionDocuments,
  getCategoriesAndDocuments,
} from '../../utils/firebase/firebase.utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../store/categories/categories.selector'
import {
  // fetchCatgeoriesAsync,
  fetchCategoriesStart,
} from '../../store/categories/categories.action'
const Shop = () => {
  // redux method
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Catgeory />} />
    </Routes>
  )
}

export default Shop
