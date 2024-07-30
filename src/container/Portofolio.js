import React, { Component } from "react";
import { Animated } from 'react-animated-css'
import "../style/Portofolio.css";

//img
import chat from "../img/chat.png";
// import pos from "../img/pos.png";
import dashboard from "../img/dashboard.png";
import covid from "../img/covid.png";
import woodcrafy from '../img/woodcrafy.png';
import koko from '../img/koko.png';
// import country from '../img/country.png';
import spotify from '../img/spotify.png';
// import ecommers from '../img/ecommers.png';
import paint from '../img/paint.png';
import tokorameWebsite from '../img/tokorame-website.png'
import tokorameWebapp from '../img/tokorame-app.png'

export default class Portofolio extends Component {
  render() {
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="main-container">
          <div className="portofolio-wrap">
            <h3 className="title">
              MY <span>PORTOFOLIO</span>
            </h3>
            <hr className="bold" />
            <div className="show-wrap">
            <div className="porto-item">
                <a href="https://tokorame.co.id/" target="_blank   " rel="noopener noreferrer">
                  <img width="100%" src={tokorameWebsite} alt="chat" />
                  <p>Tokorame Website</p>
                </a>
              </div>
              <div className="porto-item">
                <a href="https://app.tokorame.co.id/login" target="_blank   " rel="noopener noreferrer">
                  <img width="100%" src={tokorameWebapp} alt="chat" />
                  <p>Tokorame WebApp</p>
                </a>
              </div>
              <div className="porto-item">
                <a href="https://imessage.netlify.app/" target="_blank   " rel="noopener noreferrer">
                  <img width="100%" src={chat} alt="chat" />
                  <p>e-message</p>
                </a>
              </div>
              <div className="porto-item">
                <a href="https://web1-faris.netlify.app/" target="_blank   " rel="noopener noreferrer">
                  <img width="100%" src={dashboard} alt="chat" />
                  <p>Dashbord (UI)</p>
                </a>
              </div>
              <div className="porto-item">
                <a
                  href="https://woodcrafy.com/"
                  target="_blank   "
                  rel="noopener noreferrer"
                >
                  <img width="100%" src={woodcrafy} alt="chat" />
                  <p>Woodcrafy</p>
                </a>
              </div>
              <div className="porto-item">
                <a
                  href="https://kokoindonesia.com/"
                  target="_blank   "
                  rel="noopener noreferrer"
                >
                  <img width="100%" src={koko} alt="chat" />
                  <p>Koko Indonesia</p>
                </a>
              </div>
              <div className="porto-item">
                <a
                  href="https://corona-covid-19-track.netlify.app/"
                  target="_blank   "
                  rel="noopener noreferrer"
                >
                  <img width="100%" src={covid} alt="chat" />
                  <p>Covid</p>
                </a>
              </div>
              <div className="porto-item">
                <a
                  href="https://spotify-react-ui.netlify.app/"
                  target="_blank   "
                  rel="noopener noreferrer"
                >
                  <img width="100%" src={spotify} alt="chat" />
                  <p>Spotify React UI</p>
                </a>
              </div>
              <div className="porto-item">
                <a
                  href="https://react-paint.netlify.app/"
                  target="_blank   "
                  rel="noopener noreferrer"
                >
                  <img width="100%" src={paint} alt="chat" />
                  <p>React Paint</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Animated>
    );
  }
}
