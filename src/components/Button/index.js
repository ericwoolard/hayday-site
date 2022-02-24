import React from 'react';
import './style.scss';

class Button extends React.Component {
	render() {
		return <a href="https://google.com">Buy now {this.props.price}</a>;
	}
}

export default Button