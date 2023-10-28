import { compose, applyMiddleware } from 'redux'
import { legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const middleWares = [logger]

const composeEnhancer = compose(applyMiddleware(...middleWares))
export const store = legacy_createStore(rootReducer, undefined, composeEnhancer)
