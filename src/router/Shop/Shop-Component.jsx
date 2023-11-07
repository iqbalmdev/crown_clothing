import { Routes, Route } from 'react-router-dom'
import CategoryPreview from '../Categories-preview/Categories-preview.component'
import Catgeory from '../Category/Category.componenet'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
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
