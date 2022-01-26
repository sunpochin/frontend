import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
		console.log('state: ', state);
		return state.counter.counter;
	});
  const show = useSelector((state) => {
		console.log('show: ', state);
		return state.counter.showCounter;
	});

  const incrementHandler = () => {
		// dispatch(counterActions.increment());
		dispatch({
			type: 'add',
			payload: 1,
		});
	}
  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5));
    // dispatch({
    //   type: 'add',
    //   payload: 5 
    // });
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
