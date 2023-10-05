import React from 'react'
import './sign-in.styles.scss'
import { useState, Fragment } from 'react'
import {
  CreateAuthUserEmailAndPassword,
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
  signInEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import InputComponent from '../form-input/form-input.component'
import Button from '../Button/Button.component'
const FormFields = {
  email: '',
  password: '',
}
const SignIn = () => {
  const [formFields, setFormFields] = useState(FormFields)

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

    try {
      const res = await signInEmailAndPassword(email, password)
      console.log(res, 'sign i reponse')
    } catch (error) {
      console.log(error, 'error in creating user')
    }
    resetFrom()
  }

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumnetFromAuth(user)
    console.log(
      userDocRef,
      'returing from the firebase user creating instances',
    )
  }
  return (
    <Fragment>
      <div className="sign-in-container">
        <h1>Already have an acccount</h1>
        <label>Sign In with your email and password</label>
        <form onSubmit={onSubmit}>
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

          <div className="buttons-container">
            <Button type="submit" buttonType="inverted">
              Sign In
            </Button>
            <Button
              onClick={SignInWithGoogle}
              buttonType="google"
              type="button"
            >
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default SignIn
