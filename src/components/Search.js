import React from 'react';

const Search = ({ onSubmit, onChange, value, children }) =>
	<form className="Search" onSubmit={onSubmit}>
		<input className="Search-input" type="text" value={value} onChange={onChange} />
		<button className="Search-submit" type="submit" value="Search">{children}</button>
	</form>

export default Search;
