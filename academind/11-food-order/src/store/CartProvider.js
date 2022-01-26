// 下面的 const CartProvider 是一個 context provider, 裡面把資料直接處理，而沒有使用 reducer.
// 可以跟 17-http 的 CartProvider.js 比較， 17-http 是把 reducer 加在 context provider 中，並且把 reducer 加在 useReducer 中。
// 這兩個 CartProvider.js 互相是 有/無使用 reducer 的翻譯。
// 而且這個檔案的 const cartReducer = (state, action) 改寫到一半，還完全沒有作用。

import React, { useReducer, useState } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if ('ADD_ITEM' === action.type) {
		// use concat to get a new array, not editing old array.
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		console.log(
			'updatedItems: ',
			updatedItems,
			', updatedTotalAmount: ',
			updatedTotalAmount
		);
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if ('REMOVE_ITEM' === action.type) {
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	const [cart, setCart] = useState({ items: [], totalAmount: 0 });
	// const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
	const testaa = useReducer(cartReducer, defaultCartState);
	console.log('testaa[0]: ', testaa[0]);
	console.log('testaa[1]: ', testaa[1]);

	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (actionItem) => {
		dispatchCartAction({ type: 'ADD_ITEM', item: actionItem });
		return;

		setCart((prev) => {
			// const updatedItems = [...prev.items, actionItem];
			const updatedTotalAmount =
				prev.totalAmount + actionItem.price * actionItem.amount;

			const existingCartItemIdx = prev.items.findIndex(
				(item) => item.id === actionItem.id
			);
			const existingCartItem = prev.items[existingCartItemIdx];
			let updatedItems;
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + actionItem.amount,
				};
				updatedItems = [...prev.items];
				updatedItems[existingCartItemIdx] = updatedItem;
			} else {
				updatedItems = prev.items.concat(actionItem);
			}

			console.log(
				'actionItems: ',
				updatedItems,
				', updatedTotalAmount: ',
				updatedTotalAmount
			);

			return { items: updatedItems, totalAmount: updatedTotalAmount };
		});
		// dispatchCartAction({type: 'ADD_ITEM', item: item})
	};
	const removeItemToCartHandler = (id) => {
		console.log('removeItemToCartHandler: ', id);

		setCart((prev) => {
			const existingCartItemIdx = prev.items.findIndex(
				(item) => item.id === id
			);
			const existingCartItem = prev.items[existingCartItemIdx];
			const updatedTotalAmount = prev.totalAmount - existingCartItem.price;
			let updatedItems;
			// console.log(
			// 	'existingCartItem: ',
			// 	existingCartItem,
			// 	', existingCartItemIdx: ',
			// 	existingCartItemIdx
			// );
			// console.log('prev.items: ', prev.items);

			if (existingCartItem.amount === 1) {
				// === 1, last item, remove Item from completely.
				// updatedItems = prev.items;
				// updatedItems.splice(existingCartItemIdx, 1);
				updatedItems = prev.items.filter((item) => item.id !== id);
			} else {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount - 1,
				};
				updatedItems = [...prev.items];
				updatedItems[existingCartItemIdx] = updatedItem;
			}
			console.log(
				'updatedItems: ',
				updatedItems,
				', updatedTotalAmount: ',
				updatedTotalAmount
			);
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		});
		// dispatchCartAction({type: 'REMOVE_ITEM', id: id})
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		// items: cartState.items,
		// totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
