import React, {  } from 'react';
import Sprite from './Sprite';
import Stats from './Stats';
import Description from './Description';

const Pokemon = ({ pokemon, description, image }) =>

	<div className="Pokemon">
		<Sprite image={image} />
		<Stats pokemon={pokemon} />
		<Description description={description} />
	</div>

export default Pokemon;
