import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './style.scss';

// Random component
const Completionist = () => <span>Happening now!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
		<div className="countdown">
			<h4>
				{days}<span>days</span>
			</h4>
			<h4>
				{hours}<span>hrs</span> 
			</h4>
			<h4>
				{minutes}<span>mins</span>
			</h4>
			<h4>
				{seconds}<span>secs</span>
			</h4>
		</div>
	)
  }
};

class CountdownTimer extends React.Component {
	render() {
		return <Countdown date={Date.UTC(2022, 3, 23, 20, 0)} renderer={renderer} />
	}
}

export default CountdownTimer