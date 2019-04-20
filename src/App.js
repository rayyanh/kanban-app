import React, { Component } from 'react';
import Header from './Components/layout/header';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import './App.css';
class App extends Component {
  state = {
    todos:
    [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        description: 'Take the trash and put it in trash can',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        description: 'Have dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Play Basketball',
        description: 'Play some hoops',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <Header />
           <AddTodo addTodo={this.addTodo}/>
           <Todo todos={this.state.todos} markComplete={this.markComplete}
         delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
