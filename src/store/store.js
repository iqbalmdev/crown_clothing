import { compose, applyMiddleware } from 'redux'
import { legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loggerMiddleWare } from '../middleware/logger'
import thunk from 'redux-thunk'
// if we want to use custom logger than do that or use logger alone
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean)
const customComposer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const composeEnhancer = customComposer(applyMiddleware(...middleWares))
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composeEnhancer,
)

export const persistor = persistStore(store)
