import List from './List';

const RightSide = ({ results, children }) =>
	<div className="RightSide">
		{children} { results ? <List results={results} onClick={this.onPokemonSelect}>List</List> : null }
	</div>

module.exports = RightSide;
