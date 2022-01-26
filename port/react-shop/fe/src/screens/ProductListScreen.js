import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import products from '../products';

const ProductListScreen = () => {
	return (
		<>
			<Container>
				<h1>Latest products</h1>
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

// {products.map(product => (
//   <h3>{product.name}</h3>
// ))}

export default ProductListScreen;
