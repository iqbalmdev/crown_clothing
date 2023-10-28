import { USER_AUTH_TYPE } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
}
export const useReducerFunc = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_AUTH_TYPE.authStateChanged:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}
