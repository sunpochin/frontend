import './SingleCard.css';

export const SingleCard = ({ card }) => {
	return (
		<div className='card'>
			<div>
				<img className='front' src={card.src} alt='card front' />
				<img className='back' src='/img/cover.png' alt='cover' />
			</div>
		</div>
	);
}

// import React from 'react'

// export const SingleCard = () => {
//   return (
//     <div>SingleCard</div>
//   )
// }
