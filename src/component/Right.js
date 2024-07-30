import React, { Component, Fragment } from 'react'
import "../style/Right.css"
import { Animated } from "react-animated-css";
import Me from "../img/me.png";

export default class Right extends Component {
    render() {
        return (
            <Fragment>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="right">
                        <div className="cover-photo">
                            <img className="img-profile" src={Me} alt="d "  />
                        </div>
                        <div className="identity">
                            <h3>IRFANSYAH M AL-FARIS</h3>
                            <p>Front-end Development</p>
                        </div>
                        <div className="cover-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/lavine.lavine.3" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/irfansyahfrs_/" target="_blank   " rel="noopener noreferrer">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/irfansyahfaris12" target="_blank   " rel="noopener noreferrer">
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Animated>
            </Fragment>
        )
    }
}
