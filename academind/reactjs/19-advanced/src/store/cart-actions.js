import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
	return async (dispatchzz) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://react-http-7bc61-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
			);
			if (!response.ok) {
				throw new Error('could not fetch cart data');
			}
			const data = await response.json();
			return data;
		};
		try {
			const cartData = await fetchData();
			console.log('cartData: ', cartData);
			if (cartData) {
				if (cartData.items) {
					dispatchzz(cartActions.replaceCart(cartData));
				}
			}

			// dispatchzz(
			// 	cartActions.replaceCart({
			// 		items: cartData.items || [],
			// 		totalQuantity: cartData.totalQuantity,
			// 	})
			// );
		} catch (err) {
			console.log('err: ', err);
			dispatchzz(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatchzz) => {
		dispatchzz(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data to server...',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://react-http-7bc61-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({
						items: cart.items || [],
						totalQuantity: cart.totalQuantity || 0,
					}),
				}
			);
			if (!response.ok) {
				throw new Error('Sending cart data failed!');
			}
		};

		try {
			await sendRequest();
			dispatchzz(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data successfully!',
				})
			);
		} catch (err) {
			dispatchzz(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		}
		// const responseData = await response.json();
	};
};
