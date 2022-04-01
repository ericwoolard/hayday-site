import React from 'react';
import './style.scss';
import flier from '../../assets/images/hayday-lineup-flier.jpg';

class LineupFlier extends React.Component {
    render() {
        return (
            <section className="flier-container">
                <img src={flier} className="lineup-flier"></img>
            </section>
        )
	}
}

export default LineupFlier