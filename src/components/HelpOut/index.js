import React from 'react';
import bg from '../../assets/images/help-bg.jpg';
import './style.scss';

class HelpOut extends React.Component {
    render() {
        return (
            <div className="help-container">
                <a 
                href="https://docs.google.com/forms/d/1AP4VQlUKDMlnJWvowBPACwtqjMb2RSNrWyAqcVBtsho/edit?usp=sharing" 
                target="_blank" className="help-btn">Become a Sponsor!</a>
                <a 
                href="https://docs.google.com/forms/d/1r8VzGJi35fCufK5O9Jd9BTJWLZ0t_x8WvT0p8V75_-k/edit?usp=sharing" 
                target="_blank" className="help-btn">Become a Vendor!</a>
                <a 
                href="https://docs.google.com/forms/d/10kLc7zO0haxFtcIW-RybcpGwRcYEPlcOCLGx5tFmlTI/edit?usp=sharing" 
                target="_blank" className="help-btn">Become a Volunteer!</a>
            </div>
        )
    }
}

export default HelpOut