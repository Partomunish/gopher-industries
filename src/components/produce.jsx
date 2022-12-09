import React, { Component } from "react";
import medicineImg from '../assets/images/capsules-solid2.svg';
import painAssessmentImg from '../assets/images/stethoscope-solid2.svg';
import chatbotSystemImg from '../assets/images/robot-solid2.svg';
import dbSolidImg from '../assets/images/database-solid2.svg';
import guardianSystemImg from '../assets/images/arrows-to-eye-solid2.svg';
import dietListImg from '../assets/images/apple-whole-solid2.svg';

class Produce extends Component {
    render() {
        return(
            <section className="produce">
                <div className="container">
                    <h1>Produce</h1>
                    <div className="button-container">
                        <a className="medicine-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ medicineImg } />
                                </div>
                                <span>Medicine</span>
                            </div>
                        </a>
                        <a className="pain-assessment-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ painAssessmentImg } />
                                </div>
                                <span>Pain Assessment</span>
                            </div>
                        </a>
                        <a className="chatbot-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ chatbotSystemImg } />
                                </div>
                                <span>Chatbot System</span>
                            </div>
                        </a>
                        <a className="medical-db-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ dbSolidImg } />
                                </div>
                                <span>Medical Database</span>
                            </div>
                        </a>
                        <a className="guardian-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ guardianSystemImg } />
                                </div>
                                <span>Guardian System</span>
                            </div>
                        </a>
                        <a className="diet-btn" type="button" href="#">
                            <div className="container">
                                <div className="service-icon-box">
                                    <img src={ dietListImg } />
                                </div>
                                <span>Diet List</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Produce;