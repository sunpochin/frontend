import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
	const loggedIn = useSelector((state) => {
		return state.auth.isAuthenticated;
	});

	return (
		<Fragment>
			<Header />
			<Auth />
			{loggedIn && <UserProfile />}
			<Counter />
		</Fragment>
	);
}

export default App;
