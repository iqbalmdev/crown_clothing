import { USER_AUTH_TYPE } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}
export const useReducerFunc = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_AUTH_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      }

    case USER_AUTH_TYPE.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      }
    case USER_AUTH_TYPE.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null }
    case USER_AUTH_TYPE.SIGN_OUT_FAILED:
    case USER_AUTH_TYPE.SIGN_UP_FAILED:
      return { ...state, error: payload }
    default:
      return state
  }
}
