import React from 'react';
import './style.scss';

class TicketButton extends React.Component {
	render() {
		return (
            <a href="https://www.ticketfairy.com/event/hayday-fest/" class="tickets">
                <span class="box-with-text">
                    <h3 class="text">Tickets!</h3>
                </span> 
            </a>
        )
	}
}

export default TicketButton
