import { useContext } from 'react'

import Button from '../Button/Button.component'
import { useNavigate } from 'react-router-dom'
import './card-DropDown.styles.scss'
import { CartContext } from '../../context/Cart.Context'
import CartItem from '../Cart-Item/Cart-Item.component'
import { useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector.js'
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          navigate('checkout')
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown
