import React from 'react';

const LeftSide = ({ pokemon, url, children }) =>
	<div className="LeftSide">
		<div className="LeftSide-sprite"></div>
		{children} <h2>{pokemon}</h2>
		<p>{url}</p>
	</div>

module.exports = LeftSide;
