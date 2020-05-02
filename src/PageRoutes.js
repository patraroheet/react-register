import React from 'react';
import {Switch, Route} from "react-router-dom";
import SignIN from './Sign-in';
import SignUP from './Sign-up';
import Home from './Home';
import NotFound from './NotFound';
import userdetail from './Components/userdetail';


export default function PageRoutes() {
    return (
        <Switch>
            <Route path="/react-register" exact component={Home} />
            <Route path="/signup" component={SignUP} />
            <Route path="/signin" component={SignIN} />
            <Route path="/:id/userdetail" component={userdetail} />
            <Route component={NotFound} />
        </Switch>
    )    
}
