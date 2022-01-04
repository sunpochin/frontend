import React, { useReducer, useState } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if ('ADD_ITEM' === action.type) {
    // use concat to get a new array, not editing old array.
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log('updatedItems: ', updatedItems, ', updatedTotalAmount: ', updatedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  if ('REMOVE_ITEM' === action.type) {
  }

  return defaultCartState;
}

const CartProvider = (props) => {
  const [cart, setCart] = useState(
    {items: [], totalAmount: 0}
  );
  // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (newItem) => {
    setCart((prev) => {
      // const updatedItemArray = [...prev.items, newItem];

      const existingCartItemIdx = prev.items.findIndex(
        (item) => item.id === newItem.id
      )
      const existingCartItem = prev.items[existingCartItemIdx];
      let updatedItemArray;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + newItem.amount
        }
        updatedItemArray = [...prev.items];
        updatedItemArray[existingCartItemIdx] = updatedItem;
      } else {
        //
        updatedItemArray = prev.items.concat(newItem);
      }

      const newAmount = prev.totalAmount + newItem.price * newItem.amount;
      
      console.log('newItems: ', updatedItemArray, ', newAmount: ', newAmount);

      return {items: updatedItemArray, totalAmount: newAmount};
    });
    // dispatchCartAction({type: 'ADD_ITEM', item: item})
  };
  const removeItemToCartHandler = (id) => {
    console.log('removeItemToCartHandler: ', id);

    setCart((prev) => {
      const existingCartItemIdx = prev.items.findIndex(
        (item) => item.id === id
      )
      const existingCartItem = prev.items[existingCartItemIdx];
      let updatedItemArray;
      console.log('existingCartItem: ', existingCartItem, ', existingCartItemIdx: ', existingCartItemIdx);
      console.log('prev.items: ', prev.items);

      if (existingCartItem.amount === 1) {
        // === 1, last item, remove Item from completely.
        updatedItemArray = prev.items;
        updatedItemArray.splice(existingCartItemIdx, 1)

        // updatedItemArray = prev.items.filter(item => item.id !== id)
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1
        }
        updatedItemArray = [...prev.items];
        updatedItemArray[existingCartItemIdx] = updatedItem;
      }
      const updatedTotalAmount = prev.totalAmount - existingCartItem.price;
      console.log('updatedItemArray: ', updatedItemArray, ', updatedTotalAmount: ', updatedTotalAmount);
      return {
        items: updatedItemArray, 
        totalAmount: updatedTotalAmount};

    });
    // dispatchCartAction({type: 'REMOVE_ITEM', id: id})
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    // items: cartState.items,
    // totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
