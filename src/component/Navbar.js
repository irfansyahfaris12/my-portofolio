import React, { Component } from 'react'
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";



export default class Navbar extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div>
                    <nav clasname="nav-header">
                        <ul>
                            <li className="active">
                                <Link id="tab-text" to="/">
                                    Welcome
                            </Link>
                            <Link id="tab-icon" to="/">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            </Link>
                            </li>
                            <li className="active">
                                <Link id="tab-text" to="/profile">
                                    Profile
                            </Link>
                            <Link id="tab-icon" to="/profile">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            </Link>
                            </li>
                            <li className="active">
                                <Link id="tab-text" to="/resume">
                                    Resume
                                </Link>
                                <Link id="tab-icon" to="/resume">
                                <i className="fa fa-file-text" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/portofolio" id="tab-text">
                                    PORTOFOLIO
                                </Link>
                                <Link id="tab-icon" to="/portofolio">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="active">
                                <Link id="tab-text">
                                CONTACT
                                </Link>
                                <Link id="tab-icon">
                                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Animated>
        )
    }
}
