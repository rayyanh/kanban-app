import React, { Component } from 'react';
import Card from './card';


export default class Column extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{columnInfo.title}</h5>
                        </div>
                        <Card/>
                    </div>
                </div>  
            </div>
        )
    }
}

var columnInfo = {
    title: 'To Do',
}

