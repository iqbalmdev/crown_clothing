

import CheckoutItem from '../../components/Checkout-item/Checkout.component'
import { useSelector } from 'react-redux'
import PaymentForm from "../../components/Payment-form/Payment-form.component"
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import './checkout.styles.scss'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <PaymentForm/>
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  )
}

export default Checkout
