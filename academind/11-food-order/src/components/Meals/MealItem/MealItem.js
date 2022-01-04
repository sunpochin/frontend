import React, {useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.meal.price}`
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price, 
    });
  };
  return (
    <li className={classes.meal}>
    <div>
      <h3>{props.meal.name}</h3>
      <div className={classes.description}>{props.meal.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealItemForm 
        onAddToCart={addToCartHandler}
        id={props.id}/>
    </div>
    </li>
  )
}

export default MealItem
