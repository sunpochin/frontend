import React, {useState, useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    console.log('item: ', item);
    // cartCtx.addItem(item)
    cartCtx.addItem({...item, amount: 1})
  };

  // <li key={item.id}>{item.name}</li>
  const cartItems = (
    <ul className={classes['cart-items']}>
    {
      cartCtx.items.map((item) => (
          <CartItem 
            key={item.id}
            price={item.price}
            amount={item.amount}
            // onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => {cartItemAddHandler(item)} }
            >
          </CartItem>
      ))}
  </ul>)
    
  // const cartItems = (
  // <ul className={classes['cart-items']}>
  // {
  //   [{id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
  //   <li key={item.id}>{item.name}</li>
  // ))}
  // </ul>)
  
  return (
    <React.Fragment>
        <Modal onClose={props.hideHandler}>
          {cartItems}
          <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button 
              onClick={props.hideHandler}
              className={classes['button--alt']}>Close</button>
            {hasItems && <button 
              onClick={props.hideHandler}
              className={classes.button}>Order</button>
            }
          </div>
          
        </Modal>
{/* 
      {show && (
      )} */}
    </React.Fragment>
  )
}

export default Cart
