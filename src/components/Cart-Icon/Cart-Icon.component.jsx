import React from 'react'
import './Cart-Icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action'

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'

import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default Cart
