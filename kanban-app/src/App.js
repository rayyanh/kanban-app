import React, { Component } from 'react';
import './App.css';
import Board from './components/board';
import Column from './components/column';


class App extends Component {
render() {
	return (
	<div className="App">
			<nav className="navbar navbar-light bg-light">
				<img src={require('./logo.svg')} style={{ width: '7%' }} />
				<a className="navbar-brand" href="#">
					
				</a>
			</nav>
			<Board/>
			<div className="container">
			<div className = "row">
					<Column title = "To Do"></Column>
					<Column title = "In Progress"></Column>
					<Column title = "Completed"></Column>		
				</div>
			</div>
			
	</div>
	);
}
}

export default App;

