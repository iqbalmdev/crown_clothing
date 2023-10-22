import { createContext, useState, useEffect, useReducer } from 'react'
import { createAction } from '../utils/Reducer/reducer.utils'
export const addCartItem = (cartItems, productToAdd) => {
  const isExistingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  )
  if (isExistingCartitem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    })
  }
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ]
}

export const CartContext = createContext({
  setCart: false,
  cartItems: [],
  addItemTocart: () => {},
  cartCount: 0,
  deleteCartItem: () => {},
  itemsToReduce: () => {},
  total: 0,
  calculateAmount: () => {},
  cartCounts: 0,
})
export const decreaseTheCartItem = (cartItem, productToReduceTheCount) => {
  console.log(cartItem, 'comes from reduce function')
  const checkTheItemExists = cartItem.find((cart) => {
    return cart.id === productToReduceTheCount.id
  })
  console.log(checkTheItemExists, 'find function works')
  if (checkTheItemExists.quantity >= 2) {
    const returnTheCart = cartItem.map((data) => {
      return data.id === productToReduceTheCount.id
        ? {
            ...data,
            quantity: data.quantity - 1,
          }
        : data
    })

    console.log(returnTheCart, 'items get reduced from the crat')
    return returnTheCart
  } else {
    const removeTheItemFromTheCart = cartItem.filter((data) => {
      return data.id !== productToReduceTheCount.id
    })

    return removeTheItemFromTheCart
  }
}

const reducerFunction = (state, action) => {
  console.log(state.isCartOpen, 'reducer state in help')
  console.log(action.payload, 'reducer action payload in help')
  const { payload } = action
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        ...payload,
      }
    case 'Toogle_cart':
      return {
        ...state,
        isCartOpen: payload.isCartOpen,
      }
    default:
      throw new Error()
  }
}
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const [total, setTotal] = useState(0)
  // const setCount = () => {
  //   cartItems.reduce((total, currentItem) => {
  //     console.log(currentItem.quantity, 'see here the quantity')
  //     console.log(total + currentItem.quantity, 'see here the quantity iess')
  //     return total + currentItem.quantity
  //   }, 0)
  // }

  const deleteCartItem = (productToDelete) => {
    console.log('delete the cart function', productToDelete)
    const remaningCartItem = cartItems.filter((cartItem) => {
      return cartItem.id !== productToDelete.id
    })

    console.log(remaningCartItem, 'remaong cart Item')
    setCartItems(remaningCartItem)
    reduceFunc(remaningCartItem)
  }
  useEffect(() => {
    const count = cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity
    }, 0)
    setCartCount(count)
  }, [cartItems])

  const initialState = {
    cartItemsRed: [],
    cartCounts: 0,
    cartTotalAmount: 0,
    isCartOpen: false,
    isCartOpenFunction: () => {},
  }

  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const reduceFunc = (cartItem) => {
    const count = cartItem.reduce((total, currentItem) => {
      return total + currentItem.quantity
    }, 0)
    const calculateTheTotalAmount = cartItem.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0,
    )
    const payload = {
      cartItemsRed: cartItem,
      cartTotalAmount: calculateTheTotalAmount,
      cartCounts: count,
    }
    // dispatch({
    //   type: 'ADD_CART',
    //   payload,
    // })
    dispatch(createAction('ADD_CART', payload))
  }

  const isCartOpenFunction = (bool) => {
    const payload = {
      isCartOpen: bool,
    }
    // dispatch({
    //   type: 'Toogle_cart',
    //   payload: {
    //     isCartOpen: bool,
    //   },
    // })
    dispatch(createAction('Toogle_cart', payload))
  }
  const addItemToCart = (productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd))
    const { cartItemsRed } = state
    const itemAddedToCart = addCartItem(cartItemsRed, productToAdd)
    reduceFunc(itemAddedToCart)
  }

  console.log(cartItems, 'product value see here frrom cart context')

  const itemsToReduce = (productToReduce) => {
    const res = decreaseTheCartItem(cartItemsRed, productToReduce)
    reduceFunc(res)
  }

  useEffect(() => {
    const calculateAmount = () => {
      const calculateTheTotalAmount = cartItems.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      )
      return setTotal(calculateTheTotalAmount)
    }
    calculateAmount()
  }, [cartItems])
  console.log(total, 'total amount see hereeeeeeee')

  // reducer function
  const { cartItemsRed, cartCounts, cartTotalAmount, isCartOpen } = state
  console.log(cartItemsRed, cartCounts, 'reducer returned help')
  console.log(isCartOpen, 'cartOpen')
  const value = {
    cart,
    setCart,
    addItemToCart,
    cartItems,
    cartCount,
    deleteCartItem,
    itemsToReduce,
    total,
    setTotal,
    reduceFunc,
    cartItemsRed,
    cartCounts,
    cartTotalAmount,
    isCartOpen,
    isCartOpenFunction,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
