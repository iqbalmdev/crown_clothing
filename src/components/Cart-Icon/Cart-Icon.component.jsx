import React, { useContext } from 'react'
import './Cart-Icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/Cart.Context'
const Cart = () => {
  const {
    cart,
    setCart,
    cartCounts,
    cartTotalAmount,
    isCartOpen,
    isCartOpenFunction,
  } = useContext(CartContext)
  const toogleCart = () => isCartOpenFunction(!isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toogleCart}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{cartCounts}</span>
    </div>
  )
}

export default Cart
