import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
					<p>Copyright ⓒ <a href="https://github.com/sunpochin"> https://github.com/sunpochin </a>  {year}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
