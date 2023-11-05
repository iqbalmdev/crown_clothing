import { createAction } from '../../utils/Reducer/reducer.utils'
import { USER_AUTH_TYPE } from './user.types'
export const setCurrentUer = (user) =>
  createAction(USER_AUTH_TYPE.authStateChanged, user)
// CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
// GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
// EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
// SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
// SIGN_IN_FAILED: 'user/SIGN_IN_FAILED',
// SIGN_UP_START: 'user/SIGN_UP_START',
// SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
// SIGN_UP_FAILED: 'user/SIGN_UP_FAILED',

export const checkUserSession = () =>
  createAction(USER_AUTH_TYPE.CHECK_USER_SESSION)
export const googleSignInStart = () =>
  createAction(USER_AUTH_TYPE.GOOGLE_SIGN_IN_START)
export const emailSignInStart = (email, password) =>
  createAction(USER_AUTH_TYPE.EMAIL_SIGN_IN_START, { email, password })

export const signInSuccess = (payload) =>
  createAction(USER_AUTH_TYPE.SIGN_IN_SUCCESS, payload)
export const signInFailed = () => createAction(USER_AUTH_TYPE.SIGN_IN_FAILED)
export const signUpStart = (email, password, displayName) =>
  createAction(USER_AUTH_TYPE.SIGN_UP_START, {
    email,
    password,
    displayName,
  })

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_AUTH_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails })

export const signUpFailed = (error) =>
  createAction(USER_AUTH_TYPE.SIGN_UP_FAILED, error)
