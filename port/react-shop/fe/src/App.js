import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
// import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
// import CartScreen from './screens/CartScreen';

// :id? to make it Optional

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Container>
					<ProductListScreen />
					{/* <Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} /> */}
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
