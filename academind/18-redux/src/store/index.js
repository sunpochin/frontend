import redux, { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const counterReducer = (state = initialState, action) => {
	if ('add' === action.type) {
		console.log('payload: ', action.payload);
		return {
			counter: state.counter + action.payload,
			showCounter: state.showCounter,
		};
	}

	if ('decrement' === action.type) {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if ('toggle' === action.type) {
		return {
			showCounter: !state.showCounter,
			counter: state.counter,
		};
	}
	return state;
};
// const store = createStore(counterReducer);

const store = configureStore({
	// reducer: { counter: counterSlice.reducer },
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
