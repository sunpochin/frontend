import counterSlice from './counter-slice';
import authSlice from './auth-slice';

// import redux, { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// const counterReducer = (state = initialState, action) => {
// 	if ('add' === action.type) {
// 		console.log('payload: ', action.payload);
// 		return {
// 			counter: state.counter + action.payload,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if ('decrement' === action.type) {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if ('toggle' === action.type) {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}
// 	return state;
// };
// const store = createStore(counterReducer);

const store = configureStore({
	// reducer: counterSlice.reducer,
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
