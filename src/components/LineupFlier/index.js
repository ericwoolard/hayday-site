import React from 'react';
import './style.scss';
import flier from '../../assets/images/ff-flier.jpg';

class LineupFlier extends React.Component {
    render() {
        return (
            <section className="flier-container">
                <img src={flier} class="lineup-flier"></img>
            </section>
        )
	}
}

export default LineupFlier