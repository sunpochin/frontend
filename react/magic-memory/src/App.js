import './App.css';

import { useEffect, useState } from 'react';
import { SingleCard } from './components/SingleCard';

const cardImages = [
	{ src: '/img/helmet-1.png', matched: false },
  { src: '/img/potion-1.png', matched: false },
	{ src: '/img/ring-1.png', matched: false },
	{ src: '/img/scroll-1.png', matched: false },
	{ src: '/img/shield-1.png', matched: false },
	{ src: '/img/sword-1.png', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	// shuffled cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5) // if positive, sort in ascending order, if negative, sort in descending order
			.map((card) => ({ ...card, id: Math.random() })); // add unique id
		setCards(shuffledCards);
		setTurns(0);

		// setDisabled(false);
		setChoiceOne(null);
		setChoiceTwo(null);
	};
	// console.log('cards: ', cards, ', turns: ', turns);
	// handle a choice
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	useEffect(() => {
		shuffleCards();
	}, [])

  useEffect(() => {
    console.log('choiceOne: ', choiceOne, ', choiceTwo: ', choiceTwo)
    if (choiceOne && choiceTwo) {
			setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card
          });
        });
        console.log('same!');
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
        console.log('not same!');
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards);

	const resetTurn = () => {
		setDisabled(false)
		setChoiceOne(null)
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
	};

	return (
		<div className='App'>
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className='card-grid'>
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			{<p>Turns: {turns}</p>}
		</div>
	);
}


export default App;
