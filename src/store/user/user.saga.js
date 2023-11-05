import { takeLatest, all, call, put } from 'redux-saga/effects'

import { USER_AUTH_TYPE } from './user.types'

import {
  signInSuccess,
  signInFailed,
  setCurrentUer,
  googleSignInStart,
  signUpStart,
  signUpSuccess,
  signUpFailed,
} from './user.action'
import {
  getCurrentUser,
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
  signInWithAuthEmailAndPassword,
  CreateAuthUserEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

export function* getSnapShotFromUSerAuth(userAuth, additonalInformation) {
  try {
    const getUserSnapShot = yield call(
      createUserDocumnetFromAuth,
      userAuth,
      additonalInformation,
    )
    console.log(getUserSnapShot, 'user snap shot')
    console.log(getUserSnapShot.data(), 'user snap shot data')

    yield put(setCurrentUer(getUserSnapShot.data()))
    yield put(
      signInSuccess({ id: getUserSnapShot.id, ...getUserSnapShot.data() }),
    )
  } catch (err) {
    yield put(signInFailed(err))
  }
}
export function* sagaIsUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)

    if (!userAuth) return
    console.log(userAuth, 'user Auth coming')
    yield call(getSnapShotFromUSerAuth, userAuth)
  } catch (err) {
    yield put(signInFailed(err))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)

    yield call(getSnapShotFromUSerAuth, user)
  } catch (err) {
    yield put(signInFailed(err))
  }
}

export function* signInWithEmailAndPassword({
  type,
  payload: { email, password },
}) {
  // the paramter here we are recieving is the action we are getting from the sign in email start function when ever teh sign in start function triugger it will extact the payload from the sign in email and password functions
  console.log(type, 'type from sign email')
  try {
    const { user } = yield call(signInWithAuthEmailAndPassword, email, password)
    yield call(getSnapShotFromUSerAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(CreateAuthUserEmailAndPassword, email, password)
    yield put(signUpSuccess(user, { displayName }))
  } catch (error) {
    yield put(signUpFailed(error))
  }
}
export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUSerAuth, user, additionalDetails)
}

// saga entry points
export function* signInWithEmailStart() {
  yield takeLatest(
    USER_AUTH_TYPE.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword,
  )
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_AUTH_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onSignUpStart() {
  yield takeLatest(USER_AUTH_TYPE.SIGN_UP_START, signUp)
}
export function* onCheckUserSessionStart() {
  yield takeLatest(USER_AUTH_TYPE.CHECK_USER_SESSION, sagaIsUserAuthenticated)
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_AUTH_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp)
}
export function* userSagas() {
  yield all([
    call(onCheckUserSessionStart),
    call(onGoogleSignInStart),
    call(signInWithEmailStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}
