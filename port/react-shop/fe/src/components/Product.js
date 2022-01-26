import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

// whiteSpace: 'nowrap',
// textOverflow: 'ellipsis',
// overflow: 'hidden',
// height: '28rem',

const Product = ({ product }) => {
	return (
		<>
			<Card
				className='my-3 p-3 rounded '
				style={{
					overflowY: 'auto',
				}}
			>
				<Card.Img src={product.image} variant='top' />
				<Card.Body>
					<Card.Title as='div'>{product.name}</Card.Title>
					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</Card.Text>
					<Card.Text>{product.price}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Product;
