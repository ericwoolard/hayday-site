import React from 'react';
import './style.scss';

class InfoSex extends React.Component {
	render() {
        const ifButton = this.props.buttonText;
        if (ifButton) {
            <a class="section-btn" href={this.props.buttonText}>learn more</a>
        }
        let button;
		return (
            <div class="info-sex">
                <div className="img-container">
                    <img src={require('../../assets/images/' + `${this.props.img}`)} alt={this.props.imgAlt} />
                </div>
                <div class="content">
                    <h2 className="section-title">
                        {this.props.title}
                    </h2>
                    <p className="content">
                        {this.props.content}
                    </p>
                    {button}
                </div>
            </div>
        )
	}
}

export default InfoSex