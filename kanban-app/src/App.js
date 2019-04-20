import React, { Component } from 'react';
import './App.css';
import Board from './components/board';
import Column from './components/column';
import TodoList from './components/todolist';


class App extends Component {
	state = {
		count: 0
	};

	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};
render() {
	return (
	<div className="App">
			<nav className="navbar navbar-light bg-light">
				<img src={require('./logo.svg')} style={{ width: '7%' }} />
				<a className="navbar-brand" href="#">
					
				</a>
			</nav>
			<br/>
			<br/>
			<h4>Kanban Board</h4>
			<br/>
			<div className="container">
			<div className = "row">
					<Column title = "TO DO"></Column>
					<Column title = "IN PROGRESS"></Column>
					<Column title = "COMPLETED"></Column>	
				</div>
			</div>
			
	</div>
	);
}
}

export default App;

