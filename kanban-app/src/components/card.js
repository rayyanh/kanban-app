import React, { Component } from 'react';
import TodoList from './todolist';

class Card extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{ paddingBottom: '10%' }}>
            <div className="cardOne">
                        <div className="container"><TodoList /></div>
                        
            </div> 
            </div>  
            </div>
        )
    }
}

export default Card;