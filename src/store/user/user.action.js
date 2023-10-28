import { createAction } from '../../utils/Reducer/reducer.utils'
import { USER_AUTH_TYPE } from './user.types'
export const setCurrentUer = (user) =>
  createAction(USER_AUTH_TYPE.authStateChanged, user)
