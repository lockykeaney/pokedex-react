import React, { Component } from 'react';
import './App.css';

const PATH = 'http://pokeapi.co/api/v2/pokemon/?limit=151';

class App extends Component {

	constructor(props) {
		super(props);
			this.state = {
				results: null
				// select: "Pokemon"
			}
			this.setPokemonState = this.setPokemonState.bind(this);
			this.fetchAllPokemon = this.fetchAllPokemon.bind(this);
			this.onPokemonSelect = this.onPokemonSelect.bind(this);
		}
		fetchAllPokemon() {
			fetch(PATH)
				.then(response => response.json())
				// .then(json => {console.log(json.results)})
				// .then(results => this.setPokemonState(json.results));
				.then(results => this.setPokemonState(results));
		}
		setPokemonState(results) {
			this.setState({ results: results });
		}
		componentDidMount() {
			const { results } = this.state;
			this.fetchAllPokemon(results);
		}
		onPokemonSelect(event) {
			// this.setState({select: event.target});
			console.log(event);
		}
  	render() {
		const { results } = this.state;
    	return (
      		<div className="App">
        		<Other />
				{ results ? <List results={results} onClick={this.onPokemonSelect}>List</List> : null }
    		</div>
		);
	}

}

const Other = ({ select, children }) =>
	<div className="Other">
		{children} <h2>{select}</h2>
	</div>
const List = ({ results, onClick }) =>
	<ul className="List">
		{results.results.map((result,index) => {
			return (
				<li value={result.url} onClick={onClick} className="List-item" key={index+1} name={result.name}> {index+1} - {result.name} </li>
			)
		})}
	</ul>

export default App;
