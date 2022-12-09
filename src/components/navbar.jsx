import React, { Component } from 'react';
import companyLogoImg from '../assets/images/logo.png';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="company-logo">
                    <img src={ companyLogoImg } alt="Company Logo"/>
                </div>
                <div className="links">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar