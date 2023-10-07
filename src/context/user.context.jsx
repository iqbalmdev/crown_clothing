import { useState, useEffect } from 'react'
import { createContext } from 'react'
import {
  onAuthStateHanlder,
  createUserDocumnetFromAuth,
  handleSignOut,
} from '../utils/firebase/firebase.utils'
export const UserContext = createContext({
  currentUser: null,
  setCurrentUer: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUer] = useState(null)

  useEffect(() => {
    const unSubscribe = onAuthStateHanlder(async (authChangResponse) => {
      if (authChangResponse) {
        const responseFromCreateAuthDocument = await createUserDocumnetFromAuth(
          authChangResponse,
        )
        console.log(
          authChangResponse,
          responseFromCreateAuthDocument,
          'this is the reponse came from user document creation',
        )
      }

      setCurrentUer(authChangResponse)

      console.log(authChangResponse, 'handler chnagedddddddd')
    })
    return unSubscribe
  }, [])

  const value = {
    currentUser,
    setCurrentUer,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
