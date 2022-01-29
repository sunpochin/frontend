import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
	const dispatchxx = useDispatch();
	const showCart = useSelector((state) => {
		// console.log('state: ', state);
		return state.ui.cartIsVisible;
	});
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		dispatchxx(fetchCartData());
	}, [dispatchxx]);

	// this useEffect can be in other components too.
	useEffect(() => {
		// const sendCartData = async () => {};
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (cart.changed) {
			dispatchxx(sendCartData(cart));
		}
		// sendCartData().catch((err) => {});
	}, [cart, dispatchxx]);

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
