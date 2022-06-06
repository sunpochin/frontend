import React, {useState} from 'react';
import './App.css';
import { getMonth } from './util'
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';

function App() {
  // console.table(getMonth(2) )
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  return (
		<React.Fragment>
			<div className='h-screen flex flex-col'>
				<CalendarHeader />
				<div className='flex flex-1'>
					<Sidebar />
					<Month month={currentMonth} />
				</div>
			</div>
		</React.Fragment>
		// {/* <div className="App">
		// </div> */}
	);
}

export default App;
