import React, {  } from 'react';
import Pokemon from './Pokemon';

const Display = ({ pokemon, url, description, image }) =>

<div className="Pokedex-left">
	<div className="Pokedex-left-top">
		<div className="use-signal"></div>
	</div>
	<div className="Pokedex-left-container">
		<Pokemon pokemon={pokemon} name={name} url={url} description={description} image={image} />
	</div>
</div>

export default Display;
