import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div class="card-header">Task 1</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                </ul>
            </div>
        )
    }
}

export default Card;