import React from 'react';

class Button extends React.Component {
	render() {
		return <a href="https://google.com">Buy now {this.props.price}</a>;
	}
}

export default Button