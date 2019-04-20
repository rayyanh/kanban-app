import React, { Component } from 'react';
import Card from './card';


export default class Column extends Component {
    render() {
        return (
            
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                        </div>
                        <Card color = "cardOne"/>
                    </div>
                </div>  

        )
    }
    
}



