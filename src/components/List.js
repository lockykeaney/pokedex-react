import React from 'react';

const List = ({ results, onClick }) =>
	<div className="List">
		{results.results.map((result,index) => {
			return (
				<button value={result.url} onClick={onClick} key={index+1} name={result.name} className="List-item"> {index+1} - {result.name} </button>
			)
		})}
	</div>

export default List;
