import React, { Component } from 'react'
import "../style/Home.css"
import { Animated } from "react-animated-css";

export default class Home extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="main-container">
                    <div className="home-wrap">
                        <h3>Hello, I'am</h3>
                        <h1>Irfansyah Muhammad Al-Faris</h1>
                        <h4>FRONT-END DEVELOPER</h4>
                        <hr className="light" />
                        <p>"A junior front-end developer from Banjar, Indonesia. I always give the best effort for each projects I did. I give a solution with my creative app."</p>
                        <br />
                        <span id="phone">082218143522</span>
                        <span id="email">irfansyah.faris@gmail.com</span>
                        <hr className="hr-botom" />
                        <a className="btn-cv" href="https://drive.google.com/file/d/1rct04jQ2NU1o2AP_rqgjkL8sUuqjBNHY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
            </Animated>
        )
    }
}
