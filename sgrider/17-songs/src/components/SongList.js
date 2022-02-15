import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

export const SongList = () => {
	// const renderList = useSelector((state) => {
	// 	console.log('state: ', state);
	// 	return state.songs.map((song) => {
	// 		return (
	// 			<div className='item' key={song.title}>
	// 				<div className='right floated content'>
	// 					<div className='ui button primary'>Select</div>
	// 				</div>
	// 				<div className='content'>{song.title}</div>
	// 			</div>
	// 		);
	// 	});
	// });
	const songs = useSelector((state) => {
		console.log('state: ', state);
		return state.songs;
	});

	const renderList = songs.map((song) => {
		return (
			<div className='item' key={song.title}>
				<div className='right floated content'>
					<div className='ui button primary'>Select</div>
				</div>
				<div className='content'>{song.title}</div>
			</div>
		);
	});
	console.log('renderList: ', renderList);

	// return '<div>SongList</div>';
	return <div className='ui divided list'>{renderList}</div>;
};

// class SongList extends Component {
//   renderList() {
//     return this.props.songs.map(song => {
//       return (
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <div className="ui button primary">Select</div>
//           </div>
//           <div className="content">{song.title}</div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return <div className="ui divided list">{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
// 	return { songs: state.songs };
// };

// export default connect(mapStateToProps)(SongList);
