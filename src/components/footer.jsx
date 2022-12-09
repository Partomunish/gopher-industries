import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>GOPHER INDUSTRIES</h3>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="social">
                                <a className="icon-container twitter-icon" href="#">
                                    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                </a>
                                <a className="icon-container fb-icon" href="#">
                                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                </a>
                                <a className="icon-container instagram-icon" href="#">
                                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                                </a>
                                <a className="icon-container linkedin-icon" href="#">
                                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-statement">
                        <span>&copy; Copyright <strong>Gopher Industries</strong>. All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;