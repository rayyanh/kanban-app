import React, { Component } from 'react';
import TodoList from './todolist';

class Card extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{ paddingBottom: '10%' }}>
            <div className={this.props.color}>
                        <div className="container"><TodoList /></div>
                        
            </div> 
            </div>  
            </div>
        )
    }
}

export default Card;