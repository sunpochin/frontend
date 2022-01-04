import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, theref) => {
  return (
    <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={theref}{...props.input}/>
    {/* <input id={props.input.id} {...props.input}/> */}
      
    </div>
  )
})

export default Input
