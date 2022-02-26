import React from 'react';
import './style.scss';

class TicketButton extends React.Component {
	render() {
		return (
            <a href="https://www.ticketfairy.com/event/hayday-fest/" class="tickets">
                <span class="icon"></span> <span class="text">Tickets!</span>
            </a>
        )
	}
}

export default TicketButton
