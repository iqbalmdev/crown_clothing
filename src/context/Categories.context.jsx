import { useState, createContext, useEffect } from 'react'
import {
  addCollectionDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils'
import SHOP_DATA from '../shop-data'
export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  // useEffect(() => {
  //   addCollectionDocuments('categories', SHOP_DATA)
  // }, []) for adding colection in to for base database

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories')

      setCategoriesMap(categoryMap)
      console.log(categoryMap, 'catgeory map see here')
    }
    getCategoryMap()
  }, [])

  const value = {
    categoriesMap,
  }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
