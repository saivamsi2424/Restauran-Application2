import {createContext} from 'react'

const CartContext = createContext({
  cartList: [],
  cartListForQuantity: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
