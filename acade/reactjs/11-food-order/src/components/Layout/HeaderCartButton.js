import React, {useContext, useEffect, useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // const numOfCartItems = cartCtx.items.length;
  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    console.log('curNum: ', curNum, ' item.amount:', item.amount);
    return curNum + item.amount
  }, 0);
  console.log('num of cartitems: ', numOfCartItems,
  'cartCtx.items: ', cartCtx.items);
  console.log('cartCtx.totalAmount: ', cartCtx.totalAmount.toFixed(2) );

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  const {items} = cartCtx;
  useEffect(() => {
    if (cartCtx.items.length === 0 ) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [items, cartCtx.items.length] )

  return (
    <button 
      onClick = {props.onClick}
      className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart:</span>
      <span className={classes.badge}>
      {numOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton
