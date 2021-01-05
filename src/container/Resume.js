import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "../style/Resume.css";

export default class Resume extends Component {
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
          <div className="resume-wrap">
            <div className="line-wrap">
              <h3 className="title">
                WORK <span>EXPERIENCE</span>
              </h3>
              <hr className="bold" />
              <div className="table-wrap first-head">
                <div className="time-table"></div>
                <div className="content-table">
                  <i class="fa fa-suitcase ico-resume" aria-hidden="true"></i>
                </div>
              </div>
              <div className="table-wrap">
                <div className="time-table">
                  <div>
                    <h5>2019 Desember - 2020 Maret</h5>
                  </div>
                </div>
                <div className="content-table">
                  <i className="dot"></i>
                  <div>
                    <h5>CV.Bajuku Indonesia</h5>
                    <p>CV Bajuku Indonesia adalah Perusahaan yang berbasis online dan mempunyai beberapa bidang usaha yaitu, Creativy yang bergerak di pelatihan pengembangan diri, WoodCrafy berupa stand drip coffee, lalu ada aksesoris jilbap murah (AJMI), KokoIndonesia atau baju koko dan di dunia perbengkelan ada Noken As racing serta kursus Korter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-skill">
              <h3 className="title">
                MY <span>SKILL</span>
              </h3>
              <hr className="bold" />
              <div className="skill">
                <div className="name-bar">
                  <span>HTML</span>
                  <span>85%</span>
                </div>
                <div className="bar-skill">
                  <div className="percent-skill-85"></div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>CSS/SCSS</span>
                    <span>85%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-85"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>JAVASCRIPT</span>
                    <span>70%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-70"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>REACT JS</span>
                    <span>70%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-70"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>REACT NATIVE</span>
                    <span>50%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-50"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>BOOTSTRAP</span>
                    <span>75%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-75"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>FIREBASE DATABASE</span>
                    <span>40%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-40"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>WORDPRESS & SHOPIFY</span>
                    <span>50%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-50"></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="name-bar">
                    <span>ENGLISH LANGUEAGE</span>
                    <span>50%</span>
                  </div>
                  <div className="bar-skill">
                    <div className="percent-skill-50"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-service">
              <h3 className="title">
                MY <span>SERVICE</span>
              </h3>
              <hr className="bold" />
              <p>
                I always give the best effort for each projects I did. I give a
                solution with my creative app.
              </p>
              <div className="services">
                <div className="service">
                  <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                  <h4>inovation ideas</h4>
                  <hr />
                  <p>
                    I am ready to start from scratch, or continue the ongoing
                    projects. I always give innovative ideas to build the best
                    applications.
                  </p>
                </div>
              </div>
              <div className="services">
                <div className="service">
                  <i class="fa fa-code" aria-hidden="true"></i>
                  <h4>clean codes</h4>
                  <hr />
                  <p>
                    I always give a clean code to the consumer so the
                    application is easy to understand and easy to develop.
                  </p>
                </div>
              </div>
              <div className="services">
                <div className="service">
                  <i class="fa fa-money" aria-hidden="true"></i>
                  <h4>low price</h4>
                  <hr />
                  <p>
                    Tell your great app to me. Adjust your budget. And "BOOM",
                    your app ready to published.
                  </p>
                </div>
              </div>
              <div className="services">
                <div className="service">
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <h4>best result</h4>
                  <hr />
                  <p>
                    I will give you the best applications for your best ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animated>
    );
  }
}
