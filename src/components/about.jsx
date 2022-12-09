import React, { Component } from 'react';
import aboutImg from '../assets/images/about.png';

class About extends Component {
    render() {
        return(
            <section className="about">
                <div className="container">
                    <h1>About Us</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={ aboutImg } />
                        </div>
                        <div className="col-md-9">
                            <p>Gopher Industries is a Deakin University-owned company dedicated to providing
                                consultancy and software solutions that make people's lives easier.</p>

                            <p><strong>Our vision</strong> is to build healthier communities through enabling
                                technologies.</p>
                            <p><strong>Our mission</strong> is to develop innovative products to monitor,
                                diagnose, and manage health and well-being using state-of-the-art wearable
                                technology, IoT and AI solutions to improve people's health and enable
                                better access to healthcare for the elderly, disadvantaged and disabled.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;