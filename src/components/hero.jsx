import React, { Component } from 'react';
import slideImg1 from '../assets/images/slide1.png';
import slideImg2 from '../assets/images/slide2.png';
import slideImg3 from '../assets/images/slide3.png';
class Hero extends Component {
    render() {
        return (
            <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={ slideImg1 } alt="Slide1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="hero-heading">Welcome to GOPHER INDUSTRIES</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ slideImg2 } alt="Slide2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="hero-heading">Building Healthier Communities</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ slideImg3 } alt="Slide3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="hero-heading">Building Healthier Communities</h1>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Hero;