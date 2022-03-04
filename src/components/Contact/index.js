import React from 'react';
import './style.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <h2>contact</h2>
                <p>For questions or additional info, please feel free to contact us at 
                <a href="mailto:haydaymusicfest@gmail.com"> haydaymusicfest@gmail.com</a>, 
                or on social media @hayday_musicfest</p>
            </div>
        )
    }
}

export default Contact