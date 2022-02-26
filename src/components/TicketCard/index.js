import React from 'react';
import './style.scss';

class TicketCard extends React.Component {
	render() {
		return (
            <div className="ticket-card">
                <h3>{this.props.tier}</h3>
                <p className="sub-text">Starting at</p>
                <p className="price">{this.props.price} + fees</p>
                <a className="purchase-btn" href={this.props.url} target="_blank">learn more</a>
            </div>
            
        )
	}
}

export default TicketCard