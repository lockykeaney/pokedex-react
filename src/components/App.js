import React, { Component } from 'react';

import List from './List';
import Pokemon from './Pokemon';
import Search from './Search';

import Local from '../Local.json';

import '../css/App.css';

const local = Local;

class App extends Component {

	constructor(props) {
		super(props);

			this.fetchSinglePokemon = this.fetchSinglePokemon.bind(this);
			this.setSinglePokemon = this.setSinglePokemon.bind(this);

			this.state = {
				pokemonList: local,
				pokemon: {},
				name: '',
				url: '',
			}
		}

		//Single Pokemon
		fetchSinglePokemon(event) {
			this.setState({ url: event.target.value, name: event.target.name })
			fetch(event.target.value)
				.then(response => response.json())
				// .then(response => console.log(response.json()) )
				.then(pokemon => console.log(pokemon))
				.then(pokemon => this.setSinglePokemon(pokemon));
		}
		setSinglePokemon(pokemon) {
			this.setState({ pokemon: pokemon });
		}

  	render() {
		const { pokemonList, pokemon, url, name } = this.state;
    	return (
      		<div className="Pokedex">
				<div className="Pokedex-left">
					<Pokemon pokemon={pokemon} name={name} url={url} />
				</div>
        		<div className="Pokedex-right">
					<Search />
					{ pokemonList ? <List results={pokemonList} onClick={this.fetchSinglePokemon}>List</List> : null }
				</div>

    		</div>
		);
	}

}

export default App;
