import React, {  } from 'react';

const Stats = ({ pokemon }) =>

<div className="Pokemon-inner">
	<p>#{ pokemon.order }</p>
	<p>Name: { pokemon.name }</p>
	<p>Height: { pokemon.height }</p>
	<p>Weight: { pokemon.weight }</p>
</div>

export default Stats;
