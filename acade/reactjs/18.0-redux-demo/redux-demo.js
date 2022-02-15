const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + 1 };
		case 'DECREMENT':
			return { counter: state.counter - 1 };
	}
	return {
		counter: state.counter,
	};
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
	const latestStat = store.getState();
	console.log('sub: latest state:', latestStat.counter);
};

console.log(store.getState());
store.subscribe(counterSubscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());
