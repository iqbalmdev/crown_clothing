import { combineReducers } from 'redux'
import { useReducerFunc } from './user/user.reducer'
import { categoriesReducerFunc } from './categories/catgeories.reducer'
export const rootReducer = combineReducers({
  user: useReducerFunc,
  categories: categoriesReducerFunc,
})

// we need action that is to update the reducer and get a new state and then seletor is the things that will get the data from the redux moreover the things is like action needs types that types need a action that needs to perform in the reducer switch or conditional statements first the flow is like
// we need to dipatch the the action that action will accept tow things that is type and the payload and whne we trrigger the dipatch reudcer fcntion gets called up thats it
