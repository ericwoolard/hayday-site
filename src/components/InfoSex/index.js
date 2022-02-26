import React from 'react';
import './style.scss';

class InfoSex extends React.Component {
    constructor(props) {
        super()
        console.log(props.buttonText);
        this.state = {button: props.buttonText}
    }
    static getDerivedStateFromProps(state) {
        console.log(state)
        return {state}
    }
	render() {
        let button = this.state.button
        const showButton = () => {
            if(button) {
                console.log('here if ', button);
                return <a href="" className="purchase-btn">Test</a>;
            } else {
                return null
            }
        }
		return (
            <div className={'info-sex ' + (this.props.align)}>
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