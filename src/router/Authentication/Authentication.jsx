import React, { Fragment, useEffect } from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
  signInWithGooglePopup,
  createUserDocumnetFromAuth,
  // signInWithGoogleRedirect,
  auth,
} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import SignIn from '../../components/sign-in-form-comp/sign-in-form.component'
import './authentication.styles.scss'
const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup()
  //   const userDocRef = await createUserDocumnetFromAuth(user)
  //   console.log(
  //     userDocRef,
  //     'returing from the firebase user creating instances',
  //   )
  // }

  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth) // this  will bring the redirect user details with auth function in firebase

      console.log(response)
      if (response) {
        alert('response came')

        const userDocRef = await createUserDocumnetFromAuth(response.user) //if response  came we are going to create a userDoc ref
        console.log(userDocRef, 'result coming from firebase')
      }
    }
    fetchData() // then invok the function
  }, [])

  return (
    <Fragment>
      <div className="authentication-container">
        {/* <button onClick={logGoogleUser}>sign In With Google Popup </button> */}
        {/* <button onClick={signInWithGoogleRedirect}>
        sign In With Google Redirect{' '}
      </button>  we are not using the redirect signup function here*/}
        <SignIn />
        <SignUpForm />
      </div>
    </Fragment>
  )
}

export default Authentication
