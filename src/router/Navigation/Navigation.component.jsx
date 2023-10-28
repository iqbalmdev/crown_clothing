import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartIcon from '../../components/Cart-Icon/Cart-Icon.component'
import CartDropdown from '../../components/Card-DropDown/Card-DropDown.component'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import { handleSignOut } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/Cart.Context'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
const Navigation = () => {
  // const { currentUser } = useContext(UserContext)
  // const handleSignOutEMail = async () => {
  //   const res = await handleSignOut() // Call the sign-out function

  // }

  const currentUser = useSelector(selectCurrentUser)
  const { cart, isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIG OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
