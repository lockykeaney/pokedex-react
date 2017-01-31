import React, {  } from 'react';

const Pokemon = ({ pokemon, description, image }) =>

	<div className="Pokemon">
		<div className="Pokemon-inner">
			<p>#{ pokemon.order }</p>
			<p>Name: { pokemon.name }</p>
			<p>Height: { pokemon.height }</p>
			<p>Weight: { pokemon.weight }</p>
		</div>
		<div className="Pokemon-inner">
			<p>Description: { description }</p>
			<img src={image} />
		</div>
	</div>

export default Pokemon;
