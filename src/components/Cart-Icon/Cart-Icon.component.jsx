import React, { useContext } from 'react'
import './Cart-Icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/Cart.Context'
const Cart = () => {
  const { cart, setCart, cartCount } = useContext(CartContext)
  const toogleCart = () => setCart(!cart)
  return (
    <div className="cart-icon-container" onClick={toogleCart}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default Cart
