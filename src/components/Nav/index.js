import React from 'react';
import './style.scss';

class Nav extends React.Component {
	render() {
		return ( 
            <nav>
                <li>
                    <a href="#">lineup</a>
                </li>
                <li>
                    <a href="#purchase">tickets</a>
                </li>
                <li>
                    <a href="#details">venue</a>
                </li>
                <li>
                    <a href="#">merch</a>
                </li>
                <li>
                    <a href="#">faq</a>
                </li>
                <li>
                    <a href="#">sponsors/vendors</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li> 
            </nav>
        )
	}
}

export default Nav