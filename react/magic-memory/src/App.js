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

	// shuffled cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5) // if positive, sort in ascending order, if negative, sort in descending order
			.map((card) => ({ ...card, id: Math.random() })); // add unique id
		setCards(shuffledCards);
		setTurns(0);
	};

	// console.log('cards: ', cards, ', turns: ', turns);

	// handle a choice
	const handleChoice = (card) => {
		console.log(card);
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

  useEffect(() => {
    console.log('choiceOne: ', choiceOne, ', choiceTwo: ', choiceTwo);
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            return card;
          });
        })
        console.log('same!');
      } else {
        console.log('not same!');
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo])

	const resetTurn = () => {
		setChoiceOne(null);
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
					></SingleCard>
				))}
			</div>

			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}


export default App;
