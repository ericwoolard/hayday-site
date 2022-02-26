import React from 'react';
import './style.scss';

class TicketCard extends React.Component {
	render() {
		return (
            <div class="ticket-card">
                <h3>{this.props.tier}</h3>
                <p class="sub-text">Starting at</p>
                <p class="price">{this.props.price} + fees</p>
                <a class="purchase-btn" href={this.props.url} target="_blank">learn more</a>
            </div>
            
        )
	}
}

export default TicketCard