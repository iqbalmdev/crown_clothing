import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartIcon from '../../components/Cart-Icon/Cart-Icon.component'
import CartDropdown from '../../components/Card-DropDown/Card-DropDown.component'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import { handleSignOut } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/Cart.Context'
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log('Context value coming', currentUser)
  // const handleSignOutEMail = async () => {
  //   const res = await handleSignOut() // Call the sign-out function

  // }
  const { cart } = useContext(CartContext)
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
        {cart ? <CartDropdown /> : null}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
