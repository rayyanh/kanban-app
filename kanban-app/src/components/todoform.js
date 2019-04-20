import React, { Component } from 'react';

export default class TodoForm extends React.Component{
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    render(){
        return( 
            <input value ={this.state.text} onChange = {this.handleChange} placeholder = "Add task" />
            )
    }
}