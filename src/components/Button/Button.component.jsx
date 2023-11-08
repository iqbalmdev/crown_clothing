import React from 'react'
import './button.styles.scss'
export const Button_Type_Classes = {
  google: 'google-sign-in',
  inverted: 'inverted',
}
const Button = ({ children, buttonType,isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_Classes[buttonType]}`}
      {...otherProps}
      disabled={isLoading}
    >
      {children}
    </button>
  )
}

export default Button
