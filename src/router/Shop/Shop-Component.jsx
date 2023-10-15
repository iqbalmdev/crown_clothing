import { Routes, Route } from 'react-router-dom'
import CategoryPreview from '../Categories-preview/Categories-preview.component'
import Catgeory from '../Category/Category.componenet'
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Catgeory />} />
    </Routes>
  )
}

export default Shop
