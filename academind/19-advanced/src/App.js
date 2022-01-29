import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => {
		console.log('state: ', state);
		return state.ui.cartIsVisible;
	});
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	// this useEffect can be in other components too.
	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data to server...',
				})
			);

			const response = await fetch(
				'https://react-http-7bc61-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);
			if (!response.ok) {
				throw new Error('Sending cart data failed!');
			}
			const responseData = await response.json();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data successfully!',
				})
			);
		};

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch((err) => {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
