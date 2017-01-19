import React, { Component } from 'react';

const Pokemon = ({ url, children, name }) =>
	<div className="Pokemon">
		{children} <h2>{name}</h2>
		<p>{url}</p>
	</div>

// class Pokemon extends Component {
// 	render() {
// 		const { details } = this.props;
// 		return (
// 			<div className="Pokemon">
// 				<h2>{details.name}</h2>
// 			 	<p>{details.url}</p>
// 			 </div>
// 		)
// 	}
// }
export default Pokemon;
