import React from "react";

export default props => (
    <div>
    <div className = 'row'>
        <div className = "col-9" style={{ textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>
        <div className = "container">
                    <input type="checkbox" className="form-check-input align-middle"></input><p className="align-middle">{props.todo.text} </p>
                </div>
        </div>
            <button className= "col-3 btn btn-danger" onClick={props.onDelete}>x</button>
    </div>
    </div>
);