import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import { handleSignOut } from '../../utils/firebase/firebase.utils'
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log('Context value coming', currentUser)
  // const handleSignOutEMail = async () => {
  //   const res = await handleSignOut() // Call the sign-out function

  // }
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
