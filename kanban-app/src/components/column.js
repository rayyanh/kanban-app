import React, { Component } from 'react';

export default class Column extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">To Do</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">In Progress</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Done</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}