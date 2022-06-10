import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/f/f1/Nightview_of_Cologne_Cathedrale_across_the_River_Rhine.jpg',
		address: 'Some address 5, 12',
		description: 'This is a first meetup',
	},
	{
		id: 'm2',
		title: 'A 2nd meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg',
		address: 'Some address 10, xx',
		description: 'This is a second meetup',
	},
];

// https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
