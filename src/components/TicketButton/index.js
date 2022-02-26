import React from 'react';
import './style.scss';

class TicketButton extends React.Component {
	render() {
		return (
            <a href="https://www.ticketfairy.com/event/hayday-fest/" className="tickets">
                <span className="icon"></span> <span className="text">Tickets!</span>
            </a>
        )
	}
}

export default TicketButton
