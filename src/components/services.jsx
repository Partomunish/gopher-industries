import React, { Component } from 'react';
import medicineImg from '../assets/images/capsules-solid.svg';
import painAssessmentImg from '../assets/images/stethoscope-solid.svg';
import chatbotSystemImg from '../assets/images/robot-solid.svg';
import dbSolidImg from '../assets/images/database-solid.svg';
import guardianSystemImg from '../assets/images/arrows-to-eye-solid.svg';
import dietListImg from '../assets/images/apple-whole-solid.svg';

class Services extends Component {
    render() {
        return(
            <section className="services">
                <h1>Services</h1>
                <div className="row">
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src={ medicineImg } />
                        </div>
                        <span>Medicine</span>
                    </div>
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src={ painAssessmentImg } />
                        </div>
                        <span>Pain Assessment</span>
                    </div>
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src= { chatbotSystemImg } />
                        </div>
                        <span>Chatbot System</span>
                    </div>
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src={ dbSolidImg } />
                        </div>
                        <span>Medical Database</span>
                    </div>
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src={ guardianSystemImg } />
                        </div>
                        <span>Guardian System</span>
                    </div>
                    <div className="col-md-2">
                        <div className="service-icon-box">
                            <img src= { dietListImg } />
                        </div>
                        <span>Diet List</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;