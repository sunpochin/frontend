import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 6,
		title: 'my first book',
		description: 'The first book I ever wrote',
	},
	{
		id: 'p2',
		price: 5,
		title: 'my 2nd book',
		description: 'The 2nd book I wrote',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}

				{/* <ProductItem
					title='Test'
					price={6}
					description='This is a first product - amazing!'
				/> */}
			</ul>
		</section>
	);
};

export default Products;
