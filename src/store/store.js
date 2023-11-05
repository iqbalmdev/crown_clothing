import { compose, applyMiddleware } from 'redux'
import { legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { loggerMiddleWare } from '../middleware/logger'
// import thunk from 'redux-thunk'
// if we want to use custom logger than do that or use logger alone
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'], // config setup
}
const persistedReducer = persistReducer(persistConfig, rootReducer) // pressistreducer function will accept two arguments like configraton and rootReducer  rootreducer is where all the reducer gets combined for doing local storage

// creating a new middle ware called saga -------------
const sagaMiddleWare = createSagaMiddleware()
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  // thunk   thunk is for asynchorus operation redux tunk
  sagaMiddleWare,
].filter(Boolean) // this will do logging of all the redux states in console
const customComposer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose // this is for setting up the redux tool only in dev env compose method for applying middelwares for redux extension tools

const composeEnhancer = customComposer(applyMiddleware(...middleWares)) // this is for logging redux functions using redux logger
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composeEnhancer,
)
// *** important before persisitent reducer we pass the rootreducer diretly inot the  store*****************
// what previuosly is like we are oly passing the store state in the create store insted now we are passing the presistedReducer becuasy we need to captire the values of the redux store

sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store)
