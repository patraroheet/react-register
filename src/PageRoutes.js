import React from 'react';
import {Switch, Route} from "react-router-dom";
import SignIN from './Sign-in';
import SignUP from './Sign-up';
import Home from './Home';
import NotFound from './NotFound';
import Userdetail from './Components/userdetail';
import Users from './Components/Users';
import CustomUser from './Components/CustomUser';
import UserAlbums from './Components/useralbum';
import AlbumContent from './Components/albumcontent';



export default function PageRoutes() {
    return (
        <Switch>
            <Route path="/react-register" exact component={Home} />
            <Route path="/signup" component={SignUP} />
            <Route path="/signin" component={SignIN} />
            <Route path="/users" component={Users} />
            <Route path="/userdetails" component={Userdetail} />
            <Route path="/CustomUser" component={CustomUser} />
            <Route path="/useralbums" component={UserAlbums} />
            <Route path="/albumcontent" component={AlbumContent} />
            <Route component={NotFound} />
        </Switch>
    )    
}
