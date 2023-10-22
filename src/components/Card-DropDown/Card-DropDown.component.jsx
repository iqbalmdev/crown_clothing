import { useContext } from 'react'

import Button from '../Button/Button.component'
import { useNavigate } from 'react-router-dom'
import './card-DropDown.styles.scss'
import { CartContext } from '../../context/Cart.Context'
import CartItem from '../Cart-Item/Cart-Item.component'
const CartDropdown = () => {
  const { cartItems, setCart, cartItemsRed } = useContext(CartContext)
  console.log(cartItems, 'see here cart items')
  const navigate = useNavigate()
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemsRed.length ? (
          cartItemsRed?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          navigate('checkout')
          setCart(false)
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown
