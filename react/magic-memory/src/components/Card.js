import React from 'react'
import './Card.css'

export const Card = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  }

	return (
		<div className='card'>
			<img className='front' src={card.src} />
			<img className='back' onClick={handleClick} src='/img/cover.png' />
		</div>
	);
};

