import { createContext, useState, useEffect } from 'react'
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
})
export const decreaseTheCartItem = (cartItem, productToReduceTheCount) => {
  console.log('comes from reduce function')
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
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const [total, setTotal] = useState(0)
  const setCount = () => {
    cartItems.reduce((total, currentItem) => {
      console.log(currentItem.quantity, 'see here the quantity')
      console.log(total + currentItem.quantity, 'see here the quantity iess')
      return total + currentItem.quantity
    }, 0)
  }

  const deleteCartItem = (productToDelete) => {
    console.log('delete the cart function', productToDelete)
    const remaningCartItem = cartItems.filter((cartItem) => {
      return cartItem.id !== productToDelete.id
    })

    console.log(remaningCartItem, 'remaong cart Item')
    setCartItems(remaningCartItem)
  }
  useEffect(() => {
    const count = cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity
    }, 0)
    setCartCount(count)
  }, [cartItems])

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd))

  console.log(cartItems, 'product value see here frrom cart context')

  const itemsToReduce = (productToReduce) => {
    return setCartItems(decreaseTheCartItem(cartItems, productToReduce))
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
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
