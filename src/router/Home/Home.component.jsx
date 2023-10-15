import React from 'react'
import DirectoryComp from '../../components/Directory/directory-component'
import { addNewCollection } from '../../utils/firebase/firebase.utils'
const Home = () => {
  return (
    <div>
      <DirectoryComp />
      <button onClick={addNewCollection}>Add new collection</button>
    </div>
  )
}

export default Home
