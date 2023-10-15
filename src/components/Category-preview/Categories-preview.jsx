import ProductCard from '../Product-Card/Product-Card'

import './Category.styles.scss'
import { useNavigate } from 'react-router-dom'
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate()
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => navigate(`${title}`)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}
export default CategoryPreview
