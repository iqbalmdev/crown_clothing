import { compose, applyMiddleware } from 'redux'
import { legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log('type:', action.type)
  console.log('type:', action.payload)

  console.log('current state', store.getState())

  next(action)
  console.log('nextstate', store.getState())
}
const middleWares = [loggerMiddleWare]

const composeEnhancer = compose(applyMiddleware(...middleWares))
export const store = legacy_createStore(rootReducer, undefined, composeEnhancer)
