import {
  // addCollectionDocuments,
  getCategoriesAndDocuments,
} from '../../utils/firebase/firebase.utils'
import { getAllCategories } from '../categories/categories.action'
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()
useEffect(() => {
  const getCategoryMap = async () => {
    const categoryMap = await getCategoriesAndDocuments('categories')

    dispatch(getAllCategories(categoryMap))
  }
  getCategoryMap()
}, [])
