import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{ paddingBottom: '10%' }}>
            <div className="cardOne">
                <div class="card-header">Task 1</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                </ul>
            </div> 
            </div>  
            <div className="container" style={{ paddingBottom: '10%' }}>
                <div className="cardTwo">
                    <div class="card-header">Task 1</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                    </ul>
                </div>
            </div> 
            </div>
        )
    }
}

export default Card;