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
                        <p>"I am a Frontend Developer proficient and well-versed in React JS, React Native, Next JS, and Gatsby js. I am passionate about creating engaging user experiences and interfaces. I am enjoy crafting visually appealing and intuitive designs that enhance usability and functionality. 
                        "</p>
                        <br />
                        <span id="phone">085155406019</span>
                        <span id="email">irfansyah.faris@gmail.com</span>
                        <hr className="hr-botom" />
                        <a className="btn-cv" href="https://drive.google.com/file/d/1rct04jQ2NU1o2AP_rqgjkL8sUuqjBNHY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                        <hr className="hr-botom" />
                    </div>
                </div>
            </Animated>
        )
    }
}
