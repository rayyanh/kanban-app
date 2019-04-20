import React, { Component } from 'react';

export default class Board extends Component{
    render(){
        return (
        <div>
            <br/>
            <div className = ""><h1 className="title">{whatView(boardStance)}</h1></div>
            <br/>
        </div>
        )
    }
}

var boardStance = "Kanban Board";

function whatView(boardStance){
    if(boardStance) {
        return boardStance;
    }
}
