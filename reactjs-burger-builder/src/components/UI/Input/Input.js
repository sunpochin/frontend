import React from 'react';
import classes from './Input.css';


const input = (props) => {
    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ') } 
                {...props.elementConfig} value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ') } 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ') } 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                    >
                    {props.elementConfig.options.map(option => (
                        <option key ={option.value}>
                            {option.displayValue}
                        </option>
                    ))
                    }
                </select>
            );
            break;

        default:
            inputElement = <input className={classes.InputElement}  
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;
