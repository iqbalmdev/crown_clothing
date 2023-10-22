import { useContext } from 'react'

import { CartContext } from '../../context/Cart.Context'

import Button from '../Button/Button.component'

import './Product-Card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart, reduceFunc } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span
          className="name"
          // onClick={addProductToCart}
        >
          {name}
        </span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
