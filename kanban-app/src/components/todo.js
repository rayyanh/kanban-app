import React from "react";

export default props => (
    <div>
    <div className = 'row'>
        <div className = "col-9 center" style={{ textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>
            <p>{props.todo.text} </p>
        </div>
            <button className= "col-3 btn btn-danger" onClick={props.onDelete}>x</button>
    </div>
    </div>
);