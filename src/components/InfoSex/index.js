import React from 'react';
import './style.scss';

class InfoSex extends React.Component {
    constructor(props) {
        super()
        this.state = {button: props.buttonText}
    }
    static getDerivedStateFromProps(state) {
        return {state}
    }
	render() {
        let button = this.state.button
        const showButton = () => {
            if(button) {
                return <a href={this.props.url} target="_blank" className="purchase-btn">{this.props.buttonText}</a>;
            } else {
                return null
            }
        }
		return (
            <div className={this.props.className} id={this.props.id}>
                <div className="img-container">
                    <img src={require('../../assets/images/' + `${this.props.img}`)} alt={this.props.imgAlt} />
                </div>
                <div className="content">
                    <div>
                        <h2 className="section-title">
                            {this.props.title}
                        </h2>
                    </div>
                    <div className="text">
                        {this.props.children}
                    </div>
                    {showButton()}
                </div>
            </div>
        )
	}
}

export default InfoSex