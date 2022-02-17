// Action creator
export const selectSong = song => {
	// Return an action
	// console.log('selectSong action creator: ', song);
	return {
		type: 'SONG_SELECTED',
		payload: song,
	};
};
