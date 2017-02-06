import React from 'react';

const Search = ({ onSearch }) =>

	<form
		className="Search"
		onSearch={onSearch} >
		<input
			className="Search-input"
		/>
	</form>

export default Search;
