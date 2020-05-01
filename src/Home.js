import React from "react";
import {Link} from "react-router-dom"

export default class Home extends React.Component {
    handleClick = () => {
        this.props.history.push(`/signin`);
    };
render() {
    return (
        <div>
            <label>Go to SignIN</label>
            <br />
            <button><Link to="/signin">SIGN-IN</Link></button>
            <button><Link to="/signup">SIGN-Up</Link></button>
          
        </div>
    ); 
}
    
}