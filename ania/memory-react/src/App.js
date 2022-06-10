import './App.css';

	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			img: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png',
		},
		{
			name: 'fries',
			img: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			img: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png',
		},
	];

function App() {
	//create your board
	function createBoard() {
	}
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    // card.addEventListener('click', flipCard);

    const grid = document.querySelector('.grid');
    // grid.appendChild(card);
  }

	return (
		<div>
			<h3>
				Score:<span id='result'></span>
			</h3>

			<div className='grid'></div>
			<header className='App-header'></header>
		</div>
	);
}

export default App;
