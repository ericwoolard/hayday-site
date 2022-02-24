import React from 'react';
import logo from '../../assets/images/HayDayLogo_FPO.svg';
import TicketButton from '../../components/TicketButton';
import './style.scss';

class Masthead extends React.Component {
	render() {
		return (
			<section>
				<div class="logo">
					<img src={logo} alt="" />
				</div>
				<h1 class="title">location placeholder | april 23, 2022</h1>
				<TicketButton />
				<div class="countdown">
					<h4>
						113<span>days</span>
					</h4>
					<h4>
						17<span>hrs</span> 
					</h4>
					<h4>
						42 <span>mins</span>
					</h4>
					<h4>
						31<span>secs</span>
					</h4>
				</div>
			</section>
		)
	}
}

export default Masthead