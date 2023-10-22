import { useContext } from 'react'

import { CartContext } from '../../context/Cart.Context'

import CheckoutItem from '../../components/Checkout-item/Checkout.component'

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, total, cartItemsRed, cartTotalAmount } = useContext(
    CartContext,
  )

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItemsRed.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotalAmount}</div>
    </div>
  )
}

export default Checkout
