import React, { Component } from 'react';
import './App.css';

const PATH = 'http://pokeapi.co/api/v2/pokemon/?limit=151';

class App extends Component {

	constructor(props) {
		super(props);
			this.state = {
				results: null,
				pokemon: {},
				name: '',
				url: '',
			}
			this.setPokemonState = this.setPokemonState.bind(this);
			this.fetchAllPokemon = this.fetchAllPokemon.bind(this);
			// this.onPokemonSelect = this.onPokemonSelect.bind(this);
			this.fetchSinglePokemon = this.fetchSinglePokemon.bind(this);
		}
		//All Pokemon
		fetchAllPokemon() {
			fetch(PATH)
				.then(response => response.json())
				.then(results => this.setPokemonState(results));
		}
		setPokemonState(results) {
			this.setState({ results: results });
		}
		//Single Pokemon
		fetchSinglePokemon(event) {
			this.setState({url: event.target.value, name: event.target.name})
			fetch(this.state.url)
				.then(response => response.json())
				.then(pokemon => this.setSinglePokemon(pokemon))
				.then(console.log(this.state.pokemon));
		}
		setSinglePokemon(pokemon) {
			this.setState({ pokemon: pokemon })
		}
		componentDidMount() {
			const { results } = this.state;
			this.fetchAllPokemon(results);
		}
		componenetWillMount() {
			const { pokemon } = this.state;
			this.fetchSinglePokemon(pokemon);
		}
  	render() {
		const { results, pokemon, url, name } = this.state;
    	return (
      		<div className="Pokedex">
				<div className="Pokedex-left">
					<Pokemon pokemon={pokemon} name={name} url={url} />
				</div>
        		<div className="Pokedex-right">
					<Search />
					{ results ? <List results={results} onClick={this.fetchSinglePokemon}>List</List> : null }
				</div>

    		</div>
		);
	}

}

const Pokemon = ({ name, url, children, pokemon }) =>
	<div className="Pokemon">
		<div className="Pokemon-sprite"></div>
		{children} <h2>{name}</h2>
		<p>{pokemon.name}</p>
		<p>{url}</p>
	</div>

const Search = ({ onSubmit, onChange, value, children }) =>
	<form className="Search" onSubmit={onSubmit}>
		<input className="Search-input" type="text" value={value} onChange={onChange} />
		<button className="Search-submit" type="submit" value="Search">{children}</button>
	</form>

const List = ({ results, onClick }) =>
	<div className="List">
		{results.results.map((result,index) => {
			return (
				<button value={result.url} onClick={onClick} key={index+1} name={result.name} className="List-item"> {index+1} - {result.name} </button>
			)
		})}
	</div>

export default App;
