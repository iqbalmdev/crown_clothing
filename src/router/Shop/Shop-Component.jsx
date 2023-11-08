import { Routes, Route } from 'react-router-dom'
import CategoryPreview from '../Categories-preview/Categories-preview.component'
import Catgeory from '../Category/Category.componenet'
import { useEffect } from 'react'
// import {
//   addCollectionDocuments,
//   getCategoriesAndDocuments,
// } from '../../utils/firebase/firebase.utils'
import { useDispatch } from 'react-redux'
// import { setCategories } from '../../store/categories/categories.selector'
import { fetchCatgeoriesAsync } from '../../store/categories/categories.action'
const Shop = () => {
  // redux method
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCatgeoriesAsync())
  },)

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Catgeory />} />
    </Routes>
  )
}

export default Shop
