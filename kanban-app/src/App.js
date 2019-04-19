import React, { Component } from 'react';
import './App.css';
import Board from './components/board';
import Column from './components/column';

class App extends Component {
render() {
	return (
	<div className="App">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="#">QuiccBoard</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
			<li className="nav-item active">
				<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Features</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Pricing</a>
			</li>
			</ul>
		</div>
		</nav>
			<Board/>
			<div className="container">
				<Column/>
			</div>
	</div>
	);
}
}

export default App;

