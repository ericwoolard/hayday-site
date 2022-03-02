import React from 'react';
import bg from '../../assets/images/help-bg.jpg';
import './style.scss';

class HelpOut extends React.Component {
    render() {
        return (
            <div className="help-container">
                <img src={bg} class="help-bg"/>
                <a href="#" target="_blank" className="help-btn">Become a Sponsor!</a>
                <a href="#" target="_blank" className="help-btn">Become a Vendor!</a>
            </div>
        )
    }
}

export default HelpOut