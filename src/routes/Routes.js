import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style/Routes.css"
import Right from "../component/Right";
import Navbar from "../component/Navbar";
import Home from "../container/Home";
import Profile from "../container/Profile";
import Resume from "../container/Resume";
import Portofolio from "../container/Portofolio";

function Routes(){
    return(
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Right />
                    </div>
                    <div className="col-md-8">
                        <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/portofolio" component={Portofolio} />
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default Routes;