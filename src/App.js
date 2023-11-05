import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Navigation,
  Authentication,
  Shop,
  Checkout,
} from './router/index'
import { useEffect } from 'react'
import {
  onAuthStateHanlder,
  createUserDocumnetFromAuth,
  getCurrentUser,
  // handleSignOut,
} from './utils/firebase/firebase.utils.js'
import { checkUserSession } from './store/user/user.action'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // const unSubscribe = onAuthStateHanlder(async (authChangResponse) => {
    //   if (authChangResponse) {
    //     const responseFromCreateAuthDocument = await createUserDocumnetFromAuth(
    //       authChangResponse,
    //     )
    //     // console.log(
    //     //   authChangResponse,
    //     //   responseFromCreateAuthDocument,
    //     //   'this is the reponse came from user document creation',
    //     // )
    //     console.log(responseFromCreateAuthDocument)
    //   }
    //   dispatch(setCurrentUer(authChangResponse))

    //   // console.log(authChangResponse, 'handler chnagedddddddd')
    // })
    // return unSubscribe
    // getCurrentUser().then((userAuth) => console.log(userAuth, 'iser Auth'))
    dispatch(checkUserSession())
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
