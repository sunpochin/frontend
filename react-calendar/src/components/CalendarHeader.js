import React from 'react'
import logo from '../assets/logo.png'

export default function CalendarHeader() {
  return (
		<header className='px-4 py-2 flex items-center'>
			<img src={logo} alt='' className='mr-2 w-12 h-12' />
			<h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
			<button className='border rounded py-2 px-4 mr-5'>Today</button>
			<button>
				<span className='material-icons-outlined'>chevron_left</span>
			</button>
			<button>
				<span className='material-icons-outlined'>chevron_right</span>
			</button>
		</header>

		// <div></div>
	);
}
