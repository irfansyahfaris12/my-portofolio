import React, { Component } from 'react'
import "../style/Profile.css"
import { Animated } from "react-animated-css";

export default class Profile extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="main-container">
                    <div className="my-data">
                        <h3 className="title">
                            ABOUT <span>ME</span>
                        </h3>
                        <hr className="bold" />
                        <div className="biodata">
                            <div>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                Name
                        </div>
                            <div>Irfansyah Muhammad Al-faris</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                Date of birth
                        </div>
                            <div>January12th 2000</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                Phone
                        </div>
                            <div>082218143522</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                Email
                        </div>
                            <div>irfansyah.faris@gmail.com</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-globe" aria-hidden="true"></i>
                                Web
                        </div>
                            <div>Irfansyahfaris.com</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                Address
                        </div>
                            <div>Banjar, Jawa barat, Indonesia</div>
                        </div>
                    </div>
                    <p className="line-wrap">
                        <h3 className="title">
                            MY <span>EDUCATION</span>
                        </h3>
                        <hr className="bold" />
                        <div className="table-wrap first-head">
                            <div className="time-table"></div>
                            <div className="content-table">
                                <i class="fa fa-graduation-cap ico-resume" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2019 - now</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        Pondok IT
                                </h5>
                                    <p>
                                    Pondok IT adalah sebuah tempat pendidikan IT Non formal berbasis pondok yang berada di yogyakarta, Membekali santrinya dengan skill IT & ilmu agama Dan mengarahkan santri belajar sesuai PASSION mereka.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2016 - 2018</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SMA IT-TQ IHYA AS-SUNNAH
                                </h5>
                                    <p>
                                        
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2012 - 2015</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SMP IT-TQ IHYA AS-SUNNAH
                                </h5>
                                    <p>
                                        
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2006 - 2012</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SD IT USWATUN HASANAH
                                </h5>
                                    <p>
                                        
                                </p>
                                </div>
                            </div>
                        </div>
                    </p>
                    <div className="my-hoby">
                        <h3 className="title">
                            MY <span>HOBBIES</span>
                        </h3>
                        <hr className="bold" />
                        <p></p>
                        <br />
                        <div className="hobbies">
                            <div className="hobby">
                                <i class="fa fa-film" aria-hidden="true"></i>
                                <h4 >Movie</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-spoon" aria-hidden="true"></i>
                                <h4 >Eat</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-plane" aria-hidden="true"></i>
                                <h4 >Travel</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-futbol-o" aria-hidden="true"></i>
                                <h4 >Football</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Animated>
        )
    }
}
