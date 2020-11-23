import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from "routes/Home";
import Auth from "routes/Auth";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn}) => {    
  
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ?  
                    (
                    <>
                    <Router exact path="/">
                        <Home/>
                    </Router>                    
                    <Router exact path="/profile">
                        <Profile />
                    </Router>
                    </>
                    )
                    :
                    (
                    <>
                    <Router exact path="/">
                        <Auth />
                    </Router>                    
                    </>
                    )
                }
            </Switch>
        </Router>
    )
}
export default AppRouter;