import { useEffect } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import {
  onAuthStateHanlder,
  createUserDocumnetFromAuth,
  // handleSignOut,
} from '../utils/firebase/firebase.utils'
import { createAction } from '../utils/Reducer/reducer.utils'
export const UserContext = createContext({
  currentUser: null,
  setCurrentUer: () => null,
})

export const USER_AUTH_TYPE = {
  authStateChanged: 'auth_state_changed',
}
const useReducerFunc = (state, action) => {
  console.log(state, 'state ')
  console.log(action.payload, 'action payload')
  console.log(action.type, 'action type')

  switch (action.type) {
    case USER_AUTH_TYPE.authStateChanged:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      throw new Error('Invalid action type')
  }
}

// const INITIAL_STATE = {
//   currentUsera: null,
// }
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUer] = useState(null)

  const [state, dispatch] = useReducer(useReducerFunc, {}) // here the first argument is function need to perform based on dispatch action type and then to set the inital value in our case the inital value is an object;
  // console.log(state, 'state returned from useReducer')
  const { currentUser } = state
  const setCurrentUer = (user) => {
    // dispatch({ type: USER_AUTH_TYPE.authStateChanged, payload: user })
    // const payload = {
    //   user,
    // }
    dispatch(createAction(USER_AUTH_TYPE.authStateChanged, user))
  }
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

      // console.log(authChangResponse, 'handler chnagedddddddd')
      // what is onAuthStateHandler fucntion does is like when ever the sign in and sign out functions changes it will notice that and return  a call back that call back will intrune provide the authChangeResponse that response will needs to be set in the userState i.e. setCurrentUser and then if they are doing signup then needs to creare a user document for them moreover authstate changed will return as a call back that call back will have the object like when a user gets signed up form that object we will do some operations
    })
    return unSubscribe
  }, [])

  const value = {
    currentUser,
    setCurrentUer,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// what user reducer done is like it has two things like const [state,dispatch] = useReducer(action,state) here the state is where it gets returned from the useReducer dispatch is the function that we needs to perform and action is reducer function that function will have multiple secenarios  and sate is where we are giving the action i.e useReucer function to perfomr certain action for that action some intital state you need to perform that inital state is coming from here and when are the place we are using dispatch we are dispatch generaly accepts two arguments like type and payload type is like which function i need to perfrom and payload is like for that dispatch what kind of payload you need to do update like create this payload edit this payload and delete this payload
