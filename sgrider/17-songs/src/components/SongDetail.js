import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySong }) => {
	console.log('songDetail props: ', mySong);
	const content = mySong ? (
		<div>
			<h3>Details for </h3>
			<p>
				Title: {mySong.title}
				<br />
				Duration: {mySong.duration}
			</p>
		</div>
	) : (
		<>Please Select a song</>
	);
	return content;
};

const mapStateToProps = (state) => {
	return {
		mySong: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);
