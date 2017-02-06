import React, { Component } from 'react';

import List from './List';
import Search from './Search';
import Display from './Display';
import Loaders from './Loaders';

import Local from '../Local.json';

import '../css/App.scss';

class App extends Component {

	constructor(props) {
		super(props);

			this.fetchSinglePokemon = this.fetchSinglePokemon.bind(this);
			this.getPokemonDescription = this.getPokemonDescription.bind(this);

			this.state = {
				pokemonList: Local,
				pokemon: {},
				description: '',
				image: null
			}
		}

		//Single Pokemon
		getPokemonDescription(description) {
			fetch(description)
				.then(response => response.json())
				.then(description => console.log(description))
		}

		fetchSinglePokemon(event) {
			fetch(event.target.value)
				.then(response => response.json())
				.then(pokemon => {
					return pokemon;
				} )
				.then(pokemon => this.setState({
					pokemon: pokemon,
					description: pokemon.species.url,
					image: pokemon.sprites.front_default
				}))
		}

  	render() {
		const { pokemonList, pokemon, description, image } = this.state;
    	return (
      		<div className="Pokedex">
				<Loaders />
				<Display
					pokemon={pokemon}
					description={description}
					image={image} />
        		<div className="Pokedex-right">
					<div className="Pokedex-right-container">
					<Search />
					{ pokemonList ?
					<List
						results={pokemonList}
						onClick={this.fetchSinglePokemon} />
					: null }
					</div>
				</div>

    		</div>
		);
	}

}

export default App;
