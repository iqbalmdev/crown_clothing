// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9w-MLnC4NRE9FNOhePbHkLOAGWuXODGE',
  authDomain: 'crown-clothing-mydb.firebaseapp.com',
  projectId: 'crown-clothing-mydb',
  storageBucket: 'crown-clothing-mydb.appspot.com',
  messagingSenderId: '553029419504',
  appId: '1:553029419504:web:dc19a79b919c967732dd35',
}

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider() // googleAuth provider is a class form google firebase

googleProvider.setCustomParameters({
  prompt: 'select_account',
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore() // creating database instanciating the firestore database .... it will directly point our database in our console

//
export const createUserDocumnetFromAuth = async (
  userAuth,
  additonalInformation,
) => {
  console.log(userAuth, 'user auth see here ')
  const userDocRef = doc(db, 'users', userAuth.uid) // database arg1,collection arg2,unique identifier arg3 doc will take 3 arguments
  console.log(userDocRef, 'user doc ref')
  const userSnapShot = await getDoc(userDocRef) // get the data related to the document
  console.log(userSnapShot, 'snap data') // get doc will return an object that object will contain the user details like a snap shot
  console.log(userSnapShot.exists(), 'check the data if exists in our database') //check the data if exists in our database

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInformation,
      }) // creating a new userusing setDoc method with the userDocRef what is in the user Doc is like the firebase database instnce that we need to create the new user
    } catch (error) {
      console.log('error in creating user', error)
    }
  }
  return {
    userDocRef: userDocRef,
  } // if user exists then simply return the userDocRef and then it will contain the user data in the particular colllect
}

export const CreateAuthUserEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }
  const res = await createUserWithEmailAndPassword(auth, email, password)
  console.log(res, 'email password create user')
  return res
}

export const signInEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }
  const res = await signInWithEmailAndPassword(auth, email, password)
  console.log(res, 'user signed in response')
  return res
}
