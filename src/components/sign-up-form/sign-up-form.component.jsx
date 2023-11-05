import React from 'react'
import './sign-up.styles.scss'
import { useState, Fragment, useContext } from 'react'
import { signUpStart } from '../../store/user/user.action'
import {
  CreateAuthUserEmailAndPassword,
  createUserDocumnetFromAuth,
} from '../../utils/firebase/firebase.utils'
import InputComponent from '../form-input/form-input.component'
import Button from '../Button/Button.component'
import { UserContext } from '../../context/user.context'
import { useDispatch } from 'react-redux'
const FormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUp = () => {
  const { setCurrentUer } = useContext(UserContext)
  const [formFields, setFormFields] = useState(FormFields)
  const dispatch = useDispatch()
  const { displayName, email, password, confirmPassword } = formFields
  const resetFrom = () => {
    setFormFields(FormFields)
  }
  const handleChange = (event) => {
    const { value, name } = event.target
    setFormFields({
      ...formFields,
      [name]: value,
    })
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Password not matched')
      return
    }

    try {
      // const response = await CreateAuthUserEmailAndPassword(email, password)
      // console.log(response)
      // if (!response) {
      //   return
      // } else {
      //   const { user } = response
      //   setCurrentUer(user)
      //   const createUserDoc = await createUserDocumnetFromAuth(user, {
      //     displayName: displayName,
      //   })
      //   console.log(createUserDoc)
      // }
      dispatch(signUpStart(email, password, displayName))
    } catch (error) {
      console.log(error, 'error in creating user')
    }
    resetFrom()
  }

  return (
    <Fragment>
      <div className="sign-up-container">
        <h1>I dont have an acccount</h1>
        <label>Sign up with your email and password</label>
        <form onSubmit={onSubmit}>
          <InputComponent
            required
            type="text"
            onChange={handleChange}
            name="displayName"
            label={'Display Name'}
          />
          <InputComponent
            required
            onChange={handleChange}
            type="email"
            name="email"
            label="Email"
          />
          <InputComponent
            required
            onChange={handleChange}
            type="password"
            name="password"
            label="Password"
          />
          <InputComponent
            required
            onChange={handleChange}
            name="confirmPassword"
            label="Confirm Password"
          />

          <Button type="submit" buttonType="inverted">
            Sign Up
          </Button>
        </form>
      </div>
    </Fragment>
  )
}

export default SignUp
