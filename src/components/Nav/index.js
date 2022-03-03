import React, { useState } from 'react';
import Hamburger from '../Hamburger';
import fb from '../../assets/images/fb.png';
import ig from '../../assets/images/ig.png';
import './style.scss';

export default function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return ( 
        <div>
            <div className="navigation">
                <ul>
                    {/* <li>
                        <a href="#lineup">lineup</a>
                    </li> */}
                    <li>
                        <a href="#tickets">tickets</a>
                    </li>
                    <li>
                        <a href="#details">venue</a>
                    </li>
                    {/* <li>
                        <a href="#">merch</a>
                    </li> */}
                    <li>
                        <a href="#">faq</a>
                    </li>
                    <li>
                        <a href="#">sponsors/vendors</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li> 
                    <li className='social-icons'>
                        <a href="https://www.facebook.com/Hayday-Music-Fest-112492490933609" className='socials' target="_blank">
                            <div class="social-icons">
                                <img src={fb} />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/hayday_musicfest/" className='socials' target="_blank">
                            <div class="social-icons">
                                <img src={ig} />
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </div>

            

            <style jsx>{`
                @media (max-width: 767px){
                    body {
                        overflow: ${hamburgerOpen ? 'hidden' : 'none'};
                    }
                    .navigation ul{
                        display: ${hamburgerOpen ? 'flex' : 'none'};
                    }
                }
            `}</style>
        </div>
    )
}