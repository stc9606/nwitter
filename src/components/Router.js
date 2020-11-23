import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from "routes/Home";
import Auth from "routes/Auth";

const AppRouter = (props) => {
  
    return (
        <Router>
            <Switch>
                {props.isLoggedIn ?  
                    <Router exact path="/">
                        <Home/>
                    </Router>
                    :
                    <Router exact path="/">
                        <Auth/>
                    </Router>
                }
            </Switch>
        </Router>
    )
}
export default AppRouter;